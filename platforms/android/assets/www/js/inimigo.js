var xInimigo=window.innerWidth/4;
var yInimigo=window.innerHeight/4;
var velocidadeInimigo = 0.4;

function movimentaInimigo(){
    if(xInimigo<xPersonagem) { 
        xInimigo += velocidadeInimigo; //move para direita
        imgInimigo.src="img/belizario-right.png";   
    }
    if(xInimigo>xPersonagem) { 
        xInimigo -= velocidadeInimigo; //move para esquerda
        imgInimigo.src="img/belizario-left.png";   
    }           
    if(yInimigo>yPersonagem) {
        yInimigo -= velocidadeInimigo; //move para cima
    }
    if(yInimigo<yPersonagem) {
        yInimigo += velocidadeInimigo; //move para baixo 
    }             
}
function drawInimigo(context,x,y,color){
    var context = context;
  
    context.save();              
    
    
    //context.fillStyle=color;
    //context.beginPath();
    //context.fillRect(x,y,window.innerWidth/30,window.innerHeight/15); 
    context.drawImage(imgInimigo, x, y,window.innerWidth/20,window.innerHeight/8.5);
    context.restore();

}