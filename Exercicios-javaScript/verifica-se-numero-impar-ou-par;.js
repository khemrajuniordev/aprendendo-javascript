/*Verificar se é par ou ímpar

Crie uma função que receba um número e retorne "Par" ou "Ímpar".

Entrada:
verificarParidade(7)
Saída:
"Ímpar" */

const numero = 10;    

//função que verifica se o número é par ou ímpar
function verificarParidade(numero) {
  //verifica se o número é divisível por 2
  if (numero % 2 === 0) {
    //se for divisível, retorna "Par"
    return "Par";
  } else {
    //se não for divisível, retorna "Ímpar"
    return "Ímpar";
  }
}

verificarParidade(numero);

console.log(verificarParidade(numero));

//anotações:
//como chamar a função para verificar se o número é par ou ímpar?
//R: Você pode chamar a função passando um número como argumento, por exemplo:
//verificarParidade(7);             
//isso retornará "Ímpar"

//tem como exibir o resultado no console?
//R: Sim, você pode usar console.log para exibir o resultado, assim:
//console.log(verificarParidade(7));  
//isso exibirá "Ímpar" no console


//exemplo no console
/* console.log(verificarParidade(7)); // Saída esperada: "Ímpar"
console.log(verificarParidade(10)); // Saída esperada: "Par" */