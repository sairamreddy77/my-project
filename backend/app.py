from flask import Flask, jsonify,request
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://my-project-ashy-eta.vercel.app"}})


logging.basicConfig(level=logging.DEBUG)

@app.route('/')
def home():
    return jsonify(message="Hello, World!")

@app.route('/display', methods=['POST'])
def display():
    data = request.json
    input_text = data.get('input', '')
    return jsonify({'output': input_text})

if __name__ == '__main__':
    app.run(debug=True)
