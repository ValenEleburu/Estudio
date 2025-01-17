// Dato Primitivo - Inmutable
let numero = 23
numero = numero + 10
console.log(numero);

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Dato Primitivo - Inmutable
let usuario = { nombre: 'Pepito', edad: 19}
usuario.edad = 20
console.log(usuario)

let frutas = ["sandia", "peras"]
frutas[0] = "manzana"
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = "nuevo nombre"
}

let persona = { nombre: 'valentin'}
cambiarNombre(persona)
console.log(persona)