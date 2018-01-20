var canvas = document.getElementById("sandbox")
var contex = canvas.getContext("2d");

contex.fillRect(20, 25, 20, 50);

var circle = new Path2D();
circle.arc(150, 150, 100, 0, 2 * Math.PI)
contex.stroke(circle);
