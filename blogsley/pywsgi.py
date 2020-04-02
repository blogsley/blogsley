from gevent import monkey
monkey.patch_all()

'''
from gevent import pywsgi
from geventwebsocket.handler import WebSocketHandler

def run(app):
    server = pywsgi.WSGIServer(('', 5000), app, handler_class=WebSocketHandler)
    server.serve_forever()
'''

from gevent import pywsgi
from geventwebsocket.handler import WebSocketHandler

# https://coderwall.com/p/q2mrbw/gevent-with-debug-support-for-flask
from werkzeug.serving import run_with_reloader
from werkzeug.debug import DebuggedApplication

# If using PyCharm enable Gevent debugging support under:
#   Settings->Build, Execution, Deployment->Python Debugger

#TODO:Web sockets problem with debug:
'''
WebSocket connection to 'ws://localhost:5000/subscriptions' failed: Error during WebSocket handshake:
Sent non-empty 'Sec-WebSocket-Protocol' header but no response was received
'''
def run_server(app):
    server = pywsgi.WSGIServer(('0.0.0.0', 5000), app,
                               handler_class=WebSocketHandler)
    server.serve_forever()

def debug_server(app):
    server = pywsgi.WSGIServer(('', 5000), DebuggedApplication(app), handler_class=WebSocketHandler)
    server.serve_forever()

def run(app):
    if app.debug:
        def debugfn():
            debug_server(app)
        run_with_reloader(debugfn)
    else:
        run_server(app)

if __name__ == "__main__":
    #from app import create_app
    #app = create_app()
    run(app)