
let players = [];

function informacion() {
    let nombre = prompt("Ingresa tu nombre");
    let peso = prompt("Ingresa tu peso");
    let tiempo = prompt("¿Hace cuánto tiempo estás?");

    let nuevoPlayer = {
        nombre: nombre,
        peso: peso,
        tiempo: tiempo
    };

    players.push(nuevoPlayer);
    alert(`¡Bienvenido ${nuevoPlayer.nombre}! Tu peso es de ${nuevoPlayer.peso}`);
}

function buscaPlayer() {
    let respuesta = prompt("Ingrese el nombre del player que está interesado en buscar");
    let playerEncontrado = players.filter(player => player.nombre === respuesta);

    if (playerEncontrado.length > 0) {
        console.log(`Player encontrado:`);
        playerEncontrado.forEach(player => {
            alert(`${player.nombre} - ${player.peso} - ${player.tiempo}`);
        });
    } else {
        alert(`No se encontró al player ${respuesta}.`);
    }
}

function mostrarListaPlayers() {
    console.log("Lista de Players");
    players.forEach(player => {
        alert(`Nombre: ${player.nombre} - Peso: ${player.peso} - Tiempo: ${player.tiempo}`);
    });
}


informacion();
informacion();
buscaPlayer();
mostrarListaPlayers();
