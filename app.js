// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Definir un array vacío para almacenar los nombres de los amigos
let listaAmigos = [];

// Función que agrega un amigo a la lista cuando se hace clic en el botón "Añadir"
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim();
    
    // Verificar si el campo no está vacío
    if (!nombreAmigo) {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Verificar si el nombre contiene números
    if (/[\d]/.test(nombreAmigo)) {
        alert("El nombre no debe contener números.");
        input.value = "";
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (listaAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        input.value = "";
        return;
    }

    // Verificar si el nombre solo tiene letras (sin números ni caracteres especiales)
    if (!/^[a-zA-Z\s]+$/.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras y espacios.");
        input.value = "";
        return;
    }

    // Si pasa todas las validaciones, agregar el amigo a la lista
    listaAmigos.push(nombreAmigo);

    // Crear un nuevo elemento <li> y agregarlo a la lista en el HTML
    const li = document.createElement("li");
    li.textContent = nombreAmigo;
    document.getElementById("listaAmigos").appendChild(li);

    // Limpiar el campo de entrada para añadir más nombres
    input.value = "";
}

// Función que sortea un amigo secreto aleatorio y lo muestra en pantalla
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Por favor, agrega al menos dos amigos para sortear.");
        return;
    }

    // Seleccionar un ganador aleatorio
    const ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Mostrar el nombre del ganador en la sección de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡El ganador es: <strong>${ganador}</strong>!</li>`;
}

// Función que reinicia el sorteo y limpia la lista de amigos
function reiniciarSorteo() {
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
