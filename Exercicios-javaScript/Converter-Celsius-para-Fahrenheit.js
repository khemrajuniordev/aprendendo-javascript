/* Converter Celsius para Fahrenheit

Crie uma função que converta uma temperatura de Celsius para Fahrenheit.

Fórmula:
F = (C × 9/5) + 32 */


/* const Temperatura = 25;  */// Temperatura em Temperatura


// Função que converte Temperatura para Fahrenheit  
function converterTemperaturaParaFahrenheit(Temperatura) {
  // Aplica a fórmula de conversão
  const fahrenheit = (Temperatura * 9/5) + 32;
  // Retorna a temperatura em Fahrenheit
  return fahrenheit;
}


converterTemperaturaParaFahrenheit(30);

console.log(converterTemperaturaParaFahrenheit(30));


//anotações:
//como chamar a função para converter Celsius para Fahrenheit?
//R: Você pode chamar a função passando um valor em Celsius como argumento, por exemplo:
//converterTemperaturaParaFahrenheit(25);             
//isso retornará 77
//tem como exibir o resultado no console?
//R: Sim, você pode usar console.log para exibir o resultado, assim:
//console.log(converterTemperaturaParaFahrenheit(25));  
//isso exibirá 77 no console