function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:


  for (var i =0; i< numeros.length-1; i++){
    numeroSiguiente= numeros[i+1]
    if (numeros[i] === numeroSiguiente ) {break
    }
  }
return numeroSiguiente


}

module.exports = encontrarElementoRepetido;