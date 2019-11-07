var headMovement;
var bodyMovement;
var legMovement;


var xHead = 400;
var yHead = 125;

var xBody = 362.5;
var yBody = 175;

var xLeftLeg = 362.5;
var yLeftLeg = 325;

var xRightLeg = 412.5;
var yRightLeg = 325;

var SizeOfText




function setup() {
    createCanvas(800,600);
    bodyMovement = Math.floor(Math.random() * 10) + 1;
    headMovement = Math.floor(Math.random() * 10) + 1;
    legMovement = Math.floor(Math.random() * 10) + 1;
  }
  
  function draw() {
    background(190, 138, 255);

//name text
    fill(0);
    textSize(32);
    text('Self Portrait', 15, 50);

    fill(0);
    textSize(32);
    text('Katrina Sabol', 575,50)

//arms
    fill(46, 46, 46);
    //left
    triangle(200, 200, 362.5, 185, 362.5, 250);
    //right
    triangle(437.5, 185, 600, 200, 437.5, 250);

//legs
    fill(46, 46, 46)
    //left
    rect(xLeftLeg,yLeftLeg,25,200)
    //right
    rect(xRightLeg,yRightLeg,25,200)

//shoes
    fill(55, 19, 56);
    //left
    circle(370,500,75);
    //right
    circle(430,500,75);

//body
    fill(55, 19, 56);
    rect(xBody,yBody,75,150);

//head
    fill(150, 239, 255);
    circle(xHead,yHead,150);

//right eyebrow
    line(370,85,385,84);

//left eyebrow
    line(415,84,430,85)

//mouth
    rect(370,150,100,15);

//nose
    ellipse(400,125,5,15)

//eyes
    strokeWeight(10);
    point(375,100);
    point(425,100);


//head movement - x
    if(xHead >=800 || xHead<= 0)
    {
        headMovement*= -1;
    }
    xHead+=headMovement

//body movement - y
    if(yBody >= 600 || yBody<=0)
    {
        bodyMovement *= -1;
    }
    yBody+=bodyMovement

//left leg moving - x
    if(xLeftLeg >=800 || xLeftLeg<= 0)
    {
        legMovement*= -1;
    }
    xLeftLeg+=legMovement

//right leg moving - y
    if(yRightLeg >=600 || yRightLeg <= 0)
    {
        legMovement *= -1;
    }
    yRightLeg+=legMovement

  }