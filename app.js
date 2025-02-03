let amigos = [];


function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nome = amigoInput.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        amigoInput.value = '';
        atualizarListaAmigos();
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}


function sortearAmigo() {
    if (amigos.length > 0) {
        const indice = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indice];
       
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>${amigoSorteado}</li>`;

     
        amigos.splice(indice, 1);
        atualizarListaAmigos();

        if (amigos.length === 0) {
            document.querySelector('.button-draw').disabled = true;
        }
    } else {
        alert('Adicione amigos antes de sortear!');
    }
}