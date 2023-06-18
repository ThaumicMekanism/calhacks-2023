from app import db
from helper.models import Message
from helper.models import CardDeck
from sqlalchemy import asc

def get_all_cards(card_deck_id):
    """get all cards in a card_deck"""

    card_deck = CardDeck.query.get(card_deck_id)
    cards = card_deck.cards
    return cards

def add_user_input(user_input: str):

def add_card_deck(user_input_id: int):

def add_card(card_deck_id: int, question: str, answer: str):

def update_card_deck_state(card_deck_id: int, status: str):

def get_user_input(user_input_id: int):

def get_card_deck(card_deck_id: int):

def get_card_status(card_deck_id: int):

def get_card_deck_state(card_deck_id: int, status: str):





    


def add_message(text):
    "add a message to the db"

    if text.strip() == "":
        return {"status":"error","message":"text is empty"}

    message = Message(text=text)
    db.session.add(message)
    db.session.commit()
    message_json = {"status":"ok",
                    "message":{"id":message.id,
                                "text":message.text,
                                "date":f"{message.date.year}-{message.date.month}-{message.date.day}"
                                }
                    }
    
    return message_json