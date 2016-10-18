function detectarColisao(){        
    if(((xInimigo+window.innerWidth/20)>xPersonagem&&xInimigo<(xPersonagem+window.innerWidth/18))&&((yInimigo+window.innerHeight/8.5)>yPersonagem&&yInimigo<(yPersonagem+window.innerHeight/8.5))){ 
        vidas -=1;        
        if (vidas == 0){
            gameOver();
        }
        
        xInimigo=window.innerWidth/4,yInimigo=window.innerHeight/4;
        xPersonagem=window.innerWidth/1.34,yPersonagem=window.innerHeight/1.3;
    } 
   
    if(((xPersonagem+window.innerWidth/20)>xComida&&xPersonagem<(xComida+window.innerWidth/18))&&((yPersonagem+window.innerHeight/8.5)>yComida&&yPersonagem<(yComida+window.innerHeight/8.5))){
        var x = window.innerWidth;
        var y = window.innerHeight-20;
        pontuacao +=1;

        if (pontuacao%10==0){
        	vidas +=1;        	
        }

        if (pontuacao%3==0){
        	velocidadeInimigo += 0.1;
        	nivel+=1;
        }
        
        
      	xComida=Math.floor((Math.random()*(x/1.69-x/4.53)+x/4.53));
        yComida=Math.floor((Math.random()*(y/1.2-y/7)+y/7));
    }
}