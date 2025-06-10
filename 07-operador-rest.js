'use strict'

// 07-operador-rest.js
/* Sobre o operador rest...
Usamos o rest para mesclar uma relação de parâmtros/argumentos 
para uma função. Na prática os parâmetros se comportam como um arra podendo receber
iterações via loop. */

function somar(...valores) {
    // Variável acumuladora
    let total = 0;

    // Iteração para somar e guardar o total
    for(const valor of valores){
        total += valor;
    }

    return total;
}

let resultado1 = somar(10,20);
let resultado2 = somar(10,20,50);
 
console.log(resultado1);
console.log(resultado2);