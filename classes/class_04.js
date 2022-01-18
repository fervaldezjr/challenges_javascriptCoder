

function operacion(n1, n2, operador) {
    
    let resultado = '';

    if (operador == "suma") {
        resultado = n1 + n2
    } else if (operador == "resta"){
        resultado = n1 - n2
    }

    return resultado

}

let resultadoFinal = operacion(Number(prompt('Introduce un numero')), Number(prompt('Intro num 2')), prompt('Introduce suma o resta'));

console.log(resultadoFinal)

let resultadoFinal2 = operacion(Number(prompt('Introduce un numero')), Number(prompt('Intro num 2')), prompt('Introduce suma o resta'));

console.log(resultadoFinal2)