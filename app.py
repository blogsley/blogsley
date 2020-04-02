from blogsley.app import create_app
'''
from blogsley.config import app, db
from blogsley.models.users import User
from blogsley.models.blog import Post
import arrow

#TODO: I'm using a factory now.  Where should this go?

@app.template_filter('humanize')
def humanize(d):
  return arrow.get(d).humanize()

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Post': Post}
'''