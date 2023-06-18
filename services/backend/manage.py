# manage.py

from app import create_app,db
from flask.cli import FlaskGroup
from helper.models import CardDeck, UserInput, Card
# from helper.models import Message

app = create_app()
cli = FlaskGroup(create_app=create_app)

@cli.command('populate_db')
def populate_db():
    "populate reseted database" 
    # message = Message(text="First message!")
    # db.session.add(message)
    # db.session.commit()
    user_input = UserInput(text="First user input!")
    db.session.add(user_input)
    db.session.commit()
    card_deck = CardDeck(user_input_id=user_input.id, status="processed")
    db.session.add(card_deck)
    db.session.commit()
    card = Card(card_deck_id=card_deck.id, question="First question", answer="First answer")
    db.session.add(card)
    db.session.commit()
    print("database creation completed")

@cli.command('reset_db')
def recreate_db():
    """delete and reset database"""
    db.drop_all()
    db.create_all()
    db.session.commit()
    print("database reset done!")

@cli.command('cards')
def cards():
    """get all cards"""
    cards = Card.query.all()
    parsed_cards = [{"id": card.id, "question": card.question, "answer": card.answer, "card_deck_id": card.card_deck_id} for card in cards]
    print(parsed_cards)

if __name__ == "__main__":
    cli()