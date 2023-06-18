import datetime
import os
from app import db
from sqlalchemy.sql import func
from sqlalchemy import Column, Integer, DateTime, ForeignKey

class TrackTimeMixin:

    created_at = db.Column(DateTime, server_default=func.now())
    updated_at = db.Column(DateTime, server_default=func.now(), onupdate=datetime.datetime.now)

class UserInput(db.Model, TrackTimeMixin):
    __tablename__ = "user_inputs"
    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    text = db.Column(db.Text())
    card_decks = db.relationship("CardDeck", backref=db.backref("card_decks", uselist=False))

class CardDeck(db.Model, TrackTimeMixin):
    __tablename__ = "card_decks"
    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    status = db.Column(db.Text())
    user_input_id = db.Column(db.Integer,db.ForeignKey("user_inputs.id"))
    user_input = db.relationship("UserInput", backref=db.backref("user_inputs"))
    cards = db.relationship("Card", backref=db.backref("cards", uselist=False))

class Card(db.Model, TrackTimeMixin):
    __tablename__ = "cards"
    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    card_deck_id = db.Column(db.Integer,db.ForeignKey("card_decks.id"))
    card_deck = db.relationship("CardDeck")
    question = db.Column(db.Text())
    answer = db.Column(db.Text())