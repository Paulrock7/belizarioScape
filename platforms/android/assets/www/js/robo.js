function drawPersonagem(context,x,y,color){
    var context = context;

    context.save();              
    /*context.fillStyle=color;
    context.beginPath();
    context.fillRect(x,y,window.innerWidth/30,window.innerHeight/15);  */
    context.drawImage(imgRobo, x, y,window.innerWidth/18,window.innerHeight/7);
    context.restore();
}

function comida(context,x,y,color){
    var context = context;

    context.save();              
    context.fillStyle=color;
    context.beginPath();
    //context.fillRect(x,y,window.innerWidth/30,window.innerHeight/15);  
    context.drawImage(imgPilha, x, y,window.innerWidth/18,window.innerHeight/12);
    context.restore();
}

