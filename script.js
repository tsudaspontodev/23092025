//01 - Criar uma variavel chamada 'nome' e mostre no console: "Olá, meu nome é... " Usando TemplateString

// let nome = "Marcos";
// console.log(`Olá, meu nome é ${nome}.`);

//02 - Crie duas variaveis de números e mostre a soma

// let num1 = 20;
// let num2 = 50;

// console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`)

//03 - calcule o dobro de um número armazenado em uma variavel

// let num3 = 4;

// console.log(`O dobro do número ${num3} é ${num3 + num3}`);

//04 - verifique se um numero é par ou impar

// let num4 = 3;
// if (num4 % 2 === 0 ) {
//     console.log(`O numero ${num4} é PAR`)
// }else {
//     console.log(`O numero ${num4} é IMPAR`)
// }


//05 - Verificar se uma pessoa é maior de idade

// let idade = 19;

// if (idade >= 18) {
//     console.log(`O serumaninho tem ${idade} ele é MAIOR de IDADE`);
// }else {
//     console.log(`O serumaninho tem ${idade} ele é MENOR de IDADE`);
// }

//operador ternario
// const idade2 = 16;



//06 - Receba uma nota de (0 - 10) e exiba: "APROVADO"(>7), "RECUPERAÇÃO"(>=5 || <=6.9) ou "REPROVADO" (< 4.9)

// let media = 11;

// if (media >= 7 && media <= 10) {
//     console.log(`A média do aluno foi de ${media} ele foi APROVADO!!! `);
// }else if (media >= 5 && media <= 6.9) {
//     console.log(`A média do aluno foi de ${media} ele esta de RECUPERAÇÃO!!!`);
// } else if (media <= 4.9 && media >= 0){
//     console.log(`A média do aluno foi de ${media} ele foi REPROVADO!?!?!?!`);
// }else {
//     console.log(`A nota informada ${media} é inválida`);
// }


// Troca de valores - Declare duas variaves numericas e crie um script que troque os valores entre elas. ou seja, no final a primeira variavel deve ter o valor segunda e o da segunda deverá ter o valor da primeira

// let num1, num2;

// num1 = 10;
// num2 = 5;

// console.log(`O primeiro valor é ${num1} e  segundo valor é ${num2}`);


// let x = num1;
// num1 = num2;
// num2 = x;

// console.log(`O primeiro valor é ${num1} e  segundo valor é ${num2}`);

// Crie duas variaveis numericas e exiba o resultado das 4 operações básicas e do resto da divisão 

// let num1 = 3;
// let num2 = 2;
// let result;

// result = num1 + num2
// console.log (`A soma de ${num1} + ${num2} = ${result}`);

// result = num1 - num2
// console.log (`A subtação de ${num1} - ${num2} = ${result}`);

// result = num1 * num2
// console.log (`A multiplicação ${num1} * ${num2} = ${result}`);

// result = num1 / num2
// console.log(`A divisão de ${num1} / ${num2} = ${result}`);

// result = num1 % num2
// console.log(`A divisão de ${num1} mod ${num2} = ${result}`);


// console.log (`A soma de ${num1} + ${num2} = ${ num1 + num2}`);
// console.log (`A subtação de ${num1} - ${num2} = ${num1 - num2}`);
// console.log (`A multiplicação ${num1} * ${num2} = ${num1 * num2}`);
// console.log(`A divisão de ${num1} / ${num2} = ${num1 / num2}`);
// console.log(`O resto da divisão é ${num1} mod ${num2} = ${num1 % num2}`);

// crie uma variavel para receber uma cor do semáforo e depois exiba se o usuário pode seguir, se atentar ou parar. Crie uma variavel, também para 'cor inválida'

// let cor = "azul";

// if (cor == "verde") 
// {
//     console.log(`${cor} Pode seguir`);
// } else if (cor == "amarelo")
// {
//     console.log(`${cor} Atenção`);
// } else if (cor == "vermelho") 
// {
//     console.log(`${cor} PARE!!!!`)
// }else 
// {
//     console.log(`${cor} cor Inválido`)
// }


// usando o lanço for e uma estrutura if, crie um script que conte de exiba no console quantos numeros pares existem entre 1 e 50


// let cont = 0
// for (let i = 1; i <= 50; i++ ) 
// {
//     if (i % 2 === 0) {
//         //console.log(`${i} é par`);
//         cont++
        
//     }
    
// }
// console.log(`pares de 1 a 50 ${cont}`)

//Some todos os números de 1 a 100 e mostre o resultado. (for)

// let soma = 0;
// for (let i = 0; i <= 100; i++) {
//     soma += i;
// }

// console.log(`A soma de 1 a 100 é ${soma}`)

// crie um array com 5 nomes e mostre cada nome 

const nomes  = ["Maria", "Jose", "Pedro", "matheus" ]
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

function apresentacao (name) {
    return ('ola ${name}');
}

console.log(apresentacao ('Marcos'));