function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var invertido =""
  for (let i = texto.length -1; i >=0; i--) {
    invertido = invertido + texto[i] 
    }
    return invertido
}

module.exports = invertirTexto;



texot.split("").reverse().join("") // otra manera de hacerlo