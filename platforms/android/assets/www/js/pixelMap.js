function pixelMap(saltoDePixel){
    var saltoDePixel = saltoDePixel;
    var x=0,y=0;  
    context.beginPath();
    context.strokeStyle="red";
    context.fillStyle="white";              
    context.font="20px Arial";
    
    context.fillText("X",20,20);
    context.fillText("Y",0,40);
    
    for (var i=0;i<innerWidth;i+=10){  
        
        x+=saltoDePixel;
        y+=saltoDePixel;
                
        context.moveTo(x,0);
        context.fillText(x+" px",x+2,20);
        context.lineTo(x,window.innerHeight);
        context.stroke();
                
        context.moveTo(0,y);
        context.fillText(y+" px",0,y-4);
        context.lineTo(window.innerWidth,y);
        context.stroke();
    }
}