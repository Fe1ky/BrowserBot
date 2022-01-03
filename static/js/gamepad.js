var haveEvents = 'GamepadEvent' in window;
var haveWebkitEvents = 'WebKitGamepadEvent' in window;
var controllers = {};
var connectStatus = false;

  function connecthandler(e) {
    addgamepad(e.gamepad);
    connectStatus=true
    document.getElementById("conStatus").innerHTML = "Connected to " + controllers[0].id
  }

  function addgamepad(gamepad) {
    controllers[gamepad.index] = gamepad;
  }

function disconnecthandler(e) {
    removegamepad(e.gamepad);
    console.log("Gamepad Disconnected")
    connectStatus = false
    document.getElementById("conStatus").innerHTML = "Controller Disconnected (connect and push buttons to activate)"
  }

function removegamepad(gamepad) {
  var d = document.getElementById("controller" + gamepad.index);
  delete controllers[gamepad.index];
}

function getGamepadStatus(){
  scangamepads();
  
    var controller = controllers[0];
    var joy1=[controller.axes[0],controller.axes[1]];
    var joy2 = [controller.axes[2],controller.axes[3]]
    // console.log("x: "+controller.axes[1]+"y: " +controller.axes[0]);
    // console.log("x: "+controller.axes[2]+"y: " +controller.axes[3]);

  
      return [joy1,joy2]
  }

  function getGamepadName(){
    scangamepads();
    if(connectStatus){
    return (controllers[0].id)
  }
}


function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i] && (gamepads[i].index in controllers)) {
      controllers[gamepads[i].index] = gamepads[i];
    }
  }
}


if (haveEvents) {
  window.addEventListener("gamepadconnected", connecthandler);
  window.addEventListener("gamepaddisconnected", disconnecthandler);
} else if (haveWebkitEvents) {
  window.addEventListener("webkitgamepadconnected", connecthandler);
  window.addEventListener("webkitgamepaddisconnected", disconnecthandler);
} else {
  setInterval(scangamepads, 100);
}