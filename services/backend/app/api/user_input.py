from flask_restx import Resource, Namespace, fields
from flask import request,jsonify
from app import db
from helper.crud import add_user_input, get_all_user_inputs, get_user_input, update_card_deck_state, get_card_decks_for_user_input, add_card_deck, add_card
from helper.analyze import make_flash_cards

user_input_namespace = Namespace("user_input", description="user input related operations")

# user_input_data = api.model('user_input', {
#     'user_input': fields.String(required=True, description='The users input text'),
# })

@user_input_namespace.route("/<int:user_input_id>")
class GetUserInput(Resource):
    def get(self, user_input_id: int):
        user_input = get_user_input(user_input_id)
        if not user_input:
            return f"Could not find the user input {user_input_id}", 404

        card_decks = get_card_decks_for_user_input(user_input_id)

        response = {
            "id": user_input.id,
            "text": user_input.text,
            "created_at": user_input.created_at.isoformat(),
            "updated_at": user_input.updated_at.isoformat(),
            "card_deck_ids": [card_deck.id for card_deck in card_decks]
        }
        return response, 200

@user_input_namespace.route("/", strict_slashes=False)
class UserInputList(Resource):
    def get(self):
        user_inputs = get_all_user_inputs()
        user_input_list = [{"id": user_input.id, "text": user_input.text, "created_at": user_input.created_at.isoformat(), "updated_at": user_input.updated_at.isoformat()} for user_input in user_inputs]
        return user_input_list, 200

    def post(self):
        """add user input to the db and return the id"""
        post_data = request.get_json()
        print(post_data)
        text = post_data.get('user_input')
        user_input_id = add_user_input(text)
        card_deck_id = add_card_deck(user_input_id)
    
        cards = make_flash_cards(text)

        update_card_deck_state(card_deck_id, "processed")

        for card in cards:
            question = card[0]
            answer = card[1]
            add_card(card_deck_id, question, answer)

        response = {
            "user_input_id": user_input_id,
            "card_deck_id": card_deck_id,
        }

        return response, 200
