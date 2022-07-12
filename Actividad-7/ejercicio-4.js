
// Cuenta cuantas veces se repite una letra en una oracion

function ocurrenciaLetra(texto, letra){

    let contador = 0;
    const array = texto.split('');

    for (let i = 0; i < array.length; i++){
        
        if (array[i] == letra){
            contador++;
        }
    }
    return contador;
}

const texto = prompt('Ingresa una palabra: ');
const letra = prompt('Ingresa una letra: ');

ocurrenciaLetra(texto, letra);