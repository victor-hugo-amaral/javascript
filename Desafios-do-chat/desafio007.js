// Solicita os números e a operação ao usuário
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação (+, -, *, /):");

let resultado;

// Usa switch para realizar a operação escolhida
switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "Erro! Divisão por zero não é permitida.";
        }
        break;
    default:
        resultado = "Erro! Operação inválida.";
}

// Exibe o resultado
alert("Resultado: " + resultado);
