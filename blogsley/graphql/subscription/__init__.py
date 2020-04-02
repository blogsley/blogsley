from flask import Blueprint, current_app
from flask_cors import CORS

#Blueprint stuff
#bp = Blueprint('graphql-subscription', __name__, template_folder='templates')
bp = Blueprint('graphql-subscription', __name__)
CORS(bp)

from blogsley.graphql.subscription import routes