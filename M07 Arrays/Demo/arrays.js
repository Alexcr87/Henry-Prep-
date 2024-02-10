// las [] me representan un array
var arreglo = [1, 26514, 15615,1553] // puede contener o no informacion
    //  index  0,   1  ,   2  ,  3 , ... // el index marca la posicion del array
var arreglo2 = []
var arreglo3 = [1, true, , , , , 2342, "string"] // lo que esta dentro del array vacio cuenta como "undefined"
var arreglo4 = [1, true, ,[145613, "asjkhdfa"] , , , [2342, "string"]]
console.log(arreglo3) 

console.log(arreglo1[3]) // pongo el [] para marcar la posicion del index

for (var i =0; i< arreglo1.length; i++){   //el length siempre va a ser 1 mas que las posiciones  totales del index porque empieza en 1 y el index empieza en 0
    console.log(arreglo1[i])
}                           // este for lo que hace es recorrer el array y mostrarme todos los valores que hay en cada posicion del array

console.log(arreglo4[2][1])

for (var x =0; x< arreglo1.lenght; x++){            // esto es para recorrer el arreglo dentro de un arreglo y asi secesivamente
    if (Array.isArray(arreglo4[x])) {
        for(var j=0;j < arreglo4[x].length; j++){
            console.log(arreglo4[x][j])
        }
    }
}

arreglo1[3] = "cambiamos esta posicion" //esto es para cambiar un valor si yo pongo una posicion que no existe va a crear todos espacios vacios hasta llegar a la polsicion que indique y ahi pone lo que queria

for (let z = 0; z = array.length -1;z >=0 ) { // recorre el array al revez z-- creo q va al final
    console.log(arreglo1[z])
}
var palabra = "palabra"
console.log(palabra[0])         // recorre el string como si fuese un array
console.log(palabra[5])

for (var i=0; i< palabra.length; i++) {
    crossOriginIsolated.log(palabra[i])
}