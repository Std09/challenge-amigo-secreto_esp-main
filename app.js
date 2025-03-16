// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para sortear.");
        return;
    }

    let mezclados = [...amigos];
    let resultado = [];
    let intentos = 0;
    
    do {
        mezclados = [...amigos].sort(() => Math.random() - 0.5);
        intentos++;
    } while (mezclados.some((nombre, index) => nombre === amigos[index]) && intentos < 100);
    
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${mezclados[(index + 1) % mezclados.length]}`;
        resultadoLista.appendChild(li);
    });
}
