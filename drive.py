import board
import busio
import adafruit_mcp4725
# i2c = busio.I2C(board.SCL, board.SDA)
# dacx = adafruit_mcp4725.MCP4725(i2c, address=0x61)
# dacy = adafruit_mcp4725.MCP4725(i2c, address=0x60)

def drive(x,y):

    # normx = ((((float(x))/2)/100)+.6)/1.2
    # dacx.normalized_value = normx
    # normy = ((((float(y))/2)/100)+.6)/1.2
    # dacy.normalized_value = normy

    print(x ,y)