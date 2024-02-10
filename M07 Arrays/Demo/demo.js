var arreglo1 = [1, 2, 3, 4, 5, 6, 7]
    function sumar(a,b){
        return a+b
    }
    function operaciones(funcion){
        var resultado = funcion(5,1)
        return resultado
    }

    var resul = operaciones(sumar)
    console.log(resul)