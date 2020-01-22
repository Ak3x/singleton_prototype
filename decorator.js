// Funciones pueden ser parametros de otras funciones
// Se puede definir funciones dentro de otras funciones 
// desde una funcion interna se puede acceder a variables definidas a un nivel superior
/*
let f1 = (numero : number) => {
    let n : number = numero
    let f2 = () => {
        return  n + 1
        
    }
    n =n+2
    return f2
}

let f = f1(30)
console.log(f())

f = f1(10)
console.log(f())
*/
var formatearJSON = function (nombre, edad) {
    return "{nombre:'" + nombre + "',edad : " + edad + " }";
};
var funcionDecoradora = function (funcionADecorar) {
    var funcionDecorada = function (nombre, edad) {
        var res = funcionADecorar(nombre, edad);
        return res.toUpperCase();
    };
    return funcionDecorada;
};
var mainDecorator = function () {
    var funcionDecorada = funcionDecoradora(formatearJSON);
    var json = funcionDecorada("Pepito", 30);
    console.log(json);
    //abreviado
    // console.log(funcionDecoradora(formatearJSON)("Pepito",30))
};
mainDecorator();
