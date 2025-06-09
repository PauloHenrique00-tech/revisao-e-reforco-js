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