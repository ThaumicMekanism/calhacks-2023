from flask_restx import Resource,Namespace

pong_namespace = Namespace("pong")

class Pong(Resource):
    def get(self):
        return {"status":"success","message":"pinasdg"}

pong_namespace.add_resource(Pong,"")