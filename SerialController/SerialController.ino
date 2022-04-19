long  incoming[2];

#include "Wire.h"
#include "MCP4725.h"

//https://github.com/RobTillaart/MCP4725
MCP4725 MCPx(0x60); 
MCP4725 MCPy(0x61);

float XVal=100;
float YVal=100;



void setup() {
//  pinMode(13, OUTPUT);
  Serial.begin(115200); 
  Serial.println("Ready");

    MCPx.begin();
    MCPy.begin();
    MCPx.setValue(2047.5);
    MCPy.setValue(2047.5);
}

void loop() {

float inputJoyY = abs((analogRead(1))*(200.00/1023.00)-200);
float inputJoyX = abs((analogRead(2))*(200.00/1023.00)-200);


  if(inputJoyY>101 | inputJoyY<99 | inputJoyX>101 | inputJoyX<99 ){
    
     XVal = inputJoyX;
     YVal = inputJoyY;
    } else {

    for (int i = 0; i < 2; i++) {

    incoming[i] = Serial.read();
  }

  if(!Serial.available()){
     XVal = incoming[0];
     YVal = incoming[1];
    } else {
     XVal = 100;
     YVal = 100;
      }

     
      }


    
    if(YVal>170){
      MCPx.setValue((20.475)*(170));
      }
     if(XVal>170){
      MCPy.setValue((20.475)*(170));
      }
      if(XVal<170 && YVal<170 && XVal>29 && YVal>29){
       MCPx.setValue((20.475)*(YVal));
       MCPy.setValue((20.475)*(XVal));
      }

  
    Serial.print("X:");
    Serial.print(XVal);
//    Serial.print(inputJoyX);
    Serial.print(", Y:");
    Serial.println(YVal);
    

}
