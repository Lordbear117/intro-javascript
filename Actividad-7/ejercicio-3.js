// Voltea una oracion para asaber si es un palindromo

function revisarPalindromo(texto) {

    const voltearTexto = texto.split('').reverse().join('');

    if(texto == voltearTexto) {
        console.log('Es un palindromo');
    }
    else {
        console.log('No es un palindromo');
    }
}

const texto = prompt('Ingresa una palabra: ');

revisarPalindromo(texto);