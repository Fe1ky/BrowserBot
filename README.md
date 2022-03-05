# BrowserBot
Control a wheelchair from a webpage by spoofing out the joystick inputs with a Raspberry Pi.

## How to use
app.py will have the RaspberryPi specific code commented out. you will need to uncomment this and install the the libraries inorder to actually use this with real hardware.


### Wheelchair Control
The wheelchair its self is controlled by the raspberry pi by modulating the output voltage of two MCP4725 digital to analog converter. this emulates the two potentiometers (forward/backwards and left/right) in the original joystick. The DACs are set to out a voltage range from 0-5v with 2.5 being "home" or "no movement"

### Flask Server

A webpage with (un-authenticated) login is hosted to the local network by a Flask server. the position of the Joystick is sent from the webpage to the Python server via a socket connection with the 'x' and 'y' positions encoded in a JASON packet 

### Hardware Controller
connect a hardware game controller to you computer and open webpage with Chrome, press a few butttons on the controller to wake it up and use the hardware joystick to control the bot. this works thanks to the Gamepad API (currently only tested with a single XBox One controller)

### joystick 

The joystick itself comes from bobboteck's project https://github.com/bobboteck/JoyStick
  
