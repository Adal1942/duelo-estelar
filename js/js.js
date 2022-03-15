function start(){

    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='inimigo3'></div>");
    $("#fundoGame").append("<div id='amigo'></div>");
    $("#fundoGame").append("<div id='placar'></div>");
    $("#fundoGame").append("<div id='energia'></div>");

    //Principais variáveis do jogo
	
    var podeAtirar=true;
	var jogo = {}
    var velocidade=5;
    var posicaoY = parseInt(Math.random() * 334);
    var fimdejogo=false;
    var pontos=0;
    var salvos=0;
    var perdidos=0;
    var energiaAtual=3;
    var somDisparo=document.getElementById("somDisparo");
    var somExplosao=document.getElementById("somExplosao");
    var musica=document.getElementById("musica");
    var somGameover=document.getElementById("somGameover");
    var somPerdido=document.getElementById("somPerdido");
    var somResgate=document.getElementById("somResgate");
    //Música em loop
    musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
    musica.play();


    var TECLA = {
        W: 87,
        S: 83,
        D: 68,
        space: 32,
        A: 65,
        L: 37,
        U: 38,
        R: 39,
        B: 40,
        }
    
        jogo.pressionou = [];
        //Verifica se o usuário pressionou alguma tecla	
        
	
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
        });
    
    
        $(document).keyup(function(e){
           jogo.pressionou[e.which] = false;
        });
	
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {
	
	movefundo();
    movejogador();
    moveinimigo1();
    moveinimigo2();
    moveinimigo3();
    moveamigo();
    colisao();
    placar();
    energia();
	
	} // Fim da função loop()
    //Função que movimenta o fundo do jogo
	
	function movefundo() {
	
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
        
    } // fim da função movefundo()
        function movejogador() {
	
            if (jogo.pressionou[TECLA.W]) {
                var topo = parseInt($("#jogador").css("top"));
                $("#jogador").css("top",topo-10);

                if (topo<=0) {
		
                    $("#jogador").css("top",topo+0.5);
                }
                
            
            }
            if (jogo.pressionou[TECLA.U]) {
                var topo = parseInt($("#jogador").css("top"));
                $("#jogador").css("top",topo-10);

                if (topo<=0) {
		
                    $("#jogador").css("top",topo+0.5);
                }
                
            
            }
            if (jogo.pressionou[TECLA.A]) {
                var tras = parseInt($("#jogador").css("left"));
                $("#jogador").css("left",tras-10);

                if (tras<=3) {
		
                    $("#jogador").css("left",tras-0.5);
                }
                
            
            }if (jogo.pressionou[TECLA.L]) {
                var tras = parseInt($("#jogador").css("left"));
                $("#jogador").css("left",tras-10);

                if (tras<=3) {
		
                    $("#jogador").css("left",tras-0.5);
                }
                
            
            }
            if (jogo.pressionou[TECLA.D]) {
                var frente = parseInt($("#jogador").css("left"));
                $("#jogador").css("left",frente+10);

                if (frente>=990) {

                    $("#jogador").css("left",frente+0.5);
                }
                
            
            }
            if (jogo.pressionou[TECLA.R]) {
                var frente = parseInt($("#jogador").css("left"));
                $("#jogador").css("left",frente+10);

                if (frente>=990) {

                    $("#jogador").css("left",frente+0.5);
                }
                
            
            }
            
            if (jogo.pressionou[TECLA.S]) {
                
                var topo = parseInt($("#jogador").css("top"));
                $("#jogador").css("top",topo+10);	

                if (topo>=497) {	
                    $("#jogador").css("top",topo-0.5);
                        
                }
            }
            if (jogo.pressionou[TECLA.B]) {
                
                var topo = parseInt($("#jogador").css("top"));
                $("#jogador").css("top",topo+10);	

                if (topo>=497) {	
                    $("#jogador").css("top",topo-0.5);
                        
                }
            }
            
            if (jogo.pressionou[TECLA.space]) {
                
                //Chama função Disparo
                disparo();	
            }
        
    } // fim da função movejogador()
        function moveinimigo1() {

        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);
            
            if (posicaoX<=0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",1029);
            $("#inimigo1").css("top",posicaoY);
                
            }
    } //Fim da função moveinimigo1()
        function moveinimigo2() {
                posicaoX = parseInt($("#inimigo2").css("left"));
            $("#inimigo2").css("left",posicaoX-velocidade);
                        
                if (posicaoX<=0) {
                    
                $("#inimigo2").css("left",1033);
                            
                }
        }  //Fim da função moveinimigo2()
        function moveinimigo3() {
            posicaoX = parseInt($("#inimigo3").css("left"));
        $("#inimigo3").css("left",posicaoX-velocidade);
                    
            if (posicaoX<=0) {
                
            $("#inimigo3").css("left",1001);
                        
            }
    }  //Fim da função moveinimigo3()   
        function moveamigo() {
	
            posicaoX = parseInt($("#amigo").css("left"));
            $("#amigo").css("left",posicaoX-3);
                        
                if (posicaoX<=0) {
               posicaoY = (math.random() * 200)     
                $("#amigo").css("left",1098);
                            
                }
        
        } // fim da função moveamigo()
        function disparo() {
	
            somDisparo.play();
            if (podeAtirar==true) {
                
            podeAtirar=false;
            
            topo = parseInt($("#jogador").css("top"))
            posicaoX= parseInt($("#jogador").css("left"))
            tiroX = posicaoX + 93;
            topoTiro=topo+44;
            $("#fundoGame").append("<div id='disparo'></div");
            $("#disparo").css("top",topoTiro);
            $("#disparo").css("left",tiroX);
            
            var tempoDisparo=window.setInterval(executaDisparo, 15);
            
            } //Fecha podeAtirar
         
                   function executaDisparo() {
                posicaoX = parseInt($("#disparo").css("left"));
                $("#disparo").css("left",posicaoX+20); 
        
                        if (posicaoX>1065) {
                                
                    window.clearInterval(tempoDisparo);
                    tempoDisparo=null;
                    $("#disparo").remove();
                    podeAtirar=true;
                            
                           }
            } // Fecha executaDisparo()
        } // Fecha disparo()
        function colisao() {
            var colisao1 = ($("#jogador").collision($("#inimigo1")));
            var colisao2 = ($("#jogador").collision($("#inimigo2")));
            var colisao3 = ($("#disparo").collision($("#inimigo1")));
            var colisao4 = ($("#disparo").collision($("#inimigo2")));
            var colisao5 = ($("#jogador").collision($("#amigo")));
            var colisao6 = ($("#jogador").collision($("#inimigo3")));
            var colisao7 = ($("#disparo").collision($("#inimigo3")));

            // jogador com o inimigo1
            if (colisao1.length>0) {
        
                energiaAtual--;
                inimigo1X = parseInt($("#inimigo1").css("left"));
                inimigo1Y = parseInt($("#inimigo1").css("top"));
                explosao1(inimigo1X,inimigo1Y);
            
                posicaoY = parseInt(Math.random() * 334);
                $("#inimigo1").css("left",1029);
                $("#inimigo1").css("top",posicaoY);
                }
            // jogador com o inimigo2
            if (colisao2.length>0) {
	
                energiaAtual--;
                inimigo2X = parseInt($("#inimigo2").css("left"));
                inimigo2Y = parseInt($("#inimigo2").css("top"));
                explosao2(inimigo2X,inimigo2Y);
                        
                $("#inimigo2").remove();
                    
                reposicionaInimigo2();
                    
                }
            // jogador com o inimigo3
            if (colisao6.length>0) {
	
                energiaAtual--;
                inimigo3X = parseInt($("#inimigo3").css("left"));
                inimigo3Y = parseInt($("#inimigo3").css("top"));
                explosao3(inimigo3X,inimigo3Y);
                        
                $("#inimigo3").remove();
                    
                reposicionaInimigo3();
                    
                }
            // Disparo com o inimigo1
		
            if (colisao3.length>0) {
            
                velocidade=velocidade+0.3;
                pontos=pontos+50;
                inimigo1X = parseInt($("#inimigo1").css("left"));
                inimigo1Y = parseInt($("#inimigo1").css("top"));
                    
                explosao1(inimigo1X,inimigo1Y);
                $("#disparo").css("left",950);
                    
                posicaoY = parseInt(Math.random() * 334);
                $("#inimigo1").css("left",1029);
                $("#inimigo1").css("top",posicaoY);
                    
            }
            // Disparo com o inimigo2
		
            if (colisao4.length>0) {

                
                pontos=pontos+100;
                inimigo2X = parseInt($("#inimigo2").css("left"));
                inimigo2Y = parseInt($("#inimigo2").css("top"));
                $("#inimigo2").remove();
        
                explosao2(inimigo2X,inimigo2Y);
                $("#disparo").css("left",1033);
            
                reposicionaInimigo2();
            }
            // Disparo com o inimigo3
		
            if (colisao7.length>0) {
		
                velocidade=velocidade+0.3;
                pontos=pontos+150;
                inimigo3X = parseInt($("#inimigo3").css("left"));
                inimigo3Y = parseInt($("#inimigo3").css("top"));
                $("#inimigo3").remove();
        
                explosao3(inimigo3X,inimigo3Y);
                $("#disparo").css("left",1033);
            
                reposicionaInimigo3();
            }
            // jogador com o amigo
		
            if (colisao5.length>0) {
            
                somResgate.play();
                salvos++;
                reposicionaAmigo();
                $("#amigo").remove();
                }
    } //Fim da função colisao()

        function explosao1(inimigo1X,inimigo1Y) {
            somExplosao.play();
            $("#fundoGame").append("<div id='explosao1'></div");
            $("#explosao1").css("background-image", "url(img/explosao.png)");
            var div=$("#explosao1");
            div.css("top", inimigo1Y);
            div.css("left", inimigo1X);
            div.animate({width:200, opacity:0}, "slow");
            
            var tempoExplosao=window.setInterval(removeExplosao, 1000);
            
                function removeExplosao() {
                    
                    div.remove();
                    window.clearInterval(tempoExplosao);
                    tempoExplosao=null;
                    
                }
                
            } // Fim da função explosao1()
            function reposicionaInimigo2() {
	
                var tempoColisao4=window.setInterval(reposiciona4, 2000);
                    
                    function reposiciona4() {
                    window.clearInterval(tempoColisao4);
                    tempoColisao4=null;
                        
                        if (fimdejogo==false) {
                        
                        $("#fundoGame").append("<div id=inimigo2></div");
                        
                        }
                        
                    }	
                }//Reposiciona inimigo 2
                function reposicionaInimigo3() {
	
                    var tempoColisao4=window.setInterval(reposiciona4, 3000);
                        
                        function reposiciona4() {
                        window.clearInterval(tempoColisao4);
                        tempoColisao4=null;
                            
                            if (fimdejogo==false) {
                            
                            $("#fundoGame").append("<div id=inimigo3></div");
                            
                            }
                            
                        }	
                    }//Reposiciona inimigo 3
        function explosao2(inimigo2X,inimigo2Y) {
            somExplosao.play();
            $("#fundoGame").append("<div id='explosao2'></div");
            $("#explosao2").css("background-image", "url(img/explosao.png)");
            var div=$("#explosao2");
            div.css("top", inimigo2Y);
            div.css("left", inimigo2X);
            div.animate({width:200, opacity:0}, "slow");
                
            var tempoExplosao=window.setInterval(removeExplosao, 1000);
                
                function removeExplosao() {
                        
                    div.remove();
                    window.clearInterval(tempoExplosao);
                    tempoExplosao=null;
                    
                }
                    
            } // Fim da função explosao2()
            function explosao3(inimigo3X,inimigo3Y) {
                somExplosao.play();
                $("#fundoGame").append("<div id='explosao3'></div");
                $("#explosao3").css("background-image", "url(img/explosao.png)");
                var div=$("#explosao3");
                div.css("top", inimigo3Y);
                div.css("left", inimigo3X);
                div.animate({width:200, opacity:0}, "slow");
                    
                var tempoExplosao=window.setInterval(removeExplosao, 1000);
                    
                    function removeExplosao() {
                            
                        div.remove();
                        window.clearInterval(tempoExplosao);
                        tempoExplosao=null;
                        
                    }
                        
                } // Fim da função explosao3()
            //Reposiciona Amigo
	
	function reposicionaAmigo() {

        	
        var tempoAmigo=window.setInterval(reposiciona6, 15000);
        
            function reposiciona6() {
            window.clearInterval(tempoAmigo);
            tempoAmigo=null;
            
            if (fimdejogo==false) {
            
            $("#fundoGame").append("<div id='amigo'></div>");
            
            }
            
        }
        
        
    } // Fim da função reposicionaAmigo()
        function placar() {
	
            $("#placar").html("<h2> Pontos: " + pontos + " Coletados: " + salvos + "</h2>");
                
        } //fim da função placar() 
        //Barra de energia

        function energia() {
	
            if (energiaAtual==3) {
                
                $("#energia").css("background-image", "url(img/energia3.png)");
            }

            if (energiaAtual==2) {
                
                $("#energia").css("background-image", "url(img/energia2.png)");
            }

            if (energiaAtual==1) {
                
                $("#energia").css("background-image", "url(img/energia1.png)");
            }

            if (energiaAtual==0) {
                
                $("#energia").css("background-image", "url(img/energia0.png)");
                
                //Game Over
                gameOver();
            }

        } // Fim da função energia() 
        
          //Função GAME OVER
        function gameOver() {
            fimdejogo=true;
            musica.pause();
            somGameover.play();
            
            window.clearInterval(jogo.timer);
            jogo.timer=null;
            
            $("#jogador").remove();
            $("#inimigo1").remove();
            $("#inimigo2").remove();
            $("#inimigo3").remove();
            $("#amigo").remove();
            
            $("#fundoGame").append("<div id='fim'></div>");
            
            $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()> <br> <h3>Jogar Novamente</h3></div>");
   } // Fim da função gameOver();
}
//Reinicia o Jogo
		
function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
	start();
	
} //Fim da função reiniciaJogo
    
