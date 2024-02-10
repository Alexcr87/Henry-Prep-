var arreglo = [1,2,3,4,5,6,7]
var texto = "Lorem ipsum in dolorem, etc etc etc"

var array = texto.split("i")  // separa caracter por caracter y lo pone en un arreglo por poner "" si pongo un espacio en blanco entre las comillas me separa palabra por palabra, si pongo una letra me elimina la letra de esa palabra


var textojoin = arreglo.join() // lo convierte en un texo al arreglo si en los parentesis le pongo un espacio vacio me separa los numeros por un espacio si pongo una barra los separa con barra lo tengo que poner entre comillas sino le mando nada los separa con comas
// el join solo sirve para convertir arrays en string

console.log(textojoin)
console.log(typeof textojoin)  // para comprobar que es un string