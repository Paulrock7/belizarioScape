window.addEventListener('load', function(){ // on page load
 
    document.body.addEventListener('touchstart', function(e){
        var x = e.changedTouches[0].pageX;
        var y = e.changedTouches[0].pageY;
        
        var xTela = window.innerWidth;       
        var yTela = window.innerHeight;

     //  alert(x+" "+y);

        if (y<yTela/4 && inicia==false){
            start();        
        }                
        //PLAYER 
        if(x<xTela/2 && xPersonagem>x/4.3 && inicia == true) { 
            xPersonagem -= velocidade; //move para esquerda     
        }
        if(x>xTela/2 && xPersonagem<x/4.3+x/1.92 && inicia == true) {
            xPersonagem += velocidade; //move para direita
        }
        if(y<yTela/2 && yPersonagem>y/6 && inicia == true) {
            yPersonagem -= velocidade; //move para cima
        }
        if(y>yTela/2 && yPersonagem<y/1.23 && inicia == true) {
            yPersonagem += velocidade; //move para baixo 
        }
    
    }, false);
 
}, false);
