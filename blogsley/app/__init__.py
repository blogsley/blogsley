import os
import sys

from flask import Flask, current_app

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

from flask_mail import Mail
from flask_babel import Babel, lazy_gettext as _l
from flask_bootstrap import Bootstrap

import jinja2

import blogsley.config
#TODO:need to sort out getting config from cwd
#from __blogsley__.config import Config
from blogsley.config import Config

class Blogsley(Flask):
    def __init__(self, name, **kwargs):
        super().__init__(name, **kwargs)

    @classmethod
    def create(self, config=None, environment=None):
        print('hello user')
        share_folder = blogsley.config.share_folder
        db_folder = blogsley.config.db_folder
        static_folder = blogsley.config.static_folder
        print(static_folder)

        '''
        if debug:
            if is_pip_install:
                raise Exception('You need to run this in the project root directory!')
        else:
            pass
        '''

        static_url_path = ''

        blogsley.config.app = app = Blogsley(self.__name__, static_url_path=static_url_path, static_folder=static_folder)
        app.config.from_object(Config)

        blogsley.config.db = db = SQLAlchemy(app)
        blogsley.config.migrate = migrate = Migrate(app, db)

        blogsley.config.login = login = LoginManager(app)
        login.login_view = 'auth.login'
        login.login_message = 'Please log in to access this page.'

        blogsley.config.mail = mail = Mail(app)
        blogsley.config.babel = babel = Babel(app)
        bootstrap = Bootstrap(app)

        from blogsley.auth import bp as auth_bp
        app.register_blueprint(auth_bp, url_prefix='/auth')

        from blogsley.images import bp as images_bp
        app.register_blueprint(images_bp, url_prefix='/images')

        from blogsley.root import bp as main_bp
        app.register_blueprint(main_bp)

        from blogsley.events import bp as events_bp
        app.register_blueprint(events_bp, url_prefix='/events')

        from blogsley.graphql import bp as graphql_bp
        app.register_blueprint(graphql_bp)

        return app

def create_app(config=None, environment=None):
    print(config, environment)
    app = Blogsley.create(config, environment)

    #Configure Jinja2
    my_loader = jinja2.ChoiceLoader([
            app.jinja_loader,
            jinja2.FileSystemLoader(['blogsley/templates']),
        ])
    app.jinja_loader = my_loader

    #Configure Login
    from blogsley.models.users import User
    @blogsley.config.login.user_loader
    def load_user(id):
        return User.query.get(int(id))
    
    #GraphQL Subscriptions
    app.app_protocol = lambda environ_path_info: 'graphql-ws'
    from blogsley.sockets import Sockets
    sockets = Sockets(app)
    from blogsley.graphql.subscription import bp as ws
    sockets.register_blueprint(ws, url_prefix=r'/')
    #sockets.register_blueprint(ws)
    return app
    