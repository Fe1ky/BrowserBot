from flask import Flask, render_template, redirect, url_for, request, Response
from flask_socketio import SocketIO
import json
import drive

app = Flask(__name__, static_folder="static", template_folder="templates")
socketio = SocketIO(app)


# @app.route('/', methods=['GET','POST'])
# def login():
#    error = None
#    if request.method == 'POST':
#         if request.form['username'] != 'admin' or request.form['password'] != 'admin':
#            error = 'invalid username or password, please try again'
#         else:
#             return redirect(url_for('home'))
#    return render_template('login.html',error=error)


# @app.route('/drive')
@app.route('/')
def home():
   return render_template('index.html')


# this block of code gets the images from the camera

# def gen(camera):
#     """Video streaming generator function."""
#     while True:
#         frame = camera.get_frame()
#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')



# this block of code serves the video stream over a socket connection

# @app.route('/video_feed')
# def video_feed():
#     """Video streaming route. Put this in the src attribute of an img tag."""
#     return Response(gen(Camera()),
#                     mimetype='multipart/x-mixed-replace; boundary=frame')

# paste this into the image tag in Index.html to stream video {{ url_for('video_feed') }}

@socketio.on('connect')
def connect():
    print("client has connected")


# this gets the joystick data the data from JSON over the socket connection.
@socketio.on('xyData')
def xyData(data):
    # print(data)
    parsedData = json.loads(json.dumps(data))
    # print(parsedData["xVal"]+ ' ' +parsedData["yVal"])
    drive.drive(parsedData["xVal"],(parsedData["yVal"]))

# the code below prints the expected DAC output voltages to the console 
    
    # xTwelveBit = (round(float(parsedData["xVal"])/float(100)*4095)+2048)
    # yTwelveBit = (round(float(parsedData["yVal"])/float(100)*4095)+2048)
    # xVolt = str((5/4096)*xTwelveBit)
    # yVolt = str((5/4096)*yTwelveBit)
    # print("Volts X: " + xVolt + " Volts Y: " + yVolt) 

    
    
    
   

if __name__ == '__main__':
    # app.run()
    socketio.run(app,debug = True)
