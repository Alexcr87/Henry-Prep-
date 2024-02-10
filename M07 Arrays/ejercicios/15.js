function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var array2 = []
  array2.push(array[0])

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i+1]){return true
    }else {return false}

  }
}

module.exports = todosIguales;
