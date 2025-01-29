let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const amigo = inputAmigo.value.trim();

    if (amigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Este amigo já foi adicionado.");
        return;
    }

    amigos.push(amigo);
    inputAmigo.value = "";
    mostrarAmigos();
    inputAmigo.focus();
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    if (amigos.length > 0) {
        amigos.forEach((amigo) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um nome.");
        return;
    }

    // Realizar o sorteio
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Limpa resultado anterior
    const h2 = document.createElement("h2");
    h2.textContent = `O amigo secreto escolhido foi: ${amigoSorteado}`;
    resultado.appendChild(h2);

    // Destaque no sorteio
    resultado.style.color = "green";
    resultado.style.fontWeight = "bold";

    // Limpar a lista **após** exibir o resultado
    setTimeout(() => {
        limparListaAmigos();
    }, 2000); // Aguarda 2 segundos antes de limpar
}

function limparListaAmigos() {
    amigos = []; // Esvazia o array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a lista exibida
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
    alert("A lista de amigos será limpa ao clicar em OK!");
}
