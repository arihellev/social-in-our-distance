/*
Midterm Project Pt 2 for CT Environments Studio & Lab
April 6, 2020

--
Social Distancing 
--
This is an interactive animation that explores loneliness and isolation through mouse data. The site has text values that are parsed into images of people, families, and pets (through a wingdings font I've created) that can never be "clicked" or interacted with. As your mouse tries to hover over the 'people', they literally stay away from your mouse keeping a proper "social distance".
*/

let darkFont;


let letters = [];
let alphabet = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function preload() {
  darkFont = loadFont('peopleshade.otf');
  

}

function setup() {
  createCanvas(1400, 800);

  for (let i = 0; i < 100; i++) {
    letters[i] = new Letter();
  }
}

function osc(scale) {
  if (!scale) {
    scale = 10;
  }
  return abs(sin(frameCount * 0.6* scale));
}

function draw() {
  
  
   let mouseVector = createVector(mouseX, mouseY);
    for (let letter of letters) {
      let posVector = createVector(letter.x, letter.y);
      let velVector = createVector(letter.rx, letter.ry);
      
      if (posVector.dist(mouseVector) < 100) {
        posVector.sub(mouseVector);
        posVector.normalize();
        posVector.mult(0.2);
        
        velVector.add(posVector);
        letter.rx = velVector.x;
        letter.ry = velVector.y;
        
      }
      
    }
  
  
  
  background(255);
  textFont(darkFont);
  textSize(50);
  
  
  ellipse(mouseX, mouseY, 90, 90);
  line(mouseX, mouseY, mouseX + 44, mouseY + 10 );
  
  

  for (let i = 0; i < 50; i++) {
    letters[i].move(alphabet[i]);
  }
}

function mouseDragged() {
   
}


class Letter {
  constructor() {
    this.x = 700;
    this.y = 400;
    this.rx = random(-2, 2);
    this.ry = random(-2,2);
    this.color = (255, 0, 0);
    
  }
  move(alphabet) {
    
    if (abs(this.rx)>2) {
      this.rx*=0.99;
    }
    if (abs(this.ry)>2) {
      this.ry*=0.99;
    }
    
    
    
    text(alphabet, this.x, this.y);
    
    this.x += this.rx;
    this.y += this.ry;
    if (this.x >= width || this.x <= -10) {
      this.rx = -this.rx;
      
      
    }
    if (this.y >= height || this.y <= -10) {
      this.ry = -this.ry;
    
    }
  }
}