// Exercício 1
//Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar.
//Exercício 2
//Vamos criar variaveis usando let, const e var, atribuir strings e vamos concatenar e interpolar.

let idade = 22;
const nome = "Jorge";
var apelido = "Jorginho";

console.log(idade, nome, apelido);

console.log(`Meu nome é ${nome}, pode me chamar de ${apelido} e tenho ${idade} anos`)
console.log("Meu nome é " + nome + ", pode me chamar de " + apelido + " e tenho " + idade + " anos");

//Exercício 3
// Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos.

function media(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

resultado = media(12, 15, 17, 20, 25);
console.log(resultado);

//Exercício 4
//`Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? |


//Exercício 5
// | Faça um programa que peça dois números e imprima no console a soma desses dois números.|

function soma(num1, num2){
    return (num1 + num2);
}

resultado = soma(5, 10);
console.log(resultado);

//Exercício 6
// Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

function notebook(preco, desconto){
    return (preco - (preco * desconto));
}

let preco = 3000;
let desconto = 0.25;
resultado = notebook(preco, desconto);
console.log(`O valor para vender um notebook usado descontando 25% será R$ ${resultado}`);

//Exercício 7
//Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros.
function converteMetros(metros){
    return metros * 1000
}

let metros = 3000;
resultado = converteMetros(metros);
console.log(resultado)

//Exercício 8
//Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.
function sinal(statusSinal){
    if (statusSinal == 'vermelho'){
        return 'Sinal Vermelho! PARE'
    }
    if (statusSinal == 'verde'){
        return 'Sinal Verde! Prosseguir'
    }if (statusSinal == 'amarelo'){
        return 'Prosseguir com cuidado'
    }if (typeof statusSinal !== 'string'){
        return 'Inválido'
    }
}

var statusSinal = prompt('O sinal está: ').toLowerCase();
sinalEsta = sinal(statusSinal)
console.log(sinalEsta)

// Exercício 9
//Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número.
function fizzBuzz(numero){
    if (typeof numero != 'number')
        return numero;
    if ((numero % 3 === 0) && (numero % 5 === 0))
        return 'FizzBuzz';
    if (numero % 3 === 0)
        return 'Fizz'
    if (numero % 5 === 0)
        return 'Buzz'
    return numero
}

resultado = fizzBuzz(15)
console.log(resultado)

//Exercício 10
//Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.

var dia = prompt('Qual o dia da semana?').toLowerCase();

switch (dia) {
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log(`${dia} é dia de aula!`);
        break;
    case 'sábado':
    case 'domingo':
        console.log('Fim de semana');
        break;
    default:
        console.log('Dia inválido');
        break;
}