function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}

// Testes
console.log("Soma: ", somar(10, 5));            // 15
console.log("Subtração: ", subtrair(10, 5));    // 5
console.log("Multiplicação: ", multiplicar(10, 5)); // 50
console.log("Divisão: ", dividir(10, 5));       // 2