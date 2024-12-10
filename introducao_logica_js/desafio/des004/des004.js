//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo. Para Sempre Seja Louvado. Amém.

function calculeteFactorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    }

    let fatorial = 1;

    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }

    return fatorial;
}

//let num = document.getElementById('id-factorial').value;
let num = 5;

let total = calculeteFactorial(num);

//let paragraphe = document.getElementById('mensage-id-p');

console.log(total);

//paragraphe.innerHTML = `The factorial number of ${numero} is ${total}`;
