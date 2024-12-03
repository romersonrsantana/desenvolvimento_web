//Armazena o número secreto...
let numeroSecrety = gerarNumberAleatorio();
let attempt = 1;

console.log(`Secret number is ${numeroSecrety} !!`);

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Secret number game';

let paragraphe = document.querySelector('p');
paragraphe.innerHTML = 'Choose a number between 1 and 11...';

//Exibe na tela o número secreto
function verificarChute(){
    let number = document.querySelector('input').value;
    if (number == numeroSecrety){
        titulo.innerHTML = 'You got it right!!';

        let word = attempt > 1 ? 'attempts' : 'attempt'; //operador ternário.

        paragraphe.innerHTML = `Congratulations the secret number is ${numeroSecrety}. You discovered the secret number with ${attempt} ${word}`;

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        titulo.innerHTML = 'You made a mistake!';
        if (number < numeroSecrety){
            paragraphe.innerHTML = `The number secrety is bigger!`;
        }else{
            paragraphe.innerHTML = 'The number secrety is smaller';
        }

        attempt ++;
        cleanLabel();
    }
}

//Para gerar um númber temos que usar 'return'
function gerarNumberAleatorio() {
    return parseInt(Math.random()*10 + 2);
}

//Função para limpar o campo, pego o valor do campo atravès do querySelector
function cleanLabel(){
    number = document.querySelector('input')
    number.value = '';
}

//Para reiniar the game:
function restartGame(){
    numeroSecrety = gerarNumberAleatorio();
    cleanLabel();
    attempt = 1
    titulo.innerHTML = 'Secret number Game';
    paragraphe.innerHTML = 'Choose a number between 1 and 11...'
    document.getElementById('reiniciar').setAttribute('disabled',true);
};

//Funções com retorno, com parâmetros, sem retornos e semm parâmetros.

// Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo, Para Sempre Seja Louvado. Amém.