function drawPersonagem(context,x,y,color){
    var context = context;

    context.save();              
    /*context.fillStyle=color;
    context.beginPath();
    context.fillRect(x,y,window.innerWidth/30,window.innerHeight/15);  */
    context.drawImage(imgRobo, x, y,80,120);
    context.restore();
}

function comida(context,x,y,color){
    var context = context;

    context.save();              
    context.fillStyle=color;
    context.beginPath();
    //context.fillRect(x,y,window.innerWidth/30,window.innerHeight/15);  
    context.drawImage(imgPilha, x, y,80,60);
    context.restore();
}

