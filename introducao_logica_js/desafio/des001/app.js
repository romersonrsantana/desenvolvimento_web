let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoClicado(){
    console.log('O botão foi clicado!')
};

function mensage(){
    console.log('I Love JS!!')
};

function question(){
    let choise = prompt('What is your favorite state? ');
    alert(`I remembered you in ${choise}`)
};

//function exibirTextoNaTela(tag, texto){
//      let campo = document.querySelector(tag);
//      campo.innerHTML = texto;
//}

//exibirTextoNaTela('h1', 'mensage')

function soma(){
    let num1 = Number(prompt('Enter a first number... >>> '))
    let num2 = Number(prompt('Enter a second number... >>> '))
    sum = num1 + num2
    alert(`The sum of the values is ${sum}!`)
}

//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo, Para Sempre Seja Louvado. Amém.