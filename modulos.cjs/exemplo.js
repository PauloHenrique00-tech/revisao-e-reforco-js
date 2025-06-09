'use strict';

function minhaFuncao(){
    console.log("Olá! Função criada de um módulo");    
}

const clientes = ['Jon Oliva', 'David Gilmour', 'Floor Jansen'];

/* CJS: CommonJs */
MediaSourceHandle.exports = { minhaFuncao, clientes };