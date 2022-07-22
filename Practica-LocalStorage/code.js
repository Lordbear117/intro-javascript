
let nombre = 'Jose';
let items = ['uno', 'dos', 'tres'];

let persona = {
    nombre: 'andres',
    edad: 23,
    correo: 'andres@correo.com'
}

let asisitentes = [
    {
        nombre: 'andres',
        edad: 23,
        correo: 'andres@correo.com'
    },
    {
        nombre: 'pedro',
        edad: 21,
        correo: 'pedro@correo.com'
    },
    {
        nombre: 'pepe',
        edad: 29,
        correo: 'pepe@correo.com'
    }
]

// Evita poner stringify al momento de anadir items y se agregan al local storage con esata funcion
function addItem (key,item){
    if(typeof item == 'string'){
        localStorage.setItem(key, item);
    } else{
        localStorage.setItem(key, JSON.stringify(item));
    }
}

//Se agregan items al LocalStorage mediante la funcion
 addItem('nombre', nombre);
 addItem('array', items);
 addItem('persona', persona);
 addItem('asistentes', asisitentes);

function obtnerItem() {
    let nombre = localStorage.getItem('nombre');
    let array = JSON.parse(localStorage.getItem('array'));
    let persona = JSON.parse(localStorage.getItem('persona'));
    let asistentes = JSON.parse(localStorage.getItem('asistentes'));

    if (nombre) console.log(nombre);
    if (array) console.log(array);
    if (persona) console.log(persona);
    if (asistentes) console.log(asistentes);

    array.forEach(e => {
        console.log(e);
    });

}

obtnerItem();

function eliminarItem(item){
    localStorage.removeItem(item);
}

//  eliminarItem ('array');
//  eliminarItem('asistentes');

function borrarTodo(){
    localStorage.clear();
}

// borrarTodo();






