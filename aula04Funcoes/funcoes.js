console.log(`---Funções são blocos de códigos {} nomeados, e que podem ser invocados usando o operador ()---\n`)
var x = 1;
console.log(`x = 1\n`)
function soma() {
    x += 1
    return x
}

soma()
console.log(`soma() = x + 1`)
console.log(`${x}`)
soma()
console.log(`soma() = x + 1`)
console.log(`${x}\n`)

console.log(`---Funções podem retornar valores---\n`)

function nome() {
    var nome = "André"
    return nome
}

console.log(`Retorno da função nome() é ${nome()}\n`)

console.log(`---Funções podem receber argumentos (ou parâmetros)---\n`)

function subtracao(x, y) {
    return x - y
}

console.log(`O retorno da função subtracao(x, y) com paramantros (10,10) é ${subtracao(10,10)}\n`)
