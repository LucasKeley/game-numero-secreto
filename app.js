alert("Boas vindas ao jogo do número secreto");

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 0;

while(numeroSecreto != chute){
    chute = prompt(`Escolha um número entre 1 um e ${numeroMaximo}`);
    tentativas++;
    if(numeroSecreto == chute){
        break;
    } else{
        if(numeroSecreto > chute){
            alert(`O numero secreto é maior que ${chute}`);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }
    }
};

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto é ${numeroSecreto} você acertou com ${tentativas} ${palavraTentativa}`);