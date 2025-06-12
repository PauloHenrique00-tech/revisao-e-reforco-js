"use strict";

import { separador } from "./modulos-esm/exemplos.js";
import cursos from "./modulos-esm/cursos.js";

// 10-map.js

/* map (mapear, mapeamento - transformar/gerar outra coisa)
Passa por elementos de um array e realiza operações em cada um deles 
através de uma função callback, gerando um novo array de elementos transformados. */

// Exemplo 1
const numeros = [10, 20, 5, 12.5, 66, 50, 1000];
console.log(numeros);

const numerosDobrados = numeros.map((numero) => numero * 2);

console.log(numerosDobrados);

separador();

/* Mini-exercício:
1) Crie um array com 5 textos escritos em letras MAIÚSCULAS 
2) Mostre no console este array
3) Usando o map, acesse e transforme todos eles em letras minúsculas (toLowerCase)
4) Guarde o resultado do map em uma nova constante
5) Mostre no console este novo array */

const textos = [
  "PALMEIRAS NÃO TEM MUNDIAL",
  "PALMEIRAS NÃO TEM MUNDIAL",
  "PALMEIRAS NÃO TEM MUNDIAL",
  "PALMEIRAS NÃO TEM MUNDIAL",
  "THE ONE PIECE... THE ONE PIECE IS REAL!",
];

console.log(textos);

const novosTextos = textos.map((texto) => texto.toLowerCase());
console.log(novosTextos);

separador();

console.log("== Lista Completa de Cursos ==");
console.log(cursos);
console.log("=======================");

separador();

// Exemplo 2: gerar um novo array contendo somente os títulos dos cursos
const titulos = cursos.map((curso) => curso.titulo);
console.log(titulos);
