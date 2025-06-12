"use strict";
// 09 - desestruturação.js

import { separador } from "./modulos-esm/exemplos.js";

// Desestruturando arrays
const clientes = ["Jon Oliva", "Geddy Lee", "David Gilmour"];

const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

separador();

const capitais = [
  "João Pessoa",
  "Manaus",
  "Curitiba",
  "Salvador",
  "Belo Horizonte",
];

// Desestruturando alguns valores (omitimos Curitiba e Belo Horizonte)
const [paraiba, amazonas, , bahia] = capitais;
console.log(paraiba);
console.log(amazonas);
console.log(bahia);

separador();

const linguagens = [
  ["HTML", "CSS", "JS"],
  ["PHP", "Node.js", "SQL", "Phyton", "ASP.Net"],
];

console.log(linguagens);

//console.log(linguagens[0][2]); // JS
//console.log(linguagens[1][3]); // Phyton

const [frontEnd, backEnd] = linguagens;

console.log(frontEnd[2]); //JS
console.log(backEnd[3]); //Python

separador();

// Desestruturação aninhada
const [[html, css, js], [php, node, sql, python, asp]] = linguagens;
console.log(js);
console.log(python);

separador();

/* Mini-exercício */
const diversos = [
  "JavaScript - Reforço",
  ["Teclado", "Monitor", "Mouse"],
  2112,
  (texto) => texto.toUpperCase(),
];

// Faça a desestruturação dos elementos deste array
// Teste usando o console.log para exibir cada elemento extraído
// Posso até deixar o segundo elemento do array como [teclado, monitor, mouse], mas é necessário
// fazer um comando específico para exibir esses elementos, no caso "console.log(nome da variável)"
const [diverso1, [teclado, monitor, mouse], diverso3, diverso4] = diversos;

console.log(diverso1);
console.log(teclado);
console.log(monitor);
console.log(mouse);
console.log(diverso3);
console.log(diverso4("paulo"));

separador();

const guloseimas = [
  "brigadeiro",
  "brownie",
  "torta de limão",
  "coxinha",
  "pastel",
  "pizza",
  "esfiha",
];

// Desestruturação com operador rest
const [brigadeiro, brownie, torta, ...salgados] = guloseimas;
console.log(brigadeiro);
console.log(salgados); // virou um array

separador();

/* Desestruturando objetos */
const musico = {
  nome: "David Gilmour",
  instrumento: "Guitarra",
  idade: 77,
  banda: "Pink Floyd",
};

// Acessando propriedade através do objeto (sem desestruturação)
//console.log(musico.nome);
//console.log(musico.idade);

// Com desestruturação
const { nome, instrumento, idade, banda } = musico;
console.log(nome);
console.log(instrumento);
console.log(idade);
console.log(banda);

separador();

const aluno = {
  nome: "Ozzy",
  cidade: "São Paulo",
  estado: "SP",
};

// Desestruturação com alias/apelido em propriedade
const { nome: nomeDoAluno, cidade, estado } = aluno;
console.log(nomeDoAluno); // acessando o apelido
console.log(cidade);
console.log(estado);

separador();

/* Mini-exercício */
const paciente = {
  nome: "Gabriel Viana",
  idade: 19,
  contatos: ["gabriel@gmail.com", "11-98765-4321"],
  sintomas: "Sonolência permanente, coriza, tosse, bronquite...",
  mensalidade: 568.74,
  endereco: {
    localidade: "Rua Francisco Coimbra",
    numero: "403",
    bairro: "Penha",
  },
  atendimento: () => (paciente.idade >= 60 ? "prioritário" : "normal"),
};

// Desestruture todos os elementos deste objeto paciente, tornando-os novas constantes
// Use o console.log para testar o acesso a cada nova constante desestruturada

const {
  nome: nomeDoPaciente,
  idade: idadeDoPaciente,
  contatos: [email, telefone],
  sintomas,
  mensalidade,
  endereco: { localidade, numero: numeroEndereco, bairro },
  atendimento,
} = paciente;

console.log(nomeDoPaciente);
console.log(idadeDoPaciente);
//console.log(contatos);
console.log(email);
console.log(telefone);
console.log(sintomas);
console.log(mensalidade);
console.log(localidade);
console.log(numeroEndereco);
console.log(bairro);
console.log(atendimento());

separador();

// Desestruturação de parâmetros de função
function processarPedido(dadosPedido) {
  console.log("Produto: " + dadosPedido[0]);
  console.log("Preço: " + dadosPedido[1]);
}

const pedido = ["TV", 1500];
processarPedido(pedido);
