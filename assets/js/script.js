// aqui estou pecorrendo por todos os quadrados
document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click', itemClick);
});


// AQUI TRAGO TODOS OS BOTÕES DESABILITADOS, SÓ O INICIO QUE VEM HABILITADO
document.querySelector('.bl1_c2').disabled = true; 
document.querySelector('.bl1_c3').disabled = true; 
// document.querySelector('.bl2_c1').disabled = true; 
document.querySelector('.bl2_c2').disabled = true; 
document.querySelector('.bl2_c3').disabled = true; 
document.querySelector('.bl3_c1').disabled = true; 
document.querySelector('.bl3_c2').disabled = true; 
document.querySelector('.bl3_c3').disabled = true; 
 
 

// document.querySelector('.startHere').style.display = 'block';

function itemClick(event){
    // o event.target traz o componete inteiro que foi clicado
     console.log(event.target);

    // esse data-item foi colocado no buttom para que possamos pegar o campo
    let item = event.target.getAttribute('data-item');
    // console.log("Voce clicou em "+item );


    if(item == 'l2_c1'){
        // console.log("Estou no if l2_c1");
        document.querySelector('.setaBaixoDireita').style.display = 'block';
        document.querySelector('.l1_c2').classList.add('lh');  
        document.querySelector('.bl2_c2').disabled = false;
        document.querySelector('.bl3_c1').disabled = false;
    }


    if(item == 'l2_c2'){ 
        // document.querySelector('.l1_c3').classList.add('lh'); 
        // aqui estou removendo o background do botão inicar aqui
        // document.querySelector('.l1c1').style.backgroundImage = "none"; 
         document.querySelector('.setaCima').style.display = 'block';
         document.querySelector('.bl3_c1').disabled = true;
         document.querySelector('.bl1_c2').disabled = false;
         document.querySelector('.bl2_c1').disabled = true;

         document.querySelector('.bl3_c2').disabled = true;
         document.querySelector('.bl3_c3').disabled = true;
        //  document.querySelector('.l2_c1').style.backgroundColor='#ddd';
        //  document.querySelector('.l3_c1').classList.add('lh'); 
        //  document.querySelector('.l2_c2').classList.add('lh');  
    }

    if(item == 'l1_c2'){
        // document.querySelector('.l3_c1').classList.remove('lh');
        document.querySelector('.gameOver').style.display = 'block';  
        document.querySelector('.bl2_c2').disabled = true;
        // document.querySelector('.l2_c2').style.backgroundColor='#ddd';
        // document.querySelector('.l1_c2').classList.add('lh');  
        // // document.querySelector('.l3_c1').style.backgroundColor = 'red';
        // document.querySelector('.l3_c1').classList.remove('setaLadoDireita'); 
    }

    if(item == 'l3_c1'){
        document.querySelector('.setaLadoDireita').style.display = 'block';
        document.querySelector('.bl2_c2').disabled = true;
        document.querySelector('.bl2_c1').disabled = true;
        document.querySelector('.bl3_c2').disabled = false;
         
    }

    if(item == 'l3_c2'){
        document.querySelector('.setaCimaLadoDireito').style.display = 'block';
        document.querySelector('.bl3_c1').disabled = true;
        document.querySelector('.bl2_c2').disabled = false;
        document.querySelector('.bl3_c3').disabled = false; 
    }
    
    if(item == 'l3_c3'){
        document.querySelector('.setaCima2').style.display = 'block';
        document.querySelector('.bl3_c2').disabled = true;
        document.querySelector('.bl2_c2').disabled = true;
        document.querySelector('.bl3_c3').disabled = false; 
        document.querySelector('.bl2_c3').disabled = false; 
    }

    if(item == 'l2_c3'){
        document.querySelector('.setaCima1').style.display = 'block';
        document.querySelector('.bl3_c3').disabled = true;
        document.querySelector('.bl1_c3').disabled = false; 
    }

    if(item == 'l1_c3'){ 
        document.querySelector('.campeao').style.display = 'block';
        document.querySelector('.bl2_c3').disabled = true;
        document.querySelector('.bl1_c3').disabled = true;


        // Fazer aparecer um novo botão para uma nova fase do jogo
        document.querySelector('.Brestart').style.display = 'none';
        document.querySelector('.nextPhase').style.display = 'block';
        
        // mostrando o botão de nova fase
        // document.querySelector('.resetGame').style.display = 'none';
        // document.querySelector('.restartGame').style.display = 'block';

        // alert("Parabéns você ganhou o jogo");
        
        
         
    } 

}

function nextPhase(){
    // document.querySelector('.game').style.display = 'none';
    // document.querySelector('.secondFase').style.display = 'block';
    // document.querySelector('.instructions').style.display = 'none';
    window.location.href = 'nextPhases.html';
    
}
 

 function restartGame(){

    // aqui é tirando todas as imagens
    document.querySelector('.gameOver').style.display = 'none';
    document.querySelector('.campeao').style.display = 'none';
    document.querySelector('.setaBaixoDireita').style.display = 'none';
    document.querySelector('.setaBaixoDireita').style.display = 'none';
    document.querySelector('.setaCima').style.display = 'none';
    document.querySelector('.setaCima1').style.display = 'none'; 
    document.querySelector('.setaCimaLadoDireito').style.display = 'none';
    document.querySelector('.setaLadoDireita').style.display = 'none';
    document.querySelector('.setaCima2').style.display = 'none';


     
    // aqui é bloqueando todo mundo
    document.querySelector('.bl1_c2').disabled = true; 
    document.querySelector('.bl1_c3').disabled = true; 
    document.querySelector('.bl2_c1').disabled = false; 
    document.querySelector('.bl2_c2').disabled = true; 
    document.querySelector('.bl2_c3').disabled = true; 
    document.querySelector('.bl3_c1').disabled = true; 
    document.querySelector('.bl3_c2').disabled = true; 
    document.querySelector('.bl3_c3').disabled = true; 

 }


//  move the ball collor site
let button = document.querySelector('.ball'); 
  
button.addEventListener('click', (e)=>{
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('dark');
    document.body.classList.toggle('letterWhite');
    document.querySelector('hr').classList.add('white');
 
    
    // aqui estou mundando o background do fundo do jgo
    // document.game.classList('gameBackgroundBlack');
    // let buttonChagedColor = document.querySelector(e.target.querySelectorAll);
    // console.log(e.target);
      
});