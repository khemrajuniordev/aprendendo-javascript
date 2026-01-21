const { captureOwnerStack } = require("react");

const nome = "Khemraj"; // String
const idade = 40; // Number
let temCabelo = true; // Boolean
const altura = 1.75; // Number (float)
let peso; // Undefined

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Tem cabelo?", temCabelo);
console.log("Altura:", altura);
console.log("Peso:", peso);

temCabelo = false; // Atualizando o valor booleano
console.log("Tem cabelo agora?", temCabelo);


let profissao;
console.log("profissao");

let carro = "Yaris";
console.log("Qual o carro da Bia? ", carro);

console
carro = "Tracker";
console.log("Qual carro da Bia? ", carro);


carro = "Gol";
console.log("Qual o carro da Bia? ", carro);

carro = null;
console.log("Qual carro da Bia? ", carro);