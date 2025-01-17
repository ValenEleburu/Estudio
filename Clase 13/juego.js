const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
    prompt("Adivina el numero del 1 al 10")
);

console.log(`Este es el numero con el que jugarás ${numeroJugador}`)

if (numeroJugador == numeroSecreto) {
    console.log(`Correcto, el numero oculto era el numero ${numeroSecreto}`)
} else {
    console.log(`Perdiste, el numero era el numero ${numeroSecreto}`)
}