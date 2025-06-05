// 02-lidando com strings.js
'use strict';

let nome = "Chapolin";
let sobrenome = "Colorado";
let idade = 30;
let cidade = "São Paulo";
let estado = "SP";

/* Meu nome é Chapolin Coloradao, tenho 30 anos e moro em 
São Paulo/SP. */

// CONCATENAÇÃO tradicional usa o operador +
let mensagem1 = "Meu nome é "+nome+" "+sobrenome+", tenho "+idade+" anos e moro em "+cidade+"/"+estado+".";
console.log(mensagem1);


// TEMPLATE STRINGS/LITERAL