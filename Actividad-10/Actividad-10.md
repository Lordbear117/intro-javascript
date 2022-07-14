### Problema 1:

Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.

```jsx
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
```

Expected result:

```jsx
	{
    oldest: 67,
    youngest: 13,
    'age-difference': 54
  }

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



```





### Problema 2

Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.

`const numbers = [ 1, -4, 12, 0, -3, 29, -150];`


```jsx

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



```


### Problema 3

Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada dada es una matriz, cuyos elementos son matrices de cadenas. El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices y su valor es el número de sus ocurrencias.

```jsx
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
```

Resultado esperado:

```jsx
{
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }




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

```

### Problema 4

Escriba una función de JavaScript que tomará una serie de números almacenados

y encontrará el segundo número más bajos y segundos más altos, respectivamente

del siguiente arreglo:  *`const arr = [3,4,6,1,5,2,9,10,23,12]`*

```jsx
const arr = [3,4,6,1,5,2,9,10,23,12]

let min = 0;
let max = 0;

arr.sort(function(a, b){return a-b});

console.log(arr);

min = arr[1];
max = arr[arr.length-2];

console.log(min);
console.log(max);

```

### Problema 5:

De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.

```jsx
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
```

1. Retorna en un array las calificaciones de todos los estudiantes.
2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto: 

```jsx
[
  { 
    "Jorge": {
      "promedio": 8.6
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  }
]
```

1. Retorna la calificación mas baja
2. Retorna la calificación mas alta


```jsx
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

```





### Problema 6

Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

`matriz = [7,2,5,3,5,3]`

`br = [7,2,5,4,6,3,5,3]`

Los números que faltan en arr son `[4,6]`

```jsx
matriz = [7,2,5,3,5,3]

br = [7,2,5,4,6,3,5,3]

let diferencia = br.filter(x => !matriz.includes(x));

console.log(diferencia);
```



### Problema 7

**Objetos-Recursividad:**

Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad `id`

```
const root2 = {
  id: '123',
  child: [{
    id: '234',
    child: [{
      test: {
        id: 2
      }
    }]
  }],
  child2: [{
    id: '345',
    child3: {
      id: '534'
    }
  }]
};
```
```jsx
const root2 = {
    id: '123',
    child: [{
      id: '234',
      child: [{
        test: {
          id: 2
        }
      }]
    }],
    child2: [{
      id: '345',
      child3: {
        id: '534'
      }
    }]
  };
  
  cont = 0;
  //Ciclo for que primero revisa por id en root2 y agrega al contador. En este caso solo es 1.
  for(const x in root2){
      if(x === "id"){
          cont++
      } else {
        //En este caso ingresa mas adentro en el objeto, primero child y luego child que esta dentro de este. y cuenta
          for(const [key, value] of Object.entries(root2[x])){
              for(const [key, val] of Object.entries(value)){
                  if (key === "id") {
                      cont++
                  } else {
                      if (val.id){
                          cont++
                      } else {
                          for (const idFinal of val){
                              let ids = Object.values(idFinal);
                              for (const nombre of ids){
                                  if(nombre.hasOwnProperty("id")){
                                      cont++;
                                  }
                              }
                          }
                      }
                  }
              }
              
          }
  
      }
      
  }
  
  console.log('ID se repite : ' + cont + ' veces.');
```