//argumentos para la funcion
function Suma(a,b,c,d,e,f){    // lo que esta entre () se llama argumentos si es en una funcion
    var Numero1 = a
    var Numero2 = b
    var suma = d + e
    console.log("1. ", Numero1, a)
    console.log("2. ", Numero2, b)  // esto son solamente carteles que me muestran la info
    console.log("3. ", suma, d, e)
    return f     // este es el resultado de la funcion
} 
//Suma(5,3,5,1,2,45,1,5,12,5,34) // lo que esta entre () se llama parametros cuando invoco a la funcion estos se conectan con los argumentos que esten en la misma posicion si hay mas parametros que argumentos los parametros se pierden no pasa nada porque no se utilizan

var resultado = Suma(5,3,5,1,2,45,1,5,12,5,34)
console.log(resultado)