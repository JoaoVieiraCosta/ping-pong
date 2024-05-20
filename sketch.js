let xbolinha = 300;
let ybolinha = 200;
let diametro = 15;

let velocidadeXbolinha = 4;
let velocidadeYbolinha = 4;
let raio = diametro / 2;

//minha raquete
let xRT = 5;
let yRT = 150;
let larguraRT = 10;
let alturaRT = 90;
 
//raquete oponente
let xRTop = 535;
let yRTop = 150;
let larguraRTop = 10;
let alturaRTop = 90;
let yVelOp;
let colidiu = false

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons
let raquetada;
let ponto;
let triha;



  

function setup() {
  createCanvas(550, 350);
  trilha.loop()
}

function draw() {
  background(0)
  mostraBolinha();
  velocidadeBolinha();
  colisaoBorda();
//mostrar raquetes
  mostrarRT(xRT, yRT);
  mostrarRTop(xRTop,yRTop);
//colisao
  verificarColisao(xRT, yRT);
  verficarColisao(xRTop, yRTop);
//movimento das raquete
  movOP();
  movRT();
  //placar
  incluiPlacar();
  //marcaPonto
  marcaPonto();
 
  
  
}

function mostraBolinha(){
  circle(xbolinha, ybolinha, diametro);
  
}

function velocidadeBolinha(){
  xbolinha += velocidadeXbolinha;
  ybolinha += velocidadeYbolinha;
  
}

 function colisaoBorda() {
   
   if (xbolinha + raio > width || xbolinha - raio < 0) {
    velocidadeXbolinha *= -1;
  }
  
  if (ybolinha + raio > height || ybolinha - raio < 0) {
        velocidadeYbolinha *= -1;
  }
 }
function mostrarRT(){
  rect(xRT, yRT, larguraRT, alturaRT);
}
function mostrarRTop(x,y){
  rect(xRTop, yRTop, larguraRTop, alturaRTop);
}

function movOP(){
  yVelOp = ybolinha - yRTop - larguraRT / 2 - 30;
  yRTop += yVelOp
  
}



function movRT(){
  if (keyIsDown(UP_ARROW)){
    yRT -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRT += 10
  }
}

function verificarColisao() {
  if (xbolinha - raio < xRT + larguraRT && ybolinha - raio < ybolinha + alturaRT && ybolinha + raio > yRT) {
    velocidadeXbolinha *= -1;
     raquetada.play();
  }

}

function verficarColisao(xRTop, yRTop){
  colidiu = collideRectCircle(xRTop, yRTop, larguraRT, alturaRT, xbolinha, ybolinha, raio);
 
  if (colidiu){
        velocidadeXbolinha *= -1;
   raquetada.play();

  }
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(200, 10, 40, 20);
    fill(255);
    text(meusPontos, 220, 26);
    fill(color(255, 140, 0));
    rect(280, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 300, 26);
}


function marcaPonto() {
    if (xbolinha > 550) {
        meusPontos += 1;
      ponto.play();
    }
    if (xbolinha < 5) {
        pontosDoOponente += 1;
      ponto.play();
    }
}

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

