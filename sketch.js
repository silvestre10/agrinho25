let personagem
let modo = 'campo';

function setup() {
  createCanvas(600, 400);
  personagem = {
    x: width / 2,
    y: height - 50,
    size: 30
  };
}

function draw() {
  background(220);
  
  if (modo === 'campo') {
    drawCampo();
  } else if (modo === 'cidade') {
    drawCidade();
  }
  
  fill(0);
  ellipse(personagem.x, personagem.y, personagem.size);
}

function drawCampo() {
  background(135, 206, 235);
  fill(34, 139, 34);
  rect(0, height - 100, width, 100);
  fill(34, 139, 34);
  rect(50, height - 150, 20, 50);
  fill(139, 69, 19);
  rect(55, height - 150, 10, 30);
}

function drawCidade() {
  background(180);
  fill(100);
  rect(50, height - 200, 50, 200);
  rect(150, height - 250, 60, 250);
  rect(250, height - 180, 40, 180);
  rect(350, height - 300, 70, 300);
  rect(470, height - 220, 50, 220);
}

function keyPressed() {
  if (key === 'ArrowLeft') {
    personagem.x -= 10;
  } else if (key === 'ArrowRight') {
    personagem.x += 10;
  } else if (key === 'S' || key === 'C') {
    modo = 'campo';
  } else if (key === 'D' || key === 'J') {
    modo = 'cidade';
  }
}
