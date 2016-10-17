function detectarColisao(){        
    if(((xInimigo+70)>xPersonagem&&xInimigo<(xPersonagem+80))&&((yInimigo+90)>yPersonagem&&yInimigo<(yPersonagem+90))){ 
        vidas -=1;
        if (vidas == 0){
            gameOver();
        }
        
        xInimigo=window.innerWidth/4,yInimigo=window.innerHeight/4;
        xPersonagem=window.innerWidth/1.34,yPersonagem=window.innerHeight/1.3;
    } 
   
    if(((xPersonagem+70)>xComida&&xPersonagem<(xComida+80))&&((yPersonagem+90)>yComida&&yPersonagem<(yComida+90))){
        var x = window.innerWidth;
        var y = window.innerHeight-20;
        pontuacao +=1;

        if (pontuacao%10==0){
        	vidas +=1;        	
        }

        if (pontuacao%3==0){
        	velocidadeInimigo += 0.3;
        	nivel+=1;
        }
        
        
      	xComida=Math.floor((Math.random()*(x/1.69-x/4.53)+x/4.53));
        yComida=Math.floor((Math.random()*(y/1.2-y/7)+y/7));
    }
}