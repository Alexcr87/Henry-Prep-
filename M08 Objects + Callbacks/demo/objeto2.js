//var array = []
//var objeto = { }                 // al crear una variable con llaves es un objeto tiene una propiedad y un valor pueden ser numero string booleanos y el valor hasta puede ser una funcion con esto podemos crear nuestros propios metodos como es el caso de isnumeric

var persona = {
    nombre: "camilo",
    apellido: "pineda",          // hay que separar con comas para que te tome varias propiedades con varios valores
    edad: 30,
    mascota: 
    [
        {
            nombre: "killu",
            raza: "sharpei"
        },
        {
            nombre: "odin",
            raza: "pitbull"
        }
    ],
}

console.log(persona.mascota[1].raza)
console.log(persona["mascota"][1]["raza"])   // otra manera de acceder a lo mismo q arriba sirve para cuando no se que hay en propiedad pero se q hay una propiedad

console.log(persona.hasOwnProperty("nombre")) // es para verificar si existe una propiedad especifica
console.log(Object.keys(persona)) // me dice todas las propiedades de un objeto

for (var key in persona) {
    console.log(persona)
    console.log(key)
    console.log(persona[key]) // recorre un objeto y extrae la informacion
}

persona.universidad = true // si la propiedad no existe la crea y agrega el valor
persona.nombre = "christian" // si existe la modifica
delete persona.edad // elimina la propiedad dentro del objeto

console.log(persona.universidad)
console.log(persona.nombre)
console.log(persona.edad)




