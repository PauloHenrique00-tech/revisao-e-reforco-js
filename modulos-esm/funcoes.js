'use strict'

export const nomeMaiusculo = (nome) => {
    return nome.toUpperCase();
}


export const nomeMinusculo = (nome) => {
    return nome.toLowerCase();
}


export const valorFormatado = (valor) => {
    return valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
}

/* Usamos o rest operator para obter uma lista de parâmetros, não importando a quantidade */
export function classificar(...texto){
    return texto.sort();
}
