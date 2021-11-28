//Exercício 11
//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg

console.log('Exercício 11:')
function calculoIMC(altura, peso){
    return imc = peso / (altura * altura)
}

var resultado = calculoIMC(1.75, 150)

if (resultado < 17) {
    console.log("Muito abaixo do peso", "alert")
  } else if (resultado > 17 && resultado <= 18.49){
    console.log("Abaixo do peso", "warning")
  } else if (resultado >= 18.5 && resultado <= 24.99){
    console.log("Peso normal", "sucess")
  } else if (resultado >= 25 && resultado <= 29.99){
    console.log("Acima do peso", "warning")
  } else if (resultado >= 30 && resultado <= 34.99){
    console.log("Obesidade I", "alert")
  } else {
    console.log("Obesidade II", "danger")
  }

//Exercício 12
//Crie uma função que determina se um número é par ou impar.
function imparPar(num){
    if (num % 2 === 0) {
        return 'Par'
    }else{
        return 'Impar'
    }
}

resultado = imparPar(5);
console.log('Exercício 12:', resultado);

//Exercício 13
//Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.
function tabuadaNum(num){
    for(let i = 0; i < 11; i++){
        console.log(`${num} x ${i} = ${(num * i)}`)
    }
}

console.log('Exercício 13:', tabuadaNum(5))

//Exercício 14
//Imprima na tela os números pares existentes entre 0 e 100..
for (let i = 0; i <= 100; i++){
    if (i % 2  === 0) {
        console.log(i)
    }
}

//Exercício 15
//Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function converteGraus(temp){
    return (temp * 1.8) + 32
}

resultado = converteGraus(26)
console.log('Exercício 15:', resultado)

//Exercício 16
//Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function calcularFatorial(n) {
    if (n === 1) {
        return 1;
    }
     
    return n * calcularFatorial (n - 1);
}

console.log('Exercício 16:', calcularFatorial(5))

//Exercício 17
//Crie uma função que recebe 2 parâmetros e retorna a multiplicação entre else.
function multiplicao(num1, num2){
  return num1 * num2
}

console.log('Exercício 17:', multiplicao(5, 2))

//Exercício 18
//Crie uma função que calcula 5% de desconto retornando o valor do desconto.
function desconto(valor){
  return valor * 0.05
}

console.log('Exercício 18:', desconto(150))

//Exercício 19
//Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.
function converteReal(real){
  return real * 5.61
}

console.log('Exercício 19', converteReal(51))

//Exercício 20
//Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50  
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução|

console.log('Exercício 20:')
  for(var i = 1; i < 51; i++){
    if (i === 10){
      continue
    }if (i === 25){
      break
    }
    console.log(i)
  }

  //Exercício 21
  //Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".

console.log('Exercício 21')
for(i = 10; i < 100;){
  i += 10
  if(i == 60 || i == 90){
    continue
  }
  console.log(i)
}