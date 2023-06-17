from flask_restx import Api
from app.api.ping import ping_namespace
from app.api.pong import pong_namespace

api = Api(version="1.0",title="APIs",doc="/docs/")

api.add_namespace(ping_namespace,"/ping")
api.add_namespace(pong_namespace,"/pong")

