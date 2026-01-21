
const fichaDoKhemraj = {
  nome: "Khemraj",
  idade: 25,
  cidade: "Manaus",
  profissaoAnterior: "Designer Jr",
  profissaoAtual: "Desenvolvedor Jr",
  filhos: false,
}

console.log("Fica do Khemraj ", fichaDoKhemraj);

//atraves da propriedade eu consigo acessar o valor do objeto
console.log(fichaDoKhemraj.nome);

//adiciando uma nova propriedade ao objeto
fichaDoKhemraj.estado = "Amazonas";
console.log("Ficha do Khemraj atualizada ", fichaDoKhemraj);

//remover uma propriedade estado do objeto
delete fichaDoKhemraj.estado;
console.log("Ficha do Khemraj sem estado ", fichaDoKhemraj);

//alterando uma propriedade do objeto
fichaDoKhemraj.idade = 26;
console.log("Ficha do Khemraj com idade atualizada ", fichaDoKhemraj);




