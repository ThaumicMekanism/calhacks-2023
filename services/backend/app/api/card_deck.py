from flask_restx import Resource, Namespace, fields
from flask import request,jsonify
from app import db
from helper.crud import add_user_input, get_card_deck_cards, get_card_deck, get_all_card_decks
from helper.analyze import make_flash_cards

card_deck_namespace = Namespace("card_deck", description="card deck related operations")

@card_deck_namespace.route("/<int:card_deck_id>")
class GetCardDeckInput(Resource):
    def get(self, card_deck_id: int):
        card_deck = get_card_deck(card_deck_id)
        if card_deck is None:
            return f"Could not find the card deck {card_deck_id}", 404
        cards = get_card_deck_cards(card_deck_id)
        if cards is None:
            return f"Could not find the card deck {card_deck_id}", 404
        card_list = [{"id": card.id, "question": card.question, "answer": card.answer, "created_at": card.created_at, "updated_at": card.updated_at} for card in cards]
        response = {
            "id": card_deck_id,
            "user_input_id": card_deck.user_input_id,
            "status": card_deck.status,
            "created_at": card_deck.created_at,
            "updated_at": card_deck.updated_at,
            "cards": card_list,
        }
        return response, 200

@card_deck_namespace.route("/")
class CardDeckList(Resource):
    def get(self):
        card_decks = get_all_card_decks()
        card_deck_list = [{"id": card_deck.id, "status": card_deck.status, "created_at": card_deck.created_at, "updated_at": card_deck.updated_at} for card_deck in card_decks]
        return card_deck_list, 200
