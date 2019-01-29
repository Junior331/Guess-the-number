// VERIFICAR O NUMERO SE TA SERRO OU NAO
function verificar(){
    var number1 = document.getElementById("number1").innerHTML;
    var number2 = document.getElementById("number2").value;
    
    if(number1 == number2) {
        alert("Parabens você sabe o que e um número");
    } else{
        alert("Volte para a escola Urgente!!");
    }
    // placar();
    reset();
}
// TROCAR O NUMERO
function reset() {
    document.getElementById("number2").value = "";
    
    var r = Math.floor(Math.random() * 100);
    document.getElementById("number1").innerHTML = r;
}

// CRONOMETRO
var clock=new Number();
var clock=11;

function start(){
    if((clock - 1) >= 0){
        clock=clock -1;
        if(clock == 0){
            clock="00",
            alert("Você Perdeu");
        }else if(clock < 10){
            clock="0"+clock;
        }
        tempo.innerText=clock;
        setTimeout('start();',1000);
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




