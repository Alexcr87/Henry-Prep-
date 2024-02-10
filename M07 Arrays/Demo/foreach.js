var arreglo = [1,2,3,4,5,6,7]
function mostrarElementos(elemento){
    console.log(elemento)
    return elemento + 1    // se le puede sumar multi etc pero nunca va retornar nada por que esta el foreach
}


var resultado = arreglo.forEach(mostrarElementos) // el for each es que por cada elemento se haga lo que hace la funcion que esta dentro del parentesis
console.log(resultado)                             // es al pedo poner esto x lo q explico arriba