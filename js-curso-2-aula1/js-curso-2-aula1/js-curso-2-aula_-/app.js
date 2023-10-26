let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function MensagemInicial() {
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 10');
}

MensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numerosecreto){
        exibirTextoNatela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentivas' : 'tentativa';
        let mensagensTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNatela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numerosecreto){
            exibirTextoNatela('p', 'o numero é menor');
        } else{
            exibirTextoNatela('p','O numero secreto é maior');
        }
        tentativas++;
        LimparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNalista == numeroLimite){
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio
   } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    MensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}