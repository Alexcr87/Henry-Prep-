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
    direccion: "jujuy",
    saludar: function(Saludo) {
        return Saludo + this.nombre    // this sirve para usar la variable nombre un suponer solamente sirve cuando esta dentro de un obejto sino no lo llama
    }
}
console.log(persona.saludar("hola "))


this        // referenciar 




