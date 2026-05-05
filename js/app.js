let amigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(nome.value == ''){
        alert('Digite um nome válido!');
        return;
    }

    if(amigos.includes(nome.value)){
        alert('Esse nome já foi adicionado!');
        return;
    }

    amigos.push(nome.value);

    if (lista.textContent == '') {
        lista.textContent = nome.value; 
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }

    nome.value = '';
}

function sortear(){
    if(amigos.length < 4) {
        alert('É necessario ter pelo menos 4 nomes para realizar o sorteio');
        return;
    }


    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){

        if(i == amigos.length - 1){
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista){

    for(let indice = lista.length; indice; indice--){

        let indiceAleatorio = Math.floor(Math.random() * indice);

        let nomeEscolhido = lista[indice - 1];

        lista[indice - 1] = lista[indiceAleatorio];

        lista[indiceAleatorio] = nomeEscolhido;
    }
}

function reiniciar(){

    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}