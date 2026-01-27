/*Simulação de regra de negócio (bem empresa 😄)
Crie uma função que receba um salário e:
Se for menor que 2000 → retorna "Isento"
Entre 2000 e 5000 → retorna "Imposto médio"
Acima de 5000 → retorna "Imposto alto" */


const salario = 2500;  // Salário recebido

// Função que simula a regra de negócio de imposto com base no salário
function imposto (salario) {
    if (salario < 2000){
        return "Isento";
    } if (salario >= 2000 && salario >= 5000) {
        return "Imposto médio"
    } else {
        return "Imposto alto"
    
}

imposto(salario);
console.log(imposto(salario));



//anotações
//operadores de comparação
// < menor que  
// <= menor ou igual que
// > maior que
// >= maior ou igual que                        
// == igual a (valor)
// === estritamente igual a (valor e tipo)
// != diferente de (valor)
// !== estritamente diferente de (valor e tipo)
// && e (AND)
// || ou (OR)
// ! negação (NOT)  
//exemplo de uso dos operadores
// console.log(5 < 10); // true
// console.log(5 <= 5); // true
// console.log(10 > 5); // true 
// console.log(10 >= 10); // true
// console.log(5 == '5'); // true
// console.log(5 === '5'); // false     
// console.log(5 != '6'); // true
// console.log(5 !== '5'); // true
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true); // false

// estruturas condicionais
// if (condição) {
//     // código a ser executado se a condição for verdadeira       

//esturura grande de if esle if
// } else if (outra condição) {
//     // código a ser executado se a outra condição for verdadeira
// } else {
//     // código a ser executado se nenhuma das condições anteriores for verdadeira
// }