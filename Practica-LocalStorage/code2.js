

const titulo = document.querySelector('#titulo');

function addItem (){
 
    localStorage.setItem('nombre', 'Pedro');

}

addItem();

let user = localStorage.getItem('nombre');
titulo.textContent = 'Aprende mas sobre ' + user;
