function drawArena(mensagem){
    context.save();
    
    x = window.innerWidth;
    y = window.innerHeight-20;
    
    context.fillStyle="white"; 
    var raioArena = x/4;
    
    context.beginPath();

    /* Cria a arena circular
    context.arc(
        x/2,             //X Centro
        y/2,             //Y Centro
        raioArena,       //Raio 
        90*Math.PI/180,  //Início 90 graus
        270*Math.PI/180, //Término 270 graus
        false            //Sentido anti horário
    );
    context.arc(
        x/2,             //X Centro
        y/2,             //Y Centro
        raioArena,       //Raio 
        90*Math.PI/180,  //Início 90 graus
        270*Math.PI/180, //Término 270 graus
        true              //Sentido horário
    );

    context.fill();
    */  

    context.fillRect(x/4.53,y/7,x/1.69,y/1.2);
    context.fillStyle="#C71585";
    var carac = mensagem.length;

    context.save();
     
    context.fillStyle='white';
    context.fillRect(x/1.2,y/3,x/8,y/2);

    //context.fillStyle="#C71585";
    context.fillStyle='black';
    //context.font=x/32+"px arial";
    /*
    context.fillText("Manual ",x/1.19,y/2.5);
    context.font=x/70+"px arial";        
    context.fillText("Movimentação: ",x/1.19,y/2.1);
    context.fillText("Setas Direcionais ",x/1.19,y/1.9);
    context.fillText("W-A-S-D ",x/1.19,y/1.78);
    context.fillText("P - PAUSE ",x/1.19,y/1.6);
    context.fillText("Espaço/C - Inicia ",x/1.19,y/1.5);  
    */
    context.font=x/85+"px arial";  
    context.fillText("A cada 10 pontos ",x/1.19,y/1.35);
    context.fillText("+1 Belivida ",x/1.19,y/1.3);
    
    context.restore();
    if (carac<19) {
        context.font=x/18+"px arial";
    } else if(carac>19&&carac<=30){
        context.font=x/18+"px arial";
        context.fillText("PERDEU!!!",x/4,y/3);
        context.font=x/33+"px arial";
        context.fillStyle="black";
        context.fillText("Clique Aqui para reiniciar o Game",window.innerWidth/5,window.innerHeight/10);
    }
    
    context.fillText(mensagem,x/4,y/1.8);        
    context.restore();
}