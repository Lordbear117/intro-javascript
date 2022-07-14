
//  ## Problema 1:

//  Cuadre el valor de cada elemento en el array. Suponga que solo obtendrá números en la array de entrada.
 
//  `const input = [ 1, 2, 3, 4, 5 ];`
 
//  Resultado esperado:
 
//  `[ 1, 4, 9, 16, 25]`


const numeros = [ 1, 2, 3, 4, 5 ];

 function valorCuadrado(arr){
   let newArr = [];
    
    for (let newA of arr){
        newA = newA ** 2;
        newArr.push(newA);
    }
    console.log(newArr)
 }

 valorCuadrado(numeros);



 
//  ## Problema 2:
 
//  Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.
 
//  `const input = [12, 46, 32, 64];`
 
//  Resultado esperado:
 
//    `{ mean: 38.5, median: 32 }`
 
//  Solución


const numeros = [12, 46, 32, 64];

function regresarMediaMediana(arr){
    //Obtener la media
    const sum = arr.reduce((sum, val) => (sum += val));
    const length = arr.length;

    //Obtener la mediana
    //Ordena el areglo de mayor a amenor
    const arrSort = arr.sort();
    //
    const mid = Math.ceil(length / 2);

    const median = length % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];

console.log("mean: ", sum / length +", median: " + median);
}

regresarMediaMediana(numeros);



 
//  ## Problema 3
 
//  Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.
 
//  Caso de prueba:
 
//  `const input = 6;`
 
//  Result: `720`

const factorial = (num) => {
    if(num === 1) return num

    return num * factorial(num-1);
}

console.log(factorial(4)) 