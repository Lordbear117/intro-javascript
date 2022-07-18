// ### Problema 1:

// Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.

// ```jsx
// const Family = [
//     {
//       name: 'John',
//       age: 13
//     },
//     {
//       name: 'Mark',
//       age: 56,
//     },
//     {
//       name: 'Rachel',
//       age: 45,
//     },
//     {
//       name: 'Nate',
//       age: 67,
//     },
//     {
//       name: 'Jeniffer',
//       age: 65,
//     }
//   ];
// ```

// Expected result:

// ```jsx
// 	{
//     oldest: 67,
//     youngest: 13,
//     'age-difference': 54
//   }

const Family = [
         {
           name: 'John',
           age: 13
         },
         {
           name: 'Mark',
         age: 56,
         },
         {
           name: 'Rachel',
           age: 45,
         },
         {
           name: 'Nate',
           age: 67,
         },
         {
           name: 'Jeniffer',
           age: 65,
         }
       ];

function retornarEdades(a){
    let oldest = 0;
    let youngest = 0;
    let difference = 0;

    let edadArr = [];

    for(let i = 0; i < a.length; i++){
        edadArr.push(a[i].age);
    }

    oldest = Math.max(...edadArr);
  youngest = Math.min(...edadArr);

  difference = oldest - youngest;

  const edades = {
    oldest: oldest,
    youngest: youngest,
    "age-difference": difference
  };

  console.log(edades);
}
                  
retornarEdades(Family);