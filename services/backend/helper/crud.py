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
    """add user input to the db and return the id"""
    user_input = UserInput(user_input=user_input)
    db.session.add(user_input)
    db.session.commit()
    return user_input.id

def add_card_deck(user_input_id: int):
    """add card deck to the db and return the id"""
    card_deck = CardDeck(user_input_id=user_input_id)
    db.session.add(card_deck)
    db.session.commit()
    return card_deck.id

def add_card(card_deck_id: int, question: str, answer: str):
    """add card to the db and return the id"""
    card = Card(card_deck_id=card_deck_id, question=question, answer=answer)
    db.session.add(card)
    db.session.commit()
    return card.id

def update_card_deck_state(card_deck_id: int, status: str):
    """update the card deck state"""
    card_deck = CardDeck.query.get(card_deck_id)
    card_deck.status = status
    db.session.commit()

def get_user_input(user_input_id: int):
    """get user input from the db"""
    user_input = UserInput.query.get(user_input_id)
    return user_input

def get_card_deck(card_deck_id: int):
    """get card deck from the db"""
    card_deck = CardDeck.query.get(card_deck_id)
    return card_deck

def get_card_status(card_deck_id: int):
    """get card status from the db"""
    card_deck = CardDeck.query.get(card_deck_id)
    return card_deck.status

def get_card_deck_cards(card_deck_id: int):
    """get card deck cards from the db"""
    card_deck = CardDeck.query.get(card_deck_id)
    cards = card_deck.cards
    return cards





    


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