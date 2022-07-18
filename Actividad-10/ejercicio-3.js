// ### Problema 3

// Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada dada es una matriz, cuyos elementos son matrices de cadenas. El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices y su valor es el número de sus ocurrencias.

// ```jsx
// const input = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'f'],
//     ['d', 'f', 'g'],
//   ];
// ```

// Resultado esperado:

// ```jsx
// {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 2,
//     f: 2,
//     g: 1,
//   }

  const ar = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

  const contador = {};
  var newArr = [];

ar.forEach(function each(item) {
    if (Array.isArray(item))
      item.forEach(each);
    else
      newArr.push(item);
  });


  newArr.forEach(function (x) { contador[x] = (contador[x] || 0) + 1; });
  console.log(contador)