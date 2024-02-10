//var array = []
//var objeto = { }                 // al crear una variable con llaves es un objeto tiene una propiedad y un valor pueden ser numero string booleanos y el valor hasta puede ser una funcion con esto podemos crear nuestros propios metodos como es el caso de isnumeric

var objeto = {
    nombre: "camilo",
    nombre2: "pineda",          // hay que separar con comas para que te tome varias propiedades con varios valores
    nombre3: "ramon",
    2: "algo",
    true: "algo",
    funcion: function(algo) {
    console.log(algo)}
}

console.log(objeto)

console.log(objeto.nombre)
objeto.funcion("algo")

