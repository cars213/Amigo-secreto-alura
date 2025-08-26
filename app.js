// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function addFriend(){
    if(document.getElementById("amigo").value != ''){
        let input = document.getElementById("amigo").value;
        amigo.push(input);
        list();
        wash();
    }else{
        alert('Por favor, inserte un nombre.');
    }

}

function list(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(i = 0; i < amigo.length ; i++){
        let elementadd = document.createElement('li');
        elementadd.textContent = amigo[i];
        lista.appendChild(elementadd);
    }

}

function raffleFriend(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (amigo.length > 0){
        let raffle = Math.floor(Math.random()*amigo.length);
        let select = document.createElement('li');
        select.textContent = amigo[raffle];
        resultado.appendChild(select);
        amigo.splice(raffle,1);
        list();
    }else{
        alert('No hay amigos que sortear.');
    }

}

function wash(){
    let clear = document.getElementById("amigo").value = '';
}

