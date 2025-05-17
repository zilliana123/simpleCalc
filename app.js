const readlineSync = require('readline-sync');

// Entrada dos dados
const num1 = parseFloat(readlineSync.question('Digite o primeiro número: '));
const num2 = parseFloat(readlineSync.question('Digite o segundo número: '));
const operacao = readlineSync.question('Escolha a operação (+, -, *, /): ');

// Função da calculadora
function calcular(a, b, op) {
  if (isNaN(a) || isNaN(b)) {
    return 'Erro: entradas inválidas.';
  }

  switch (op) {
    case '+':
      //return `Resultado: ${a + b}`;
    case '-':

    case '*':
        return a * b;//Multiplicação
    case '/':
      return b === 0 ? 'Erro: divisão por zero!' : `Resultado: ${a / b}`;
    default:
      return 'Erro: operação inválida.';
  }
}

// Exibir o resultado
console.log(calcular(num1, num2, operacao));