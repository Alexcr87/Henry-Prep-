var arreglo1 = [1, 2, 3, 4, 5, 6, 7]

console.log("antes del push", arreglo1)
arreglo1.push(arreglo1[2])

console.log(arreglo1.push())         // agrega un valor al final del array siempre, retorna el "length" la cantidad de objetos que hay dentro le puse el console log para ver que retornoba como es una funcion no hace falta poner el console log

console.log("despues del push", arreglo1)