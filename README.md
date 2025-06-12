# Atividades de revisão e reforço de JavaScript

## Sobre escopo de varíaveis e constantes

- `var`: escopo GLOBAL
- `let`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada
- `const`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada. Obs.:
  **obrigatório** inicializar com algum valor.

---

## Módulos no JavaScript

Existem duas formas de uso:

- Módulos CJS: mecanismo mais antigo, usa `module.exports` e `require` associado à uma constante
- Módulos ESM: mecanismo atual, usa `export` e `import`.

**Obs.:** recomendável criar na raiz o `packge.json` contendo:

```json
{
  "type": "module"
}
```

---

## Sobre os operadores REST e SPREAD (...)

Operador SPREAD (...)
O operador spread é usado para espalhar os elementos de arrays ou objetos. Ele copia ou combina dados de forma simples. É útil para clonar estruturas ou passar itens como argumentos de função. Exemplo: [...array] ou {...objeto}. Ele desmonta a estrutura original.

Operador REST (...)
O operador rest é usado para juntar vários valores em um array ou objeto. Ele coleta os "restantes" dos dados. Muito usado em funções para aceitar número variável de argumentos. Exemplo: function(...args). Ele agrupa os dados em uma nova estrutura.

---

## Sobre desestruturação

**Desestruturação em JavaScript** é uma forma prática de **extrair valores de arrays ou propriedades de objetos** e atribuí-los a variáveis de forma rápida e clara.

### Exemplo com objeto:

```javascript
const pessoa = { nome: "Ana", idade: 25 };
const { nome, idade } = pessoa;
console.log(nome); // "Ana"
```

### Exemplo com array:

```javascript
const numeros = [10, 20, 30];
const [a, b] = numeros;
console.log(a); // 10
```

### Para que serve:

- Facilita a leitura e escrita do código.
- Evita repetições como `pessoa.nome`, `pessoa.idade`.
- Muito usada em funções e React, por exemplo.

👉 Em resumo: **desestruturar = extrair partes de algo (objeto ou array) com facilidade.**
