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


let formatearJSON = (nombre : string , edad : number ) => {
    return `{nombre:'${nombre}',edad : ${edad} }`
}

let funcionDecoradora = (funcionADecorar : Function) => {
    let funcionDecorada = (nombre : string , edad : number) => {
        let res = funcionADecorar(nombre,edad)
        return res.toUpperCase()
    }
    return funcionDecorada
}

let mainDecorator = () => {
    let funcionDecorada = funcionDecoradora(formatearJSON)
    let json = funcionDecorada("Pepito",30)
    console.log(json)
    //abreviado
   // console.log(funcionDecoradora(formatearJSON)("Pepito",30))
}
mainDecorator()