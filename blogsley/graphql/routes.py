import os
import sys

from flask import render_template, request, current_app
from flask_graphql import GraphQLView
from graphql.backend import GraphQLCoreBackend

from blogsley.graphql import bp
from blogsley.schema import schema

#from blogsley.graphql.view import GraphQLView

path = os.path.join(os.path.dirname(__file__), "templates/playground.html")
templateFile = open(path)
TEMPLATE = templateFile.read()

class CustomBackend(GraphQLCoreBackend):
    def __init__(self, executor=None):
        super().__init__(executor)
        self.execute_params['allow_subscriptions'] = True

bp.add_url_rule(
    '/graphql/',
    view_func=GraphQLView.as_view(
        'graphql',
        backend=CustomBackend(),
        schema=schema,
        graphiql=True,
        graphiql_template=TEMPLATE,
        subscriptions=True
    )
)

@bp.route('/playground')
def playground():
    return render_template('playground.html')

