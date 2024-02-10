function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  var invertido =[]
  for (let i = array.length -1; i >=0; i--) {
    invertido.push(array[i])
    }
    return invertido
    //  return array.reverse() manera rapida
}



module.exports = invertirArray;
