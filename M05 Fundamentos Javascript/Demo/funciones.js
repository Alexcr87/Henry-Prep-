function Saludar(){
    console.log("1.", "Hola Mundo") // le pongo el "1.,2.,3.,etc." para saber en la consola cual es el resultado que me esta mostrando
    return 1                 // por defecto envia undefined
}
Saludar()  // esto ejecuta la funcion sin los () no se ejecuta

console.log("2.", Saludar)  // esto no ejecuta la funcion solamente me dice que es una funcions
console.log("3.", Saludar()) // esto ejecuta la funcion y muestra el valor de return que es 1 sin el console log no muestra nada mas que el hola mundo

var ResultadoSaludar = Saludar()

console.log("4.", ResultadoSaludar) // solo me tira el resultado porque en la variable solo guarda el resultado


//argumentos para la funcion
function Suma(a,b,c,d,e,f){    // lo que esta entre () se llama argumentos si es en una funcion
    var Numero1 = a
    var Numero2 = b
    var suma = d + e
    console.log("1. ", Numero1, a)
    console.log("2. ", Numero2, b)
    console.log("3. ", suma, d, e)
    return f
} 
Suma(5,3,5,1,2,45,1,5,12,5,34) // lo que esta entre () se llama parametros cuando invoco a la funcion estos se conectan con los argumentos que esten en la misma posicion si hay mas parametros que argumentos los parametros se pierden no pasa nada porque no se utilizan
//var resultado = Suma(5,3,5,1,2,45,1,5,12,5,34)
//console.log(resultado)

