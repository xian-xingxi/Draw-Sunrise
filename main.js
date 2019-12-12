// Draw Sunrise
"use strict";

// Global Variables
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Setup Cloud
let img = document.getElementById("cloud");

//Draw Blue Background
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, cnv.width, cnv.height);

// Draw Green Grass
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);

// Draw Sun
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 15, Math.PI, 0);
ctx.fill();


/* Draw Image Cloud*/

// Bottom Cloud
ctx.drawImage(cloud, 135, 125);
// Top Cloud
ctx.drawImage(cloud, 175, 105);