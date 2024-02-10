function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var array2 = -Infinity
  var index = 0
  for (var i =0; i< array.length; i++){
      if (array[i] > array2) {
        array2 = array[i]
        index = i 
      } 
  }
  return (index)
}

module.exports = encontrarIndiceMayor;
