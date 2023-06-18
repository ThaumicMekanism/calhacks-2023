from flask_restx import Resource, Namespace, fields
from flask import request,jsonify
from app import db
from helper.crud import add_user_input
from helper.analyze import make_flash_cards, get_all_card_decks

card_deck_namespace = Namespace("card_deck", description="card deck related operations")

@user_input_namespace.route("/<int:card_deck_id>")
class GetCardDeckInput(Resource):
    def get(self, card_deck_id: int):
        cards = get_all_cards(card_deck_id)
        return cards, 200

@user_input_namespace.route("/")
class CardDeckList(Resource):
    def get(self):
        return get_all_card_decks(), 200
