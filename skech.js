/* eslint-disable no-undef, no-unused-vars */



const URL_MARIO = "3D/modelo.obj";

let mario;
let texturaMario;




const URL_MODELO_2 = "3D/modelLu.obj";

let modelo2;
let texturaModelo2;




function preload() {

  // Cargar Mario
  mario = loadModel(URL_MARIO, true);
  texturaMario = loadImage("3D/Texture.png");

  // Cargar segundo modelo
  modelo2 = loadModel(URL_MODELO_2, true);
  texturaModelo2 = loadImage("3D/textureLu.png");
}



function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

  angleMode(DEGREES);

  // Quita las líneas de los vértices
  noStroke();
}



function draw() {

  background(200);



  push();

  // Mover Mario hacia la izquierda
  translate(-200, 0, 0);

  // Rotación
  rotateY(frameCount);

  // Tamaño
  scale(1.5);

  // Orientación
  rotateX(180);

  // Textura de Mario
  texture(texturaMario);

  // Mostrar Mario
  model(mario);

  pop();


 

  push();

  
  translate(200, 0, 0);

 
  rotateY(frameCount);


  scale(1.5);

 
  rotateX(180);

  
  texture(texturaModelo2);

 
  model(modelo2);

  pop();
}




windowResized = function () {

  resizeCanvas(windowWidth, windowHeight);

};