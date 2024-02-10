function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var array2 = []
  for (var i =0; i< array.length; i++){
      if (array[i]> 10) {
        array2.push(array[i]) 
      } 
  }
  return (array2.length)

}

module.exports = contarElementosMayoresA10;
