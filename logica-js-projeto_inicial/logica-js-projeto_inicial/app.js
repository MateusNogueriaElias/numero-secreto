alert('Boas Vindas ao jogo do mundo secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1)
console.log(numeroSecreto);
let chute 
let tentativas = 1;

// enquanto
while (chute!= numeroSecreto) {
chute = prompt(`Escolha um numero entre 1 a ${numeroMaximo}`);
    //se chute fornigual ao número secreto
if (numeroSecreto == chute) {
    break; 
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
} 
}

let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){
 //   alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else{
 //   alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}