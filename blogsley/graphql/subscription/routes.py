from flask import render_template, request, current_app
from blogsley.schema import schema
from blogsley.graphql.subscription import bp
import os
import sys

import json

from flask import Flask, make_response
from flask_sockets import Sockets

from graphql.backend import GraphQLCoreBackend

from graphql_ws.gevent import GeventSubscriptionServer
from geventwebsocket.handler import WebSocketHandler

from blogsley.schema import schema

from blogsley.graphql.subscription import routes

#from blogsley.graphql.subscription.view import GraphQLView

class CustomBackend(GraphQLCoreBackend):
    def __init__(self, executor=None):
        super().__init__(executor)
        self.execute_params['allow_subscriptions'] = True

#Graphql Subscription Server
subscription_server = GeventSubscriptionServer(schema)
#app = current_app
#app.app_protocol = lambda environ_path_info: 'graphql-ws'


@bp.route('/subscriptions')
def echo_socket(ws):
    print('graphql-ws')
    subscription_server.handle(ws)
    return []

'''
def main(app):
    from geventwebsocket.handler import WebSocketHandler

    #Graphql Subscription Server
    subscription_server = GeventSubscriptionServer(schema)
    #app = current_app
    app.app_protocol = lambda environ_path_info: 'graphql-ws'

    sockets = Sockets(app)
    @sockets.route('/subscriptions')
    def echo_socket(ws):
        subscription_server.handle(ws)
        return []

if __name__ == "__main__":
    from gevent import pywsgi
    from geventwebsocket.handler import WebSocketHandler
    server = pywsgi.WSGIServer(('', 5000), app, handler_class=WebSocketHandler)
    server.serve_forever()
'''