function init(){									//FUNCAO INICIAL DO GAME
    canvas = document.createElement("canvas");		//CRIA ELEMENTO CANVAS
    canvas.width = window.innerWidth -20;			//LARGURA DO CANVAS DE ACORDO COM TELA
    canvas.height = window.innerHeight -20;			//ALTURA DO CANVAS
    canvas.id = "my_canvas";						//ID DO CANVAS PARA IDENTIFICACAO NO CSS

    document.body.appendChild(canvas);				//INCLUI O CANVAS AO HTML
    context = canvas.getContext("2d");				//PEGA O CONTEXT 2d DO CANVAS

	telaInicial(); 									//CHAMA TELA INICIAL PARA O JOGADOR DAR PLAY
}


function draw(){									//TUDO O QUE FOR DESENHADO NA TELA DEVE ESTAR AQUI
    context.clearRect(0,0,window.innerWidth,window.innerHeight); //LIMPA O QUADRO DO CANVAS

    drawArena("BELIZARIO'S SCAPE");					//DESENHA A ARENA E O NOME QUE ESTARÁ DENTRO
    drawScore(pontuacao,nivel,vidas);				//DESENHA O PLACAR COM PONTUACAO, QNT VIDAS E NIVEL
    drawInimigo(context,xInimigo,yInimigo,"red");	//DESENHA O INIMIGO, O "RED" E A COR DE UM QUADRADO PARA TESTE
    drawPersonagem(context,xPersonagem,yPersonagem,"yellow");  //PERSONAGEM, O "YELLOW" == COR DE UM QUADRADO PARA TESTE
    comida(context,xComida,yComida,"yellow");		//DESENHA O ALIMENTO DO PERSONAGEM, QUE SERIA UMA PILHA
   // pixelMap(50);
}

function gameOver(){								//FUNCAO CHAMADA AO ACABAREM AS VIDAS
    context.clearRect(0,0,window.innerWidth,window.innerHeight);	//LIMPA A TELA
    context.font=x/2+"px arial"; 
    drawArena("VOCÊ NÃO FEZ O KARNAUGH NÉ?");	//MENSAGEM QUE APARECE AO ACABAREM AS VIDAS
    drawScore(pontuacao,nivel);				//DESENHA O PLACAR
    vidas = 3;										//RETORNA A QUANTIDADE INICIAL DOS ELEMENTOS
    velocidadeInimigo = 1;							//*
    nivel = 1;										//*
    pontuacao = 0;									//*
    inicia = false;                        			//*    
}

function gameloop(){   								//FUNCAO QUE RODA PARA CHAMAR AS OUTRAS
    movimentaInimigo();								//MOVIMENTA O INIMIGO ATRAS DO PERSONAGEM	
    draw();											//CHAMA A FUNCAO PARA DESENHAR OS ELEMENTOS NA TELA 
    detectarColisao();								//VERIFICA COLISAO ENTRE INIMIGO - PERSONAGEM - COMIDA 
    if (inicia==true){								//VERIFICA SE O GAME ESTA EM PAUSA OU NAO RECEBEU "PLAY"
        requestAnimationFrame(gameloop);			//REQUISITA FRAMES AO NAVEGADOR
    }            
}   
function pause(){									//PARA O GAME
	inicia = false; 								//*
}													//*
function start(){									//RESTAURA DO GAME A PARTIR DA ULTIMA POSICAO
	inicia = true;									//*
	requestAnimationFrame(gameloop);				//*
}
