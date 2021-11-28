//Exercício 22
//Vamos criar uma conta bancária com as 3 operações básicas? rs
// a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual|
console.log('Exercício 22:')
function contaBancaria(operacao, valor){
    let saldo = 250
    if(operacao == 'depositar'){
        saldo += valor
        return saldo
    }if (operacao == 'sacar'){
        saldo -= valor
        return saldo
    }else if(operacao == 'consultar saldo'){
        return saldo
    }
}
resultado = contaBancaria('consultar saldo', 150)
console.log(resultado)

//Exercício 23
//Crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".
console.log('Exercício 23:')
for(var i = 10; i < 60;){
    i += 5
    if(i == 35 || i == 45){
        continue
    }
    console.log(i)
}

//Exercício 24
//Crie um algoritmo que converte dias em horas, quando recebe um número de dias.
console.log('Exercício 24:')
function diasPHoras(dias){
    return dias * 24
}
console.log(diasPHoras(5), 'horas')

//Exercício 25
//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.
console.log('Exercício 25:')
function divisaoEResto(num1, num2){
    var resultado = num1 / num2
    if (resultado % 2 === 0){
        return console.log(resultado, 'é par')
    }else if (resultado % 2 !== 0){
        return console.log(resultado, 'é impar')
    }
}

divisaoEResto(10, 2)

//Exercício 26
//Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo:
// a) números de 1 a 100  
// b) quando chegar no número 50 interrompa a instrução e pare o loop 
// c) quando chegar no número 50 pule a instrução |
//Colocar na mesma linha
console.log('Exercício 26:')
var array = [];
for(i = 1; i < 100; i++){
    if(i === 50){
        break;
    }
    array.push(i)
}
console.log(array.join(','))

//Exercício 27
//Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console|
console.log('Exercício 27:')
function calculadora(operacao, num1, num2){
    if((operacao == 'soma')){
        resultado = (num1 + num2)
        return console.log('Operação Soma:', resultado)
    }else if ((operacao == 'multiplicacao')){
        resultado = (num1 * num2)
        return console.log('Operação Multiplicação:', resultado)
    }else if ((operacao == 'divisao')){
        resultado = (num1 / num2)
        return console.log('Operação Divisão:', resultado)
    }else if ((operacao == 'subtracao')){
        resultado = (num1 - num2)
        return console.log('Operação Subtração:', resultado)
    }else{
        return console.log('Inválido! Válidos: Soma, Subtração, Multiplicação e Divisão')
    }
}

calculadora('soma', 4, 4)

//Exercício 28
//Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.
console.log('Exercício 28:')
function valorDesconto(preco, desconto){
    let percentual = desconto / 100
    aplicar = preco * percentual
    preco = preco - aplicar
    return console.log(`Preço a pagar R$ ${preco}, desconto de ${desconto} %`)
}
valorDesconto(150, 5)


//Exercício 29
//Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem..
console.log('Exercício 29:')
function tempoParaViagem(distancia, velocidade){
    if((distancia > velocidade)){
        return distancia / velocidade
    }else{
        return velocidade / distancia
    }
}

console.log(tempoParaViagem(100, 80), 'hora(s).')

//Exercício 30
//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
console.log('Exercício 30:')
function valorJantar(valor){
    return console.log('Valor a pagar com taxa de 10% do garçom:', (valor - (valor * 0.1)))
}

valorJantar(150)

//Exercício 31
//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.
console.log('Exercício 31')
function diaDaSemana(Numerodia){
    switch(Numerodia){
        case 1:
            return console.log('Hoje é domingo!')
        case 2:
            return console.log('Hoje é segunda-feira')
        case 3:
            return console.log('Hoje é terça-feira')
        case 4:
            return console.log('Hoje é quarta-feira')
        case 5:
            return console.log('Hoje é quinta-feira')
        case 6:
            return console.log('Hoje é sexta-feira')
        case 7:
            return console.log('Hoje é sábado')
        default:
            return console.log('Inválido')

    }
}
diaDaSemana(1)

//Exercício 32
//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".
console.log('Exercício 32:')
function maiorMenorIgual(num1, num2){
    if ((num1 > num2)){
        return console.log(`O número ${num1} é maior que ${num2}`)
    }else if((num1 < num2)){
        return console.log(`O número ${num2} é maior que ${num1}`)
    }else{
        return console.log('Os números são iguais')
    }
}
maiorMenorIgual(6, 8)

//Exercício 33
//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
console.log('Exercício 33: ')
function imparPar(numero){
    if(numero % 2 === 0){
        return console.log('Par')
    }else{
        return console.log('Impar')
    }
}

imparPar(4)

//Exercício 34
//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado|
console.log('Exercício 34:')
function passouDeAno(nota){
    if((nota >= 7 && nota <= 10)){
        console.log(`Nota ${nota} - Aprovado`)
    }else if((nota >= 5 && nota < 7)){
        console.log(`Nota ${nota} - Recuperação`)
    }else if ((nota < 5 && nota >= 0)){
        console.log(`Nota ${nota} - Reprovado`)
    }else{
        console.log(`Nota ${nota} - Inválido`)
    }
}

passouDeAno(8)

//Exercício 35
//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
function maioridade(anoNascimento){
    idade = 2021 - anoNascimento 
    if(idade < 18){
        return 'Menor de idade'
    }else if (idade > 18){
        return 'Maior de idade'
    }
}
console.log('Exercício 35:', maioridade(2006))
