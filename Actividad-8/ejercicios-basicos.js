// Ejercicios de Objetos y sus métodos básicos:



 // Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
  
    //1. Muestra en pantalla el valor de la propiedad name mediante dot notation    
    console.log(student.name);
    //2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    console.log(student["age"])
    //3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
    student.name = "Steve Jobs";
    console.log(student.name);





//   Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
//     Objeto de muestra:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 
     var student = {
         name: "David Rayy",
         sclass: "VI",
         rollno: 12
     };
     let studentKeys = Object.keys(student)
     console.log(studentKeys);




  //Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    if (student.name){
        console.log(true)
    }else{
        console.log(false)
    }




  //Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
  //Imprima también el objeto antes o después de eliminar la propiedad. 
  //Objeto para usar:
  var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    function borrarPropiedad(){
        console.log(student.rollno);
        delete student.rollno;
        console.log(student.rollno);
    }

    borrarPropiedad();




  //Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
  
     var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
//La nueva edad debe ser 35.

student.age = 35;
console.log(student.age);

 

//Escriba un programa para añadir una nueva propiedad al siguiente objeto:
  var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
   // La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.

   student.pet = ['cat', 'dog'];
   console.log(student);
 


  //Crea un código para llenar un objecto vacio:
  
  const objeto = {}

  Object.defineProperty(objeto, "color", {
    value: 'blue',
    writable: true,
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(objeto, "tamano", {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(objeto, "peso", {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(objeto, "cantidad", {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  console.log(objeto);
  
//   Con las siguiente propiedades:
//     * color
//     * tamaño
//     * peso
//     * cantidad
//     * 


/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

function validarPropiedad(obj,string){
   
    if (obj.hasOwnProperty(string)){
        console.log(true)
    }else{
        console.log(false)
    }
}

var string = "name";
validarPropiedad(student, string);




// Create an object that will be filled only by a function inside of it,
//     and not from someone outside of it's function.. example:
// let myObject = {
//     myFunction: function ()... // This function is supposed to fill this object
// }

let myObject = {
    funcion: function llenado (a,b,c){
        Object.defineProperties(this, {
            "name" : {
                value : a
            },
            "pet" : {
                value : b
            },
            "age" : {
                value : c
            }
        });
    }
}

    myObject.funcion("Pepe", "Dog", 14)
    console.log(myObject.name);

// myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
// It supposed to be filled using it's own function
// Add any type of element on the object.. arrays, objects, int, strings, etc*/



/*var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];
Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
// al String "name" para que devuelva algo así:
//     ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]*/


function funcion(a){
    let name = "";
    for(let i = 0; i < a.length; i++){
        name += (a[i].a + a[i].b) + " " + a[i].name + " -=- ";
    }
    console.log(name);
}

simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, 
                  {a:23, b:56, name: "Object 140"}, 
                  {a: 32, b:75, name: "T57 Heavy"}];
                  
funcion(simpleExercise);