// //Criar uma variável chamada 'nome' e mostre no console: "Olá, meu nome é.......". Usando templateString
// const nome = 'Wilson';
// console.log(`Olá, meu nome é ${nome}`);

// //Crie duas variáveis de números e mostre a soma
// const num1 = 3;
// const num2 = 5;
// const soma = num1 + num2;
// console.log(`A soma de ${num1} + ${num2} é ${soma}`);

// //calcule o dobro de um número armazenado em uma variável
// const n1 = 10;
// const mult = n1 * 2;
// console.log(`O dobro de ${n1} é ${mult}`);

// const num = 7;
// console.log(`O dobro de ${num} é ${num + num}`);

// //Verifique se um número é par ou impar
// const parOuImpar = 2;
// if (parOuImpar % 2 === 0) {
//     console.log(`O número ${parOuImpar} é par`)
// } else {
//     console.log(`O número ${parOuImpar} é ímpar`)
// }

// //Verificar se uma pessoa é maior de idade
// const idade = 18;
// if (idade >=18) {
//     console.log('Maior de idade')
// } else {
//     console.log('Menor de idade');
// }

// //operador ternário ? :
// const idade2 = 18;
// const maioridade2 = (idade2 >= 18) ? `Você tem ${idade2} e é maior de idade` : 'Menor de idade';
// console.log(maioridade2)

// //Receba uma nota (0-10) e exiba: "Aprovado" >7, "Recuperação >=5 && <=6.9" ou "Reprovado < 4.9"
// const nota = 11;
// if (nota >=7 && nota <=10) {
//     console.log('Aprovado')
// } else if (nota >=5 && nota <= 6.9) {
//     console.log('Recuperação')
// } else if (nota <= 4.9 && nota >= 0) {
//     console.log('Reprovado')
// } else {
//     console.log('Nota inválida')
// }

// //Troca de valores - Declare duas variáveis numéricas e crie um script que troque os valores entre elas. Ou seja, no final a primeira variável deve ter o valor da segunda e o da segunda deverá ter o valor da primeira.

// // let a = 10;
// // let b = 15;
// // console.log(a);
// // console.log(b);

// // b = a;
// // a = b;

// // console.log(a);
// // console.log(b);

// let a1 = 20;
// let b1 = 35;
// console.log(`O valor de a1 é ${a1} e o valor de b1 é ${b1}`);
// let temporaria = a1;
// a1 = b1;
// b1 = temporaria;
// console.log(`O valor de a1 é ${a1} e o valor de b1 é ${b1}`);

//Crie duas variáveis numéricas e exiba o resultado das 4 operações básica e do resto da divisão.
// const a = 100;
// const b = 20;

// const soma = a + b;
// const subt = a - b;
// const mult = a * b;
// const div = a / b;
// const resto = a % b;

// console.log(`A soma de a e b é ${soma}. A subtração de a e b é ${subt}. A multiplicação de a e b ${mult}. A divisão de a e b é ${div}. O resto da divisão de a e b é ${resto}`);

// crie uma variável para receber uma cor do semáforo e depois exiba se o usuário pode seguir, se atentar ou parar. Crie uma variável, também para 'cor inválida'

// const cor = 'verde';
// if (cor === 'Verde' || cor === 'verde') {
//     console.log(`O semáforo está ${cor}, pode seguir`);
// } else if (cor === 'Amarelo') {
//     console.log(`O semáforo está ${cor}, atenção!`);
// } else if (cor === 'Vermelho') {
//     console.log(`O semáforo está ${cor}, não pode seguir`);
// } else {
//     console.log(`A cor ${cor} é inválida`);
// }

//usando o laço for e uma estrutura if, crie um script que conte e exiba no console quantos números pares exitem entre 1 e 50.

// let quantidadePar = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} é par`);
//         quantidadePar++;
//     }
// }
// console.log(`Entre os números 1 e 50 têm ${quantidadePar} pares`);

//Some todos os números de 1 a 100 e mostre o resultado. (for)
