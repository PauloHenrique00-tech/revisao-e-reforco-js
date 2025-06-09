'use strict';
// 04-usando-modulos-cjs.js

// 'Importando' os módulos usando CJS require
const modulosExemplos = require('./modulos-cjs/exemplo.js');

// Chamando a função existente no módulo
modulosExemplos.minhaFuncao();

// Acessando o array aravés do módulo
console.log(modulosExemplos.clientes);
