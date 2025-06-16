"use strict";

// 12-reduce.js
import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* reduce (reduzir, redução, chegar a um resultado único) 
Passa por elementos de um array e reduz a um único valor, que pode ser
uma soma, média, concatenação, etc. 

A função callback recebe os dois parâmetros: o acumulador (valor que é acumulado até
o momento), e o valor atual (elemento do array sendo processado). */

// Exemplo 1
/* const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => {
  return acumulador + valor;
}, 0); */

//console.log(total);

const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(total);

// Exercício 1: realize a soma dos preços de todos os cursos
// Mostre no log.

// Exercício 2: calcule a média dos preços de todos os cursos
// Mostre no log.

// Exercício 3: calcule o preço total dos cursos de Front-End
// Mostre no log.

const resultado = cursos.reduce((acumulador, curso) => {
  return acumulador + curso.preco;
}, 0);

console.log(resultado);

const mediaPrecos = cursos.reduce((acumulador, curso) => {
  return acumulador + curso.preco / 15;
}, 0);

console.log(mediaPrecos);

const frontEnd = cursos.filter(
  (curso, categoria) => curso.categoria === "Front-End"
);
cursos.reduce((acumulador, curso) => {
  return acumulador + curso.preco / 4;
}, 0);

const somaDosPrecosFront = cursos
  .filter(({ categoria }) => categoria === "Front-End")
  .reduce((acumulador, { preco }) => acumulador + preco, 0);

console.log("Soma dos preços dos cursos de Front: " + somaDosPrecosFront);
