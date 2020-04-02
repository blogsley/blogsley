### Creates 4 workers
gunicorn -k gevent -w 4 "blogsley:create_app()"

gunicorn -b 0.0.0.0:5000 -k gevent "blogsley:create_app()"