//FizzBuzz

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número'
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'

    return entrada
}

resultado = fizzBuzz(7);
console.log(resultado)

//Exercício 2

let newStr = '';

function reverseAString(str) {
    for (let i = str.length - 1; i >= 0; i--)
    newStr += str[i];
    console.log(newStr)
}

console.log(reverseAString('Hello GamaAcademy'))

//Conversor temperatura Fahrenheit para Celsius

function convertToFahrenheit(value){
    return value * 1.8 + 32
}

let result = convertToFahrenheit(30);
console.log(`O valor em Fahrenheit é ${result}`)