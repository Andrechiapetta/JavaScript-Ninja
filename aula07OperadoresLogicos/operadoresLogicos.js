var x = 3
var y = 7
console.log(`Operador (&&) é a mesma coisa que and ou E\n`)

var e = x === 3 && y === 7
console.log(`Quando usa && e todas as verficações forem true então tudo é true`)
console.log(`var e = x === 3 && y === 7`)
console.log(`console.log(e)`)
console.log(`${e}\n`)

e = x === 3 && y === 5
console.log(`Agora se pelo menos uma verificação for false então considera tudo false`)
console.log(`e = x === 3 && y === 5`)
console.log(`console.log(e)`)
console.log(`${e}\n`)

console.log(`Operador (||) é a mesma coisa que or ou ou\n`)

e = x === 3 || y === 5
console.log(`Quando usa (||) se pelo menos uma verificação for true então considera tudo true`)
console.log(`e = x === 3 || y === 5`)
console.log(`console.log(e)`)
console.log(`${e}\n`)

var e = x === 1 || y === 5
console.log(`Quando usa (||) todas as verficações tem que ser false para considerar tudo false`)
console.log(`var e = x === 1 || y === 5`)
console.log(`console.log(e)`)
console.log(`${e}\n`)

console.log(`Operador (!) é a mesma coisa que not, nega a verificação\n`)

e = !x === 3 || y === 5
console.log(`Quando usa (!) na verificação, nega a mesma`)
console.log(`e = !x === 3 || y === 5`)
console.log(`console.log(e)`)
console.log(`${e}\n`)
