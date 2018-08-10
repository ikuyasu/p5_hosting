
let angle = 0;

function setup() {
	createCanvas(400, 400);	
	angleMode(DEGREES);
}

function draw() {
	background(10);
	fill(200);
	translate(200, 200);
	fill(220);
	scale(2);
	stroke(200);
	line(0, 0, 50, 50);
	rotate(angle);
	rect(50, 50, 100, 50);
	angle += 1;
}