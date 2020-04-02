  
import os
from dotenv import load_dotenv

basedir = os.getcwd()
load_dotenv(os.path.join(basedir, '.env'))

# Globals
db = None

class Config(object):
    PORT_APP = os.environ.get('PORT_APP')
    if not PORT_APP:
        PORT_APP = 5000
    if os.environ.get("DOKKU_APP_TYPE"):
        MEDIA_ROOT = '/storage/media'
    else:
        MEDIA_ROOT = basedir + '/public/media'

    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'blogsley.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    LOG_TO_STDOUT = os.environ.get('LOG_TO_STDOUT')
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_PORT = int(os.environ.get('MAIL_PORT') or 25)
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') is not None
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    ADMINS = ['your-email@example.com']
    LANGUAGES = ['en', 'es']
    MS_TRANSLATOR_KEY = os.environ.get('MS_TRANSLATOR_KEY')
    ELASTICSEARCH_URL = os.environ.get('ELASTICSEARCH_URL')
    REDIS_URL = os.environ.get('REDIS_URL') or 'redis://'
    POSTS_PER_PAGE = 25

    PUBLISH_HOOK = os.environ.get('PUBLISH_HOOK')