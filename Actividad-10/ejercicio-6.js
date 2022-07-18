// ### Problema 6

// Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

// `matriz = [7,2,5,3,5,3]`

// `br = [7,2,5,4,6,3,5,3]`

// Los números que faltan en arr son `[4,6]`


matriz = [7,2,5,3,5,3]

br = [7,2,5,4,6,3,5,3]

let diferencia = br.filter(x => !matriz.includes(x));

console.log(diferencia);