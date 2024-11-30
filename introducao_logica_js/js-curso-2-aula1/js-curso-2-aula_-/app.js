//Armazena o número secreto...
let numeroSecrety = gerarNumberAleatorio();

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Secret number game';

let paragraphe = document.querySelector('p');
paragraphe.innerHTML = 'Choose a number between 1 and 11...';

//Exibe na tela o número secreto
function verificarChute(){
    //console.log(`Secret number is ${numeroSecrety} !!`)
    let number = document.querySelector('input').value; //criar variável -> pegar o valor digitado no input
    console.log(number == numeroSecrety);
};

//Para gerar um númber temos que usar 'return'
function gerarNumberAleatorio() {
    return parseInt(Math.random()*10 + 2);
}

//Funções com retorno, com parâmetros, sem retornos e semm parâmetros.




// Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo, Para Sempre Seja Louvado. Amém.