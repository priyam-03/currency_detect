
from __future__ import division, print_function
# coding=utf-8
from flask_cors import CORS
import datetime

import sys
import os
import glob
import re
import numpy as np

# Keras
from tensorflow.keras.applications.imagenet_utils import preprocess_input, decode_predictions
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Flask utils
from flask import Flask, redirect, url_for, request, render_template,send_file,jsonify
from werkzeug.utils import secure_filename
#from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

CORS(app)
# Model saved with Keras model.save()

MODEL_PATH = 'feature_selection.h5'

# Load your trained model
model = load_model(MODEL_PATH)


def model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))

    # Preprocessing the image
    x = image.img_to_array(img)
    # x = np.true_divide(x, 255)
    # Scaling
    x = x/255
    x = np.expand_dims(x, axis=0)

    preds = model.predict(x)
    preds = np.argmax(preds, axis=1)
    if preds == 0:
        preds = "10 "
    elif preds == 1:
        preds = "100"
    elif preds == 2:
        preds = "20"
    elif preds == 3:
        preds = "200"
    elif preds == 4:
        preds = "2000"
    elif preds == 5:
        preds = "50"
    elif preds == 6:
        preds = "500"

    return preds


@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']
        uniqueFileName = str(datetime.datetime.now().timestamp()).replace(".","")
        fileNameSplit = f.filename.split(".")
        ext = fileNameSplit[len(fileNameSplit)-1]
        s = uniqueFileName+"."+ext
                # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', s)
        f.save(file_path)

        # Make prediction
        preds = model_predict(file_path, model)
        result = preds
        print(preds)
        my_dict = {"result": result, "filename": s}
        return jsonify(my_dict)
        # return result
    return None

@app.route('/uploads/<filename>', methods=['GET'])
def getFile(filename):
    s = os.path.join("uploads",str(filename))

    return send_file(s)


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)
