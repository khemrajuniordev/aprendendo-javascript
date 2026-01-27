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
}

imposto(salario);
console.log(imposto(salario));
