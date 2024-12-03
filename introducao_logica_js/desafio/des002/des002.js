function helloWorld(){
    console.log('Hello World!!');
}
helloWorld()

//Definir uma função com parâmetros, quando a função é chamada devemos passar argumentos... No meu caso tentei fazer com que todos os argumentos viessem pelo teclado.

function question(name){
    name = String(prompt('Enter a name: '));
    console.log(`The name is ${name}!`);
}

function numberUser(){
    num = Number(prompt('Enter a number: '));
    total = num*2;
    return console.log(`>>> The number ${num} multiplied for 2 is ${total}`);
}

function media(a,b,c){
    a = Number(prompt('>>> Enter a First number: '));
    b = Number(prompt('>>> Enter a Second number: '));
    c = Number(prompt('>>> Enter a Tird number: '));

    let result = (a + b + c)/3 ;
    return console.log(`The result is ${result}`);
}

function bigger(a, b){

    a = Number(prompt('>>> Enter a first name: '));
    b = Number(prompt('>>> Enter a second number: '));

    if (a < b){
        return console.log(`The bigger between ${a} and ${b} is ${b} ;`);
    } else if (a == b){
        return console.log(`The numbers are the same values ${a} == ${b} ;`);
    } else {
        return console.log(`The bigger between ${a} and ${b} is ${a} ;`);
    }
}

function numberSquared(num){ //número ao quadrado
    num = Number(prompt('>>> Enter a number: '))
    let squared = num*num
    return console.log(`The number square is ${squared}!`)
}

function findBiggerNumber(a, b){
    return a > b ? a : b;
}
let maiorNumber = findBiggerNumber(15, 16);
console.log(maiorNumber);

//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo. Para Sempre Seja Louvado. Amém.