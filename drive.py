
# Uncomment Below code to drive DACS from RasPi IO

# import board
# import busio
# import adafruit_mcp4725

from time import sleep
import serial
import struct
# ser = serial.Serial(port='/dev/cu.usbserial-1410', baudrate=115200, timeout=.1) 

# i2c = busio.I2C(board.SCL, board.SDA)
# dacx = adafruit_mcp4725.MCP4725(i2c, address=0x61)
# dacy = adafruit_mcp4725.MCP4725(i2c, address=0x60)

# def drive(x,y):

#     normx = ((((float(x))/2)/100)+.6)/1.2
#     dacx.normalized_value = normx
#     normy = ((((float(y))/2)/100)+.6)/1.2
#     dacy.normalized_value = normy


#     print(x ,y)

def drive(x,y):

    y=abs(-int(y)+100)
    x=abs(int(x)+100)
  
    # ser.write(struct.pack('>BB',x,y))
    # print (ser.readline())


    print(x ,y)