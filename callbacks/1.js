const segundos = parseInt(prompt("Ingrese los segundos de espera"))
const nombre = prompt("Ingrese el nombre: ")
const tiempo = segundos/1000

function saludarDespuesDe(nombre, callback) {
    setTimeout(() => {
        mostrarSaludo(nombre)
    }, tiempo);
}

function mostrarSaludo(nombre) {
console.log(`👋 ¡Hola, ${nombre}! ¿Cómo estás?`);
}
