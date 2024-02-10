var Nombre = "Rugna";
var Nombre2 = 'Rugna';
var Numero = 12.4127912  //si no pongo comillas la variable se transforma en numero, los numero decimales van con punto "."
var Numero2 = '2412421'  // si pongo comillas dobles o simples la variable se convierte en tipo string
var Numero3 = "2398432"

var booleano = true
var booleano2 = false

var nulo = null // variable que no tiene dato pero esta definido con esto puedo trabajar porque lo toma como 0 o como falso
var indefinido = undefined; // variable que no existe nunca se definio con esto no puedo trabajar  sirve

console.log(typeof Nombre)  //el 'typeof' me dice de que tipo es la variable
console.log(typeof Numero)
console.log(typeof booleano)
console.log(typeof nulo)

console.log(Nombre)
console.log(Numero)
console.log(Nombre2,booleano,nulo) //   este comando hace que pueda usar la terminal, en la terminal tengo que escribir el codigo "node Variables.js"

console.log(20%5) // esto es para que me muestre el resto de una divicion

console.log(20/5) // esto me muestra el resultado de la division
console.log("operacion " + "para " + "concatenar strings")
console.log("operacion " + 12312) // si hago asi me convierte el numero en un string 

console.log("2" + 2)
console.log("2" + "2")    // en ninguna de las 3 suma 
console.log(2 + "2")
console.log(2+2) // esta si suma

console.log (5 == 5 )
console.log (5 == '5') // este es falso pero js me va a decir q es verdadero porque el '5' es un string

console.log (5 === 5)
console.log (5 === '5')     // esto es igualdad extricta

console.log (5 != 5 )
console.log (5 != '5')

console.log (5 !== 5 )      // esto es desigualdad estricta
console.log (5 !== '5')

console.log (!5)
console.log (!"173912")
console.log (!!'asdbkjsa')  // esto con "!!" me da el valor de verdad cuando tira que es falso es porque no existe
console.log (!!5)
