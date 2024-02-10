function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  
 // if (num>=100 && num <= 999) {return true      
 // }else {return false}

  if(num.tostring().length === 3) {return true // esta es la manera ideal de hacerla
} else return false // revisar no esta bien
}

module.exports = tieneTresDigitos;
