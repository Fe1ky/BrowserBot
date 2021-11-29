
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
    joy1X.value = Joy1.GetX();
    xVal = Joy1.GetX();

    joy1Y.value = Joy1.GetY();
    yVal = Joy1.GetY();

    data = {
        'xVal': xVal,
        'yVal': yVal
    }
    socket.emit('xyData', data);
}, 50);

setInterval(function () {
    joy1Y.value = Joy1.GetY();
    yVal = Joy1.GetY();
}, 50);



