function drawScore(pontuacao,nivel,vidas){          //RECEBE OS VALORES QUE APARECERAO NA TELA
    context.save();                                 //SALVA O CONTEXTO POR SEGURANCA
    
    context.fillStyle="#C71585";                    //COR DA FONTE
 
    function p1(pontuacao){                         //DESENHA PONTUACAO
        this.pontos = pontuacao;                    //*
        context.font=x/25+"px arial";               //TAMANHO E FAMILIA DA FONTE 
        context.fillText("Pilhas",x/1.2,y/2.2);   //TITULO
        context.fillText(this.pontos,x/1.14,y/1.9);     //VALOR
    }
    function level(nivel){                          //DESENHA NIVEL
        this.nivel = nivel;                         //*
        context.font=x/25+"px arial";               //TAMANHO E FAMILIA DA FONTE
        context.fillText("Nível",x/1.187,y/4);     //TITULO
        context.fillText(this.nivel,x/1.14,y/3);    //VALOR
    }

    function drawVidas(vidas){                      //DESENHA VIDAS
        var j=1.2;                                    //CONTADOR PARA POSICIONAMENTO DAS IMAGENS
        if (vidas){                                 //VERIFICA SE HA VIDAS 
             for (var i=0; i<vidas;i++){                
                context.drawImage(imgVida, x/j, y/1.4,x/15,y/7); //IMAGEM RECEBIDA DE IMAGENS.JS
                j-=0.01;
            }
            context.font=x/29+"px arial";               
            context.fillText("Vidas: "+vidas,x/1.2,y/1.5);
        }
    }
    // CHAMA AS FUNCOES 
    level(nivel);
    p1(pontuacao);    
    drawVidas(vidas);

    context.restore(); //RESTAURA CONTEXTO ANTERIOR 
}