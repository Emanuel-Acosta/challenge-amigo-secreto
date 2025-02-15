let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim(); // trim elimina los espacios en blanco
    const nombreAmigoMinuscula = nombreAmigo.toLowerCase(); // toLowerCase convierte el texto a minúsculas
    
    if (!nombreAmigo) {
        alert("Por favor, ingresa un nombre.");
    } else if (/[\d]/.test(nombreAmigo)) {
        alert("El nombre no debe contener números.");
        input.value = "";
    } else if (listaAmigos.includes(nombreAmigoMinuscula)) {
        alert("Este nombre ya está en la lista.");
        input.value = "";
    } else if (!/^[a-zA-Z\s]+$/.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras y espacios.");
        input.value = "";
    } else {
        listaAmigos.push(nombreAmigo);

        const li = document.createElement("li"); 
        li.textContent = nombreAmigo; // Establece el contenido de texto del <li> con el nombre del amigo
        document.getElementById("listaAmigos").appendChild(li);

        input.value = "";

        if (listaAmigos.length > 0) {
            document.getElementById("botonReiniciar").disabled = false;
        }
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Por favor, agrega al menos dos amigos para sortear.");
        return;
    }

    const confirmacion = confirm("¿Estás seguro de que deseas sortear un amigo secreto?");
    if (!confirmacion) {
        return;
    }

    const ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡El ganador es: <strong>${ganador}</strong>!!</li>`;
}

function reiniciarSorteo() {
    const confirmacion = confirm("¿Estás seguro de que deseas reiniciar la lista de amigos?");
    if (confirmacion) {
        listaAmigos = [];
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
    }
}