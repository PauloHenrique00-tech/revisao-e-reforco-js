// 03-funcoes.js
'use strict';

exemplo1(); // chamada da função

/* Sintaxe tradicional, função nomeada 
A ordem de declaração da função neste NÃO IMPORTA*/
function exemplo1() {
    console.log("Função nomeada");
}

exemplo1(); // chamada da função


function separador() {
    console.log("\n*******************\n");
}

separador();

// Chamada aqui dá erro, pois não pode ser feita antes da declaração
//exemplo2(); 

/* Sintaxe tradicional, função anônima
Nesta sintaxe, a ordem de declaração IMPORTA*/
const exemplo2 = function(){
    console.log("Função anônima");  
};

exemplo2(); // chamada (sempre após declarar a função anônima)


separador();

// MINI-EXERCÍCIOS

/* 1) Crie uma função (qualquer sintaxe) que receba dois valores 
numéricos como parâmetros, calcule a diferença entre estes valores
e retorne como resultado calculado. */

/* 2) Chame esta função pelo menos duas vezes passando valores diferentes
e guardando os resultados em variáveis de escopo global. */

/* 3) Apresente os resultados no console. */

let resultado;

function exercicio1(valor1, valor2) {
   let resultado = valor1 - valor2;
   return resultado;
}

resultado = exercicio1(40, 30);
// let resultado = exercicio1(40, 30); -- outra maneira de fazer

console.log(`Resultado: ${resultado} `); 
// console.log(resultado); -- outra maneira de fazer

separador();

/* Sintaxe moderna, função fleha/seta (arrow function)
Nesta sintaxe, a ordem de declaração IMPORTA. */
const exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3(); // Chamada deve ser feita após a declaração

const saudacao = (nome) => {
    console.log("Olá "+nome);
};
saudacao("João Pedro");
saudacao("Alana");
saudacao("Gabriel");