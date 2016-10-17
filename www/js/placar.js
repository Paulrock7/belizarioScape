function drawScore(pontuacao,nivel,vidas){          //RECEBE OS VALORES QUE APARECERAO NA TELA
    context.save();                                 //SALVA O CONTEXTO POR SEGURANCA
    
    context.fillStyle="#C71585";                    //COR DA FONTE
    
    function p1(pontuacao){                         //DESENHA PONTUACAO
        this.pontos = pontuacao;                    //*
        context.font=x/25+"px arial";               //TAMANHO E FAMILIA DA FONTE 
        context.fillText("Pilhas",x/18,y/9.5);   //TITULO
        context.fillText(this.pontos,x/10,y/4);     //VALOR
    }
    function level(nivel){                          //DESENHA NIVEL
        this.nivel = nivel;                         //*
        context.font=x/25+"px arial";               //TAMANHO E FAMILIA DA FONTE
        context.fillText("Nível",x/1.18,y/9.5);     //TITULO
        context.fillText(this.nivel,x/1.14,y/4);    //VALOR
    }

    function drawVidas(vidas){                      //DESENHA VIDAS
        var j=4;                                    //CONTADOR PARA POSICIONAMENTO DAS IMAGENS
        if (vidas){                                 //VERIFICA SE HA VIDAS 
             for (var i=0; i<vidas;i++){
                j+=1;
                context.drawImage(imgVida, window.innerHeight/j, innerHeight/2,80,100); //IMAGEM RECEBIDA DE IMAGENS.JS
            }
            context.font=x/26+"px arial";               
            context.fillText("Belividas: "+vidas,x/60,y/2);
        }
    }
    // CHAMA AS FUNCOES 
    p1(pontuacao);
    level(nivel);
    drawVidas(vidas);

    context.restore(); //RESTAURA CONTEXTO ANTERIOR 
}