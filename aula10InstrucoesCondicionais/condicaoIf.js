console.log("Tudo que está na condição IF só é executado se for verdadeiro.\n")

var x = 3;
console.log(`x = ${x}`)

var y = 7;
console.log(`y = ${7}\n`)

console.log(`Se x for igual a 3 então y fica sendo 3.`)

if(x === 3) {
    y = 3;
}
console.log(`if(x === 3) {
    y = 3;
}`)
console.log(`o valor de y é ${y}\n`)

console.log(`Podemos utilizar junto ao if o && dessa maneira as duas condição dentro do if tem que ser verdadeira`)
console.log(`x tem que ser igual a y e x tem que ser igual a 3`)

if(x === y && x === 3) {
    x = 5;
    y = 2;
}

console.log(`if(x === y && x === 3) {
    x = 5;
    y = 2;
}`)
console.log(`o valor de x é ${x} e o valor de y é ${y}.\n`)

console.log(`Podemos utilizar junto ao if o || dessa maneira uma das condições dentro do if tem que ser verdadeira`)
console.lof(`x tem que ser igual a 5 ou y tem que ser igual a 1`)

if( x === 5 || y === 1) {
    x = 1;
    y = 1;
}
console.log(`if( x === 5 || y === 1) {
    x = 1;
    y = 1;
}`)
console.log(`o valor de x é ${x} e o valor de y é ${y}.\n)