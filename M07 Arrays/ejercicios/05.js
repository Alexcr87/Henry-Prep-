function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  var string = undefined
  for (let i = 0; i < array.length; i++) {
            if (array[i].length >= 5) { 
      string = array[i]
      break;
      }
    
  }
  return string
}



module.exports = obtenerPrimerStringLargo;
