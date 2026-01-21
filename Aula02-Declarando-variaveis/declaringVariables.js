//const para variaveis imutavel
const primeiroValor = 10;
const segundoValor = 20;

console.log("Primeiro valor + Segundo valor", primeiroValor + segundoValor);
const valorTotal = primeiroValor + segundoValor;
console.log("Valor Total: ", valorTotal);

//let para variaveis mutavel
let terceiroValor = 50;
console.log("Terceiro valor: ", terceiroValor);

terceiroValor = 100;
console.log("Terceiro valor final: ", terceiroValor);



//Padrão de digitação das convenções
//padrao camelCase para declarar variárveis, letra minuscula e letra maiuscula
const autorDoCurso = "Khemraj Junior";
console.log("Pardão camelCase: ", autorDoCurso);
//padrao snake_case
const autor_do_curso = "Khemraj Junior";
console.log("Padrão snake_case: ", autor_do_curso);

// é permitido
const $variavel = ""
const _variavel = ""

/*
Não é permitido
Não se inicia variavel com numero 4variavel
Não se recomentada iniciar nome de variavel com a primeira letra maiuscula
evitar caracter nos nomes de variáveis
*/