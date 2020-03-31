from flask import Blueprint

import blogsley.config

bp = Blueprint('root', __name__, template_folder=blogsley.config.static_folder)

from blogsley.root import routes
