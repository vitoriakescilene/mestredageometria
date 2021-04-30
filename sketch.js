var nivel = 1;
var escolhaFase = 0;

// botões de menu
var xMinBotao = 150
var larguraBotao = 200
var xMaxBotao = xMinBotao + larguraBotao
var yMinBotao1 = 150
var alturaBotao = 70
var yMaxBotao1 = yMinBotao1 + alturaBotao

var yMinBotao2 = 250
var yMaxBotao2 = yMinBotao2 + alturaBotao

var yMinBotao3 = 350
var yMaxBotao3 = yMinBotao3 + alturaBotao

//botão voltar menu
var xMinVoltar = 400
var larguraVoltar = 50
var xMaxVoltar = xMinVoltar + larguraVoltar
var yMinVoltar = 440
var alturaVoltar = 25
var yMaxVoltar = yMinVoltar + alturaVoltar

//botão fases

var xMinBfases1 = 65
var larguraBfases = 100
var xMaxBfases1 = xMinBfases1 + larguraBfases
var yMinBfases = 300
var alturaBfases = 40
var yMaxBfases = yMinBfases + alturaBfases

var xMinBfases2 = xMaxBfases1 + 30
var xMaxBfases2 = xMinBfases2 + larguraBfases

var xMinBfases3 = xMaxBfases2 + 30
var xMaxBfases3 = xMinBfases3 + larguraBfases

var imagemFundo;
var imagemEducador;
var imagemProgramador;
var imagemCirculo;
var imagemTriangulo;
var imagemFormula1;
var imagemHexagono;


var tela = 0;
//tela 1: instruções
//tela 3: creditos

function Parabens(){
   background(0);
  image(imagemFundo,1, 1, 500, 500);
  textSize(25);
  textFont('serif');
  fill(169, 245, 212);
  text("VOCÊ É O NOVO MESTE DA GEOMETRIA. ", 15, 270);
  textSize(45);
  text("PARABÉNS!", 130, 150);
  Botãovoltar(0);
}

function acaboujogo(){
   background(0);
  image(imagemFundo,1, 1, 500, 500);
  textSize(45);
  textFont('serif');
  fill(169, 245, 212);
  text("GAME OVER! ", 130, 230);
  Botãovoltar(0);
}

function mouseClicked() {
  if(tela == 1 && nivel == 1){
    if(escolhaFase == 1 || escolhaFase == 3){
      tela = 20;
    }
    if(escolhaFase == 2){
      nivel = 2;
      }
  }
  else{
    if(tela == 1 && nivel == 2){
      if(escolhaFase == 2 || escolhaFase == 3){
        tela = 20;
      }
      if(escolhaFase == 1){
        nivel = 3;
      }
    }
  else{
    if(tela == 1 && nivel == 3){
      if(escolhaFase == 1 || escolhaFase == 2){
      tela = 20;
    }
    if(escolhaFase == 3){
      tela = 10;
    }
  }
  }
}
}

function Botãovoltar(opcao){
 if(mouseX > xMinVoltar && mouseX < xMaxVoltar && mouseY > yMinVoltar && mouseY < yMaxVoltar){
  fill(255, 218, 197);
  if(mouseIsPressed){
    tela = opcao;
    }
  }
  else{
  noFill();
  }
  rect(xMinVoltar, yMinVoltar, larguraVoltar, alturaVoltar, 15);
  textSize(15)
  fill(169, 245, 212);
  text("Menu", xMinVoltar + 8 , yMinVoltar + 17);
}

function opcaoBotão(texto, xMin, xMax, yMin, yMax, largura, altura, opcao){ 
    if(mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
  fill(255, 218, 197);
  escolhaFase = opcao;
   
    /*if(mouseIsPressed){
    escolhaFase = opcao;
    }*/
  }
  else{
  noFill();
  }
  rect(xMin, yMin, largura, altura, 15);
  textSize(20)
  fill(169, 245, 212);
  text(texto, xMin+ 8, yMin+25);
}

function fase1(){
   background(159, 125, 197);
  textSize(45);
  fill(255, 218, 197);
  text("QUEM SOU EU?", 80, 70);
  image(imagemCirculo, 150,90,170, 170);
  
  escolhaFase = 0;
  
  opcaoBotão(" Quadrado", xMinBfases1, xMaxBfases1, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,1);
  
 opcaoBotão("  Circulo", xMinBfases2, xMaxBfases2, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,2);
  
  opcaoBotão(" Triangulo", xMinBfases3, xMaxBfases3, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,3);
  
}

function fase2(){
   background(159, 125, 197);
  textSize(35);
  fill(255, 218, 197);
  text("DE QUEM É ESSA FORMULA?", 20, 70,480);
  image(imagemFormula1, 160,140,170, 100);
  
  escolhaFase = 0;
  
  opcaoBotão(" Quadrado", xMinBfases1, xMaxBfases1, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,1);
  
 opcaoBotão("  Circulo", xMinBfases2, xMaxBfases2, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,2);
  
  opcaoBotão(" Triangulo", xMinBfases3, xMaxBfases3, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,3);
}

function fase3(){
    background(159, 125, 197);
  textSize(40);
  fill(255, 218, 197);
  text("QUE TRIÂNGULO SOU?", 40, 70);
  image(imagemTriangulo, 170,90,140, 180);
  
  escolhaFase = 0;
  
  opcaoBotão("Equilátero", xMinBfases1, xMaxBfases1, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,1);
  
 opcaoBotão(" Escaleno ", xMinBfases2, xMaxBfases2, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,2);
  
  opcaoBotão(" Isósceles", xMinBfases3, xMaxBfases3, yMinBfases, yMaxBfases, larguraBfases, alturaBfases,3);
  
}

function menuBotão(texto, yMin, yMax, opcao){ 
    if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax){
  fill(255, 218, 197);
  if(mouseIsPressed){
    tela = opcao;
    }
  }
  else{
  noFill();
  }
  rect(xMinBotao, yMin, larguraBotao, alturaBotao, 15);
  textSize(35)
  fill(169, 245, 212);
  text(texto, xMinBotao + 25, yMin + 45);
}

function telaMenu(){
  background(0);
  image(imagemFundo,1, 1, 500, 500);
  textSize(35);
  textFont('serif');
  fill(255, 218, 197);
  text("MESTRE DA GEOMETRIA", 45, 50,460);
  
     menuBotão("    Jogar", yMinBotao1, yMaxBotao1, 1);
    
    menuBotão("Instruções", yMinBotao2, yMaxBotao2, 2);
    
  menuBotão("  Créditos", yMinBotao3, yMaxBotao3, 3);
}

function telaInstrucoes(){
   background(159, 125, 197);
  textSize(40);
  fill(255, 218, 197);
  text("Instruções", 150, 70);
  textSize(21);
  fill(169, 245, 212);
  text("1. Esse jogo possui três níveis: Fácil, Médio e Difício", 20, 120, 460);
  text("2. Cada nével possui três fases", 20, 160,460); 
  text("3. Responda corretamente e suba de nível", 20, 200,460);
  text("4. Use o mouse para selecionar a alternativa correta", 20, 240,460);
  text("5. caso erre, o jogo será resetado. (voltará ao menu.)", 20, 280,460);
  text("6. Agora é só jogar e se divertir enquanto aprende. Torne-se um mestre da geometria.", 20, 320,460);
  textSize(25)
  fill(255, 218, 197)
  text("Boa Sorte!", 50, 400,460);
  Botãovoltar(0);
}

function telaCreditos(){
  background(159, 125, 197);
  textSize(50);
  fill(255, 218, 185);
  text("Créditos", 150,70);
  textSize(20);
  text("JANIANA CRISTINA", 200,120);
  textSize(19);
  text("Função: Educadora", 225,140);
  textSize(17);
  fill(169, 245, 212);
  text("Licenciada em Pedagogia pela UFRN, graduada em Matemática pela UERN e Fez especialização em Português e Matemática no IFRN. Hoje atua como Professora de matemática em escola pública.", 180,160, 310);
  textSize(20);
  fill(255, 218, 185);
  text("VITÓRIA KESCILENE", 200,320);
  textSize(19);
  text("Função: Programadora", 225,340);
  textSize(17);
  fill(169, 245, 212);
  text("Técnica em eletrotécnica formada pelo IFRN. Atualmente, estudante do Bacharelado em Ciências e Tecnologia da UFRN.",180,355, 315);
  image(imagemEducador, 30, 120, 120, 120);
  image(imagemProgramador, 30,310,115, 115);
  Botãovoltar(0);
}

function preload(){
  imagemFundo = loadImage("fundo 2.jpg")
  imagemEducador = loadImage("educadora.jpg");
  imagemProgramador = loadImage("foto2.jpeg");
  imagemCirculo = loadImage("circulo.png");
  imagemTriangulo = loadImage("ISO.png");
  imagemFormula1 = loadImage("FORMULA1.PNG");
  imagemHexagono = loadImage("hexagono.png")
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if(tela == 0) {
   telaMenu();
  }
  if(tela == 1){
   if(nivel == 1){
     fase1();
   }
   if(nivel == 2){
      fase2();
   } 
  if(nivel == 3){
     fase3();
 }
   if(nivel == 3){
     fase3();
 }
  }
  if(tela == 2){
   telaInstrucoes();
  }
  if(tela == 3) {
    telaCreditos(); 
 }
  if(tela == 4) {
    if(nivel==1);
      fase2();
  }
  if(tela == 20) {
    acaboujogo();
  }
   if(tela == 10) {
    Parabens();
  }
}