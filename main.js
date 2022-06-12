var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var color = "red";
var line_width;
var radius;
var mouseevent = "empty";
var last_position_of_x;
var last_position_of_y;


canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e) {
    color = document.getElementById("colour").value;
    line_width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", mouse_up);

function mouse_up(e) {
    mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave", mouse_leave);

function mouse_leave(e) {
    mouseevent = "mouseleave";
}

canvas.addEventListener("mousemove", mouse_move);

function mouse_move(e) {
    var position_of_x = e.clientX - canvas.offsetLeft;
    var position_of_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        console.log("Current position of x and y coordinates = ")
        console.log("x = " + position_of_x + "y = " + position_of_y)
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = line_width;
context.arc(last_position_of_x, position_of_y, radius, 0, 2*Math.PI);
        context.stroke();
    }

    last_position_of_x = position_of_x;
    last_position_of_y = position_of_y;
}

function clearA() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
