// ### Problema 2

// Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.

// `const numbers = [ 1, -4, 12, 0, -3, 29, -150];`




function sumaPositivos(arr){
    let sum = 0;

    const positiveArr = arr.filter(function(num){
        return num > -1;  
    });

    for (let a of positiveArr){
        sum += a;
    }
    console.log(sum);
}

sumaPositivos(numbers);