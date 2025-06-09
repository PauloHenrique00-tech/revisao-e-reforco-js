'use strict';
// 05 -usando-modulos-esm.js

// Importação de recurso padrão (default)
import alunos from "./modulos-esm/alunos.js";

// Importação de múltiplos recursos/módulos usando ESM
import { saudacao, clientes, separador } from "./modulos-esm/exemplos.js";

// Uso de um 'alias/apelido' para evitar conflito de nomes
import { pessoa, livro, alunos as personagens } from "./modulos-esm/dados.js";

import { nome } from "./modulos-esm/funcoes.js";

saudacao("Fulano de Tal");
console.log(clientes);

separador();

console.log(alunos[1]);
console.log(alunos);

for(const aluno of alunos){
    console.log(aluno);
}

separador

// Acessando recursos do módulo 'dados.js';
console.log(pessoa.nome);
console.log(livro);
console.log(personagens); // lembre-se personagens é um apelido para alunos

separador();

/* Exercícios
1) Crie um arquivo chamado "funcoes.js" dentro da pasta "modulos-esm"
2) Dentro dele, programe 3 funções (USANDO ARROW FUNCTION):
    - Converter caracteres para MAIÚSCULO
    - Converter caracteres para MINÚSCULO
    - Formatar valor em moeda brasileira (real)
3) Exporte-as como módulos
4) No arquivo 05, importe e utilize estas funções passando textos e valores para testes. */

