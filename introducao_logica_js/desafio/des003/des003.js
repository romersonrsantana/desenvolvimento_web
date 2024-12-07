//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo. Para Sempre Seja Louvado. Amém.

let paragraphe = document.getElementById('mensage');

function layout(Wher,msg){
    Wher.innerHTML = msg;
}

function index(){
    let heightPerson = document.getElementById('id-altura').value;
    let weightPerson = document.getElementById('id-peso').value;

    let total = Number(weightPerson)/Number(heightPerson*heightPerson);

    if (total < 18.5){
        //paragraphe.innerHTML = '>>> Thinness: Body mass index below ideal.';
        layout(paragraphe, '>>> Thinness: Body mass index below ideal.');
    } else if (total < 24.9){
        layout(paragraphe, '>>> Normal');
    } else if (total < 29.9){
        layout(paragraphe, '>>> Sobrepeso');
    } else if (total < 34.9){
        layout(paragraphe, '>>> Obesidade grau I');
    } else if (total < 39.9){
        layout(paragraphe, '>>> Obesidade grau II');
    } else{
        layout(paragraphe, '>>> Obesidade grau III');
    }
}