// VERIFICAR O NUMERO SE TA SERRO OU NAO
function verificar() {
    var number1 = document.getElementById("number1").innerHTML;
    var number2 = document.getElementById("number2").value;

    if (number1 == number2) {
        // alert("Parabens você sabe o que e um número");
        clock = 11;
    } else {
        alert("Volte para a escola Urgente!!");
    }
    // placar();
    start();
    reset();
}

// TROCAR O NUMERO
function reset() {
    document.getElementById("number2").value = "";

    var r = Math.floor(Math.random() * 100);
    document.getElementById("number1").innerHTML = r;
}

// CRONOMETRO
var clock = new Number();
var clock = 11;

function start() {
    // var clock = document.querySelector(".tempo").textContent;

    if ((clock - 1) >= 0) {
        clock = clock - 1;
        if (clock == 0) {
            clock = "00",
                alert("Você Perdeu");
        } else if (clock < 10) {
            clock = "0" + clock;
        }
        tempo.innerText = clock;
        setTimeout('start();', 1850);
    }
}

// PLACAR 

// function placar(){
//     setTimeout(function () {
//         var hits = document.querySelector(".hits");
//         var valorInteiro = parseInt(hits.textContent);
//         var soma = parseInt(valorInteiro) + parseInt(01);
//         hits.textContent = soma;
//     }, 1);
//     var hits = document.querySelector(".hits");
//     hits.classList.add("animationContador");
//     setTimeout(function () {
//         hits.classList.remove("animationContador")
//     }, 440)
// }

// BOTAO DE PAUSE 
function pause(){
    alert("Para voltar ao jogo aperte OK");
}
// function pausar(){
    
//     bool;

//     void Pause() {
    
//      Time.TimeScale = 0;
    
//     }
    
//     void UnPause(){

//         Time.TimeScale = 1;

//     }
//             void Update (){
//                 if(IDBOpenDBRequest.GetKeyDown(KeyCode.P)){
//                     isPause = !isPause;
        
//                     if(isPause){
//                         Pause ();
//                     }else{
//                         UnPause ();
//                     }
//                 }
//     }
// }

















// var play = getid('play');
// var pause = getid('pause');

// play.addEventListener('click', function () {
//     play.Number();
    
// }, false);

// pause.addEventListener('click', function () {
//     clock.pause();


// }, false);