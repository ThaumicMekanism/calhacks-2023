from flask_restx import Api
from app.api.ping import ping_namespace
from app.api.pong import pong_namespace
from app.api.user_input import user_input_namespace
from app.api.card_deck import card_deck_namespace

api = Api(version="1.0", title="APIs", doc="/docs/")

api.add_namespace(ping_namespace, "/ping")
api.add_namespace(user_input_namespace, "/user_input")
api.add_namespace(card_deck_namespace, "/card_deck")
