let input = document.getElementById("input-output");
let valor1 = 0;
let valor2 = 0;
let operador = "";

numero = (a) => {
    input.value += a;
}

suma = () => {
    valor1 = Number(input.value);
    input.value = "";
    operador = "+";
}

resta = () => {
    valor1 = Number(input.value);
    input.value = "";
    operador = "-";
}

division = () => {
    valor1 = Number(input.value);
    input.value = "";
    operador = "/";
}

multiplicacion = () => {
    valor1 = Number(input.value);
    input.value = "";
    operador = "*";
}

borrar = () => {
    input.value = "";
}

borrarNumero = () => {
    input.value.slice(0, -1);
}

igual = () => {

    valor2 = Number(input.value);
    switch(operador){
        case "+":
            input.value = Number(valor1 + valor2);
            break;
        case "/":
            input.value = Number(valor1 / valor2);
            break;
        case "*":
            input.value = Number(valor1 * valor2);
            break;
        case "-":
            input.value = Number(valor1 - valor2);
            break;
    }
}