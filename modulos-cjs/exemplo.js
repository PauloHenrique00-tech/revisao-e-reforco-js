'use strict';

function minhaFuncao(){
    console.log("Olá! Função criada de um módulo");    
}

const clientes = ['Jon Oliva', 'Afonso Padilha', 'Floor Jansen'];

/* CJS: CommonJs */
module.exports = { minhaFuncao, clientes };