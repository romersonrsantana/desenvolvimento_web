//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo. Para Sempre Seja Louvado. Amém.

function index(){
    let heightPerson = document.getElementById('id-altura').value;
    let weightPerson = document.getElementById('id-peso').value;

    let total = Number(weightPerson)/Number(heightPerson*heightPerson);

    console.log(total)
}