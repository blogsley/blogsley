import os
import click
from flask import Flask
from flask.cli import FlaskGroup

import flask_migrate

import blogsley.config
#TODO:Put these commands into seperate files and lazy load/deferred import
#from blogsley.command.populate import populate as do_populate


@click.group(cls=FlaskGroup)
@click.pass_context
def cli(ctx):
    ctx.ensure_object(dict)
    os.environ["FLASK_RUN_FROM_CLI"] = "false"
    #os.environ["FLASK_APP"] = "blogsley:create_app"
    os.environ["FLASK_APP"] = "blogsley"

@cli.command()
@click.pass_context
def init(ctx):
    flask_migrate.init()
    flask_migrate.migrate()
    flask_migrate.upgrade()
    do_populate()

@cli.command()
@click.pass_context
def serve(ctx):
    os.environ["FLASK_ENV"] = "production"
    print(vars(ctx.obj))
    ctx.obj._loaded_app.run()

@cli.command()
@click.pass_context
def dev(ctx):
    os.environ["FLASK_ENV"] = "development"
    blogsley.config.debug = True
    print(vars(ctx.obj))
    ctx.obj._loaded_app.run(debug=True)
    #main(True)

@cli.command()
@click.pass_context
def populate(ctx):
    print(vars(ctx.obj))
    do_populate()
