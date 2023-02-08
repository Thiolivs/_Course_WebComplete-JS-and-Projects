let number1 = 346
let number2 = 33

result = number1.toString(2)

console.log(result)         // 101011010
console.log(typeof(result)) // string

let word = "Random"

console.log(word.charAt(0))     //char at 0
console.log(word.charCodeAt(0)) //char code at
console.log(word.indexOf('d'))  //indexOf
console.log(word.substring(3))    
console.log(word.substring(0, 3))    
console.log(word.replace('a', '4'))
console.log("word1,Word2,Word3".split(','))

const nameCountry = 'Germany'
template = `This product is made in ${nameCountry}`

console.log(template)

simpleArray = [1,2,3,4,5,6]
console.log(simpleArray)
simpleArray.pop()
console.log(simpleArray)
delete simpleArray[0]
delete simpleArray[1]
console.log(simpleArray)
delete simpleArray[4]
console.log(simpleArray)

const prod1 = {}
prod1.nome = 'celular'
prod1.preco = '200'
prod1.peso = 0.2
prod1['chave'] = 'valor'
console.log(prod1)

const country1 = {
    name: 'Canadá',
    population: 200000,
    continent: 'America',
    key: 'value'
}

console.log(country1)

/*

jsonExample = {
	"name": "james",
	"age": 32,
	"344": false
}

*/

function sumNumber(a,b){
    console.log(a+b)
}

const sumNumber2 = function(a,b){
    console.log(a+b)
}

const sumNumber3 = (a,b) => {
return a+b
}
const sumNumber4 = (a,b) => a+b

const rand = function({min=10, max=20}){
    const result = Math.random()* (max-min) + min
    return Math.floor(result)
}

console.log(rand(1))

const numeroAleatorio = function(min, max){
    result = Math.random()*(max - min) + min
    return Math.floor(result)
}

// let opção = 0
// while (opção !== -1){
//     opção = numeroAleatorio(-1,10)
//     console.log(opção)
// }

console.log("fim")

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1,2,3,4,5))
