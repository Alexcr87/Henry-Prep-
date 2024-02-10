function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  for (var i =0; i< array.length; i++) {
    if ( elemento === array[i]) {return i
    } 

  }
  return -1 
}



module.exports = encontrarElemento;
