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

### 🥡 Operador REST (...)

- Resumo rápido: junta várias coisas em uma só.
- Você usa quando quer "juntar" argumentos ou elementos.

Exemplo básico:

js
Copiar
Editar
function somar(...numeros) {
return numeros.reduce((acc, val) => acc + val, 0);
}

console.log(somar(1, 2, 3)); // 6
Aqui, o ...numeros pega vários argumentos e coloca tudo num array chamado numeros. Ele agrupa. Ele junta. Ele é o colecionador de Pokémon.

### 🌪️ Operador SPREAD (...)

Resumo rápido: espalha uma coisa em várias partes.
Você usa quando quer "espalhar" os valores de um array ou objeto.

Exemplo básico:

js
Copiar
Editar
const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5];

console.log(maisNumeros); // [1, 2, 3, 4, 5]
Aqui, o ...numeros espalha os elementos do array original dentro de um novo array. Ele destrincha. Ele abre o pacote de bolachas e joga tudo na mesa.

🤹 Comparando os dois:
REST: junta várias coisas em uma variável → function(...args)

SPREAD: espalha uma variável em várias coisas → console.log(...array)

Ambos usam ... porque os criadores do JS estavam se sentindo poéticos.
