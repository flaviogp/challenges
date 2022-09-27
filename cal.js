function calculadora(val1, val2, operator) {
    const num1 = Number(val1);
    const num2 = Number(val2);
    let total;
    switch (operator) {
        case '+': {
            total = num1 + num2;
            break;
        }
        case '-': {
            total = num1 - num2;
            break;
        }
        case '*': {
            total = num1 * num2;
            break;
        }
        case '/': {
            total = num1 / num2;
            break;
        }
    }
    return total;
}


const numeroEscolhido1 = prompt('Digite o primeiro numero:');
const operador = prompt('Digite o operador +:adção -:subtração *:multiplicação /:divisão');
const numeroEscolhido2 = prompt('Digite o segundo numero:');

const calculo = calculadora(numeroEscolhido1, numeroEscolhido2, operador)
const resultado = alert(`O resultado sa operação é : ${calculo}`);
