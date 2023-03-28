let result;
let operator = prompt("Enter the Operator (+,-,*,/)");

let num1 = parseFloat(prompt("Enter first Number :"));
let num2 = parseFloat(prompt("Enter Second Number :"));

switch(operator){
    case '+':
        result = num1 + num2;
        document.write(`${num1} + ${num2}= ${result}`);
        break;
    case '-':
        result = num1 - num2;
        document.write(`${num1} - ${num2}= ${result}`);
        break;
    case '*':
        result = num1 * num2;
        document.write(`${num1} * ${num2}= ${result}`);
        break;
    case '/':
        result = num1 / num2;
        document.write(`${num1} / ${num2}= ${result}`);
        break;
    default:
        document.write("Operator is not valid");
}