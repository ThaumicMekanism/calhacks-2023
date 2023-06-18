from flask_restx import Resource, Namespace, fields
from flask import request,jsonify
from app import db
from helper.crud import add_user_input
from helper.analyze import make_flash_cards, get_all_user_inputs

user_input_namespace = Namespace("user_input", description="user input related operations")

user_input_data = api.model('user_input', {
    'user_input': fields.String(required=True, description='The users input text'),
})

@user_input_namespace.route("/<int:user_input_id>")
class GetUserInput(Resource):
    def get(self, user_input_id: int):
        return get_user_input(user_input_id), 200

@user_input_namespace.route("/")
class UserInputList(Resource):
    def get(self):
        return get_all_user_inputs(), 200

    def post(self):
        """add user input to the db and return the id"""
        post_data = request.get_json()
        text = post_data.get('user_input')
        user_input_id = add_user_input(text)
    
        cards = make_flash_cards(text)

        card_deck_id = add_card_deck(user_input_id)

        for card in cards:
            question = card[0]
            answer = card[1]
            add_card(card_deck_id, question, answer)

        return user_input_id, 200
