from flask import Flask, jsonify
from flask_cors import CORS
from .elastic_search_wrapper import ElasticSearchWrapper

app = Flask(__name__)
CORS(app)

def elastic():
    return ElasticSearchWrapper()

@app.route("/")
def hello():
    return "Welcome to The Techo Creatives recruitment assignment"

@app.route("/search/<path:searchkeyword>")
def quicksearch(searchkeyword):
    return jsonify(elastic().search_by_field("description", searchkeyword))


@app.route("/api/v1/hosts")
def hosts():
    result = elastic().search_by_field('name', "nuc")

    parsed_result = [ line['_source'] for line in result ]
    return jsonify({'data': parsed_result})
