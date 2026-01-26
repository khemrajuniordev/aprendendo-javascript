/* Soma de dois números
Crie uma função que receba dois números e retorne a soma.

Exemplo de entrada:
somar(2, 3)
Saída esperada:
5 */


//atribuição de valores às variaveis
const numeror1 = 2;
const numeror2 = 3;

//função que realiza a soma
function somar(a, b) {
  //retorna a soma dos dois números
  return a + b;
}
//chamada da função somar com os argumentos numeror1 e numeror2
somar(numeror1, numeror2);
//exibe o resultado da soma no console
console.log(somar(numeror1, numeror2));



//anotações:
// Saída esperada: 5
//por que tem que colocar a função dentro do console.log para aparecer o resultado?     
//R: Porque a função sozinha apenas define a operação, mas não a executa ou exibe o resultado.
//mais alguma coisa que eu deveria saber?
//R: Você também pode atribuir o resultado da função a uma variável e depois exibir essa variável no console.log.
//como?
//R: Você pode fazer isso assim:
//const resultado = somar(numeror1, numeror2);
//console.log(resultado);
//ou diretamente no console.log como você fez:
//console.log(somar(numeror1, numeror2));   

//tem como fazer sem criar as variaveis numeror1 e numeror2?
//R: Sim, você pode chamar a função diretamente com os números como argumentos:
//console.log(somar(2, 3));