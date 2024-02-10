function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var prom = 0
  var suma = 0
  for (var i =0; i< resultadosTest.length; i++){
    suma= suma + resultadosTest[i]
    }
    
  prom = suma / resultadosTest.length
  return prom
}
promedioResultadosTest (97, 100, 80, 55, 72, 94)
module.exports = promedioResultadosTest;
