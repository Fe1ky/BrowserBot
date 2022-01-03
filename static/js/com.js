
var socket;
// Create JoyStick object into the DIV 'joy1Div'
var Joy1 = new JoyStick('joy1Div');
let xVal;
let yVal;

openSocket();

function openSocket() {
    // initialize socket
    socket = io.connect('http://' + document.domain + ':' + location.port);
    // event listener for when the connection to the server is established
    socket.on('connect', function () {
        console.log('We are connected!')
    });
}

setInterval(function () {

    // console.log(getGamepadStatus())
    
    if(getGamepadName()== "Xbox Wireless Controller Extended Gamepad" & Joy1.GetX() == 0 & Joy1.GetY()==0){
        var joyCon1 = getGamepadStatus()[0];
        // console.log("X: "+joyCon1[0]+", Y: "+joyCon1[1])
        
        joy1X.value = Math.floor(joyCon1[0]*100);
        xVal = Math.floor(joyCon1[0]*100);
        
        joy1Y.value = Math.floor(joyCon1[1]*100);
        yVal = Math.floor(joyCon1[1]*100);
        
    } else {

        joy1X.value = Joy1.GetX();
        xVal = Joy1.GetX();
     
        joy1Y.value = Joy1.GetY();
        yVal = Joy1.GetY();
    }


    data = {
        'xVal': xVal,
        'yVal': yVal
    }
    socket.emit('xyData', data);
}, 50);




