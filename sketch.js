//CART GAME
function setup() {
  createCanvas(400, 400);
}
let x = 20;
let k = -250;
let y = 40;
let a = -400;
let b = 150;
let c = -500;
let d = 70;
let e = -1500;
let j = 180;
let nrbanuti =0;
let vieti = 5;
let v = 0;
let vb = 0;
let score = 0;
let score1 = 0;
let r = 0;
let viteza = 30;
let go = 0;
let st = 430;
let ind = 0;
function Elementecart() {
  //sinele
  fill(150, 150, 150);
  rect(0, 375, 420, 5);
  for (let i = 0; i < 450; i = i + 40) {
    stroke(0);
    fill(107, 59, 0);
    rect(i - 20, 380, 30, 10);
  }
  fill(8, 194, 98);
  rect(0, 390, 400, 20);
  stroke(0);
  fill(140, 65, 3);
  rect(x, 350, 60, 20);
  rect(x, 335, 10, 15);
  rect(x + 50, 335, 10, 15);
  fill(0);
  ellipse(x + 10, 370, 15, 15);
  fill(255);
  ellipse(x + 10, 370, 4, 4);
  fill(0);
  ellipse(x + 50, 370, 15, 15);
  fill(255);
  ellipse(x + 50, 370, 4, 4);
}

function Banuti() {
  fill(255, 255, 13);
  ellipse(y, k, 13, 13);
  fill(219, 219, 219);
  text("*", y - 5, k + 14);
  k = k + 2 + vb;
  
  fill(255, 255, 13);
  ellipse(b, a, 13, 13);
  fill(219, 219, 219);
  text("*", b - 5, a + 14);
  a = a + 2 + vb;

  fill(255, 255, 13);
  ellipse(d, c, 17, 17);
  fill(219, 219, 219);
  text("*", d - 5, c + 14.5);
  c = c + 2 + vb;

  //diamant
  for (let i = 1; i <= 5; i++) {
    stroke(247, 5, 5);
    rect(30 - i + j, 30 + i + e, 10 + 2 * i, 2);
  }
  for (let i = 1; i <= 10; i++) {
    rect(30 - 6 + i + j, 30 + i + 5 + e, 10 + 2 * (6 - i), 2);
  }
  e = e + 2;
  
  //prindere banuti
  if (y >= x + 5 && y <= x + 50 && k <= 350 && k >= 330) {
    k = k - 400;
    y = random(20, 380);
    nrbanuti = nrbanuti + 5;
  } else if (k >= 398) {
    vieti--;
    k = k - 400;
  }
  if (b >= x + 5 && b <= x + 50 && a <= 350 && a >= 330) {
    a = a - 400;
    b = random(20, 380);
    nrbanuti = nrbanuti + 5;
  } else if (a >= 398) {
    vieti--;
    a = a - 400;
  }
  if (d >= x + 5 && d <= x + 50 && c <= 350 && c >= 340) {
    c = c - 400;
    d = random(20, 380);
    nrbanuti = nrbanuti + 10;
  } else if (c >= 398) {
    c = c - 400;
    vieti--;
  }
  //prindere diamant
  if (
    30 - 5 + j >= x + 5 &&
    30 - 5 + j <= x + 50 &&
    30 + 15 + e <= 350 &&
    30 + 15 + e >= 330
  ) {
    e = -1500;
    j = random(20, 380);
    nrbanuti = nrbanuti + 100;
  }
}
function Miscare() {
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 3.5 - v;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x = x + 3.5 + v;
  }
  if (
    ((mouseIsPressed == true &&
      mouseX >= 20 &&
      mouseX <= 50 &&
      mouseY <= 45 &&
      mouseY >= 30) ||
    (keyIsPressed == true && key == "1")) && nrbanuti >= 500)
  {
    vieti++;
    nrbanuti = nrbanuti - 500;
  }
  if (
    ((mouseIsPressed == true &&
      mouseX >= 20 &&
      mouseX <= 65 &&
      mouseY <= 60 &&
      mouseY >= 48) ||
    (keyIsPressed == true && key == "2")) && nrbanuti >= 500)
   {
    viteza = viteza + 10;
    v++;
    nrbanuti = nrbanuti - 500;
  }
  if (x >= 400) {
    x = -50;
  }
  if (x + 50 < 0) {
    x = 400;
  }
}
function Text() {
  textSize(12);
  fill(0);
  text("BANI:", 330, 20);
  text(nrbanuti, 365, 20);
  noStroke();
  text("$", 390, 20);
  text("VIEȚI:", 330, 40);
  text(vieti, 370, 40);
  text("❤️", 385, 40);
  text("SCOR:", 20, 20);
  text(score, 62, 20);
  text("VITEZA CART:", 140, 20);
  text(viteza, 220, 20);
  text("km/h", 235, 20);
  text("1 ❤️ -> 500$", 20, 35);
  text("+10km/h-> 500$", 20, 50);
}
function start() {
  noStroke();
  fill(179, 174, 173);
  ellipse(0, st, 300, 80);
  ellipse(200, st - 25, 200, 100);
  ellipse(350, st - 25, 250, 100);
  st = st - 3;
  noStroke();
  rect(0, 0, 450, st - 20);
}

function pagina1() {
  background(179, 174, 173);

  for (let i = 35; i < 175; i = i + 10) {
    stroke(0);
    fill(242, 228, 75);
    ellipse(100 + i, 85, 20, 20);
  }
  for (let i = 25; i < 185; i = i + 10) {
    stroke(0);
    fill(242, 228, 75);
    ellipse(100 + i, 90, 20, 20);
  }
  for (let i = 0; i < 200; i = i + 10) {
    stroke(0);
    fill(242, 228, 75);
    ellipse(100 + i, 95, 20, 20);
  }
  for (let i = -20; i < 220; i = i + 10) {
    stroke(0);
    fill(242, 228, 75);
    ellipse(100 + i, 100, 20, 20);
  }

  stroke(0);
  fill(120, 90, 10);
  rect(60, 100, 270, 85);
  rect(60, 70, 20, 30);
  rect(310, 70, 20, 30);
  textSize(38);
  stroke(201, 204, 141);
  fill(0);
  text("CART GAME", 80, 150);
  stroke(0);
  ellipse(85, 195, 35, 35);
  fill(255);
  ellipse(85, 195, 10);
  fill(0);
  ellipse(305, 195, 35, 35);
  fill(255);
  ellipse(305, 195, 10);
  fill(212, 211, 210);
  rect(-10, 205, 420, 15);
  for (i = 1; i <= 400; i = i + 130) {
    fill(133, 66, 0);
    rect(i, 220, 100, 30);
  }
  fill(242, 228, 75);
  rect(137.5, 285, 120, 60);
  stroke(218, 242, 245);
  fill(0);
  textSize(25);
  text("Start", 170, 320);
}
function draw() {
  pagina1();
  if (
    mouseIsPressed == true &&
    mouseX >= 137.5 &&
    mouseX <= 257.5 &&
    mouseY <= 345 &&
    mouseY >= 285 &&
    vieti >= 1
  ) {
    ind = 1;
    vieti = 5;
  }
  if (vieti >= 1 && ind == 1) {
    background(184, 254, 255);
    Elementecart();
    fill(179, 174, 173);
    ellipse(0, 0, 400, 100);
    score1 = score1 + 0.1;
    if (score1 >= 3) {
      score1 = 0;
      score++;
    }
    if (score == 300) vb = vb + 0.06;
      if (score == 1000) vb = vb + 0.06;
    Banuti();
    Miscare();
    //nori
    noStroke();
    fill(179, 174, 173);
    ellipse(0, 0, 400, 150);
    ellipse(200, 30, 200, 100);
    ellipse(350, 30, 250, 100);
    Text();
    start();
  }
  if (vieti <= 0) {
    background(184, 254, 255);
    Elementecart();
    Banuti();
    vb = vb + 4;
    noStroke();
    fill(179, 174, 173);
    ellipse(0, go, 400, 150);
    ellipse(200, go + 30, 200, 100);
    ellipse(350, go + 30, 250, 100);
    go = go + 3;
    noStroke();
    rect(0, 0, 450, 20 + go);
    if (go >= 430) 
    {
      stroke(0);
      fill(255, 0, 0);
      textSize(35);
      text("GAME OVER", 95, 142);
    }
    if (go >= 500) {
      fill(0);
      text("SCOR:", 125, 195);
      text(score, 235, 195);
      ind = 0;
    }
    if (go >= 600) {
      textSize(30);
      stroke(0);
      fill(255, 7, 3);
      rect(100, 230, 200, 80);
      fill(0);
      text("PLAY AGAIN", 110, 280);
    }
    if (
      mouseIsPressed == true &&
      mouseX >= 100 &&
      mouseX <= 300 &&
      mouseY >= 230 &&
      mouseY <= 310
    ) {
      vieti = 5;
      nrbanuti = 0;
      vb = 0;
      viteza = 30;
      score = 0;
      x = 20;
      k = -50;
      y = 40;
      a = -200;
      b = 150;
      c = -300;
      d = 70;
      e = -1500;
      j = 180;
    }
  }
}
