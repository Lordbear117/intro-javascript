var resultado = 0;
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 101);
var multi = num1 * num2;

console.log(multi)

do {
    resultado = prompt("Adivine el numero aleatorio");
}   while (resultado != multi)

console.log("Le atinaste al numero")