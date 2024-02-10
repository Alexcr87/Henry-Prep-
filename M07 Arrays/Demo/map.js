var arreglo = [1,2,3,4,5,6,7]
function mostrarElementos(elemento){
    console.log(elemento)
    return elemento + 1    // ne map este return si funciona
}


var resultado = arreglo.map(mostrarElementos) // me retorna un nuevo array con los items modificados no se modifica el arreglo sino que crea uno nuevo
console.log(resultado)      
console.log(arreglo)                       