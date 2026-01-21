const notasFinais = [
    {nome: "Khemraj", nota: 9},
    {nome: "Beatriz", nota: 7},
    {nome: "Matheus", nota: 10},
    {nome: "Amanda", nota: 5},
    {nome: "Paula", nota: 3},
]

/*
for (let i = 0; i < notasFinais.length; i++) {
    if (notasFinais[i].nota >=6) {
        console.log("============PARABÉNS============")
        console.log(`O aluno ${notasFinais[i].nome} esta aprovado, com a nota: ${notasFinais[i].nota}`)
    } else {
        console.log("============SINTO MUITO============")
        console.log(`O aluno ${notasFinais[i].nome} esta reprovado, com a nota: ${notasFinais[i].nota}`)
    }
}
*/

/*  for (let item of notasFinais) {
    if (item.nota >= 6){
        console.log(`O aluno ${item.nome} está aprovado com ${item.nota}`)
    } else {
        console.log(`O aluno ${item.nome} está repovado com ${item.nota}`)
    }
}
*/



//foreach usando arrowfunction, toda manipulacao de metodos pra usar uma arrowfunction

notasFinais.forEach((item) => {
    if (item.nota >= 6){
        console.log(`O aluno ${item.nome} está aprovado com ${item.nota}`)
    } else {
        console.log(`O aluno ${item.nome} está repovado com ${item.nota}`)
    }
});
