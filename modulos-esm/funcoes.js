'use strict'

const nomeMaiusculo = (nome) => {
    return nome.toUpperCase();
}
console.log(nomeMaiusculo("nome"));

const nomeMinusculo = (nome) => {
    return nome.toLowerCase();
}
console.log(nomeMinusculo("afonso"));

const valorFormatado = (valor) => {
    return valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
}
console.log(valorFormatado(1600));