/* Validação de acesso
Crie uma função que receba:
idade
possuiCadastro (boolean)
Regras:
Se idade ≥ 18 e possui cadastro → "Acesso permitido"
Caso contrário → "Acesso negado" */


const idade = 15;
const cadastro = true;

function verficacao(idade) {
    if (idade >= 18 && cadastro == true) {
        return "Acesso permitido"
    } else {
        return "Acesso negado"    
    }
}

verficacao(idade)
console.log(verficacao(idade));


