console.log(`// Declarar uma variável chamada myvar, sem valor.`)

var myvar = ""
console.log(`myvar = ""\n`)
console.log(`// Após declarada, atribua o valor 10 à variável myvar.`)
myvar = 10
console.log(`myvar = ${myvar}\n`)

console.log(`// Declare uma nova variável chamada soma, e adicione uma instrução somando os valores 15 e 8.`)
var soma = 15 + 8
console.log(`var soma = 15 + 8\n`)

console.log(`// Atribua à variável soma todo o valor dela, somando 1, usando o operador de soma abreviado.`)
soma += 1
console.log(`soma += 1\n`)

console.log(`// Atribua à variável soma todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.`)
soma *= 3
console.log(`soma *= 3\n`)

console.log(`// Qual é o valor da variável soma até aqui?`)
console.log(`O valor da variavel soma até aqui é ${soma}\n`)

console.log(`// Declare uma variável chamada souninja, atribuindo à ela o valor booleano que representa verdadeiro.`)
var souninja = true
console.log(`var souninja = true\n`)

console.log(`// Declare uma variável chamada comida que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.`)
comida = [`arroz`, `feijão`, `ovo`]
console.log(`comida = [´arroz´, ´feijão´, ´ovo´]`)


console.log(`// Digite a instrução que imprime o valor de 'feijao', que está na variável comida.`)
console.log(`comida[1]`)
console.log(comida[1])

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
soma === myvar
console.log(`soma === myvar (${soma === myvar})\n`)

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
myvar <= soma
console.log(`myvar <= soma (${myvar <= soma})\n`)

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(x,y) {
    return x / y
}
console.log(`function divisao(x,y) {
    return x / y
}`)

// Invoque a função criada acima, passando os parâmetros 10 e 2
divisao(10,2)
console.log(`divisao(10,2) = ${divisao(10,2)}`)