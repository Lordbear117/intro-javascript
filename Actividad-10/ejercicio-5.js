// ### Problema 5:

// De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.

// ```jsx
// let info = [
//     {
//         nombre: "Diego",
//         materias: [
//             {
//                 nombreMateria: "español",
//                 calificacion: 100
//             },
//             {
//                 nombreMateria: "matemáticas",
//                 calificacion: 70
//             },
//             {
//                 nombreMateria: "ciencias",
//                 calificacion: 55
//             }
//         ]
//     },
//     {
//         nombre: "Jorge",
//         materias: [
//             {
//                 nombreMateria: "español",
//                 calificacion: 60
//             },
//             {
//                 nombreMateria: "matemáticas",
//                 calificacion: 65
//             },
//             {
//                 nombreMateria: "ciencias",
//                 calificacion: 80
//             }
//         ]
//     }
// ]
// ```

// 1. Retorna en un array las calificaciones de todos los estudiantes.
// 2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto: 

// ```jsx
// [
//   { 
//     "Jorge": {
//       "promedio": 8.6
//     }
//   },
//   {
//     "Alumno": {
//       "promedio": 5.5
//     }
//   },
//   {
//     "Alumno": {
//       "promedio": 5.5
//     }
//   }
// ]
// ```

// 1. Retorna la calificación mas baja
// 2. Retorna la calificación mas alta



let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]



  let arregloCalificaciones = [];
  let arregloPromedios = [];
  //ciclo para el arreglo principal INFO
  for (let inf of info){
    //ciclo para los campos clave de info como nombre y materia
      for(let est in inf){
        //comprueba que el campo sea materia solamente y no otro como nombre
        if(est === "materias"){
            //Busca dentro del objeto info el campo materia
            for (a of inf[est]){
                //hace un push a un nuevo arreglo del valor que se encuentra dentro de materia:calificaciones que es igual a a["calificacion"]
                arregloCalificaciones.push(a["calificacion"])
            }
        }
      }
  }
  console.log(arregloCalificaciones)


  const calificaciones = [];
//se crea un ciclo for para pasar por todo el contenido de info como nombre y materias
for(const prop in info){
    //se asigna el contenido de nombre y materias a dos varaibles conforme pasa el ciclo for, primero por los nombre y materia en primer lugar,
    //y luego por los otros dos a conforme se realiza el ciclo, en este caso se realiza dos veces.
  const {nombre, materias} = info[prop];
  //se usa el metodo reduce para obtener solamente las calificaciones del objeto MATERIAS actual, el primero le perteneceria al nombre
  //DIEGO y el segundo a Jorge.
  const calificacionesUno = materias.reduce((ac, current) => ac + current.calificacion, 0);
  //Se crea un nuevo objeto en el cual se van almacenando los campos nombre que se extrajo actualemnte con el ciclo for para INFO y 
  //con la constante "calificacionesUno" la cual obtuvo del campo materia solo las calificaciones anteriormente. Asi mismo hace un push con 
  //este objeto creado al objeto calificaciones. Hace push de lo almacenado en obj[] a calificaciones[].
  const obj = {};
  obj[nombre] = {"promedio": calificacionesUno};
  calificaciones.push(obj);
}
console.log(calificaciones)

let cals = [];
//se realiza un ciclo for para obtener los arrrglos del objeto calificaciones[] creado anteriormente, el cual contendria 
//{ Diego: { promedio: 225 } }
//{ Jorge: { promedio: 205 } }
for(const estudiante of calificaciones){
//este ciclo for obtiene nombre y promedio: ### de estudiante[] el cual se ovtuvo del ciclo for de calificaciones[].
//{ Diego: { promedio: 225 } } seria el primer valor de estudiante donde key seria Diego y value seria { promedio: 205 }.
  for(const [key, value] of Object.entries(estudiante)){
    //luego asigna el value al arreglo promedio{} y despues hace un push al arreglo final de cals[]. Esto dentro del ciclo aun,
    //en este caso el ciclo se itera 2 veces.
      const {promedio} = value;  
      cals.push(promedio);
  }
}
//Calificacion 
//cals [ 225, 205 ]
//Si la primer calificacion es mayor que la segunda entonces la mas alta es la primera, caso contrario lo es la segunda del arreglo cals.
//Lo mismo para obtener la mas baaj
console.log('La calificacion mas alta es: ' + (cals[0] > cals[1] ? cals[0] : cals[1]));
console.log('La mas baja es: ' + (cals[0] > cals[1] ? cals[1] : cals[0]));
