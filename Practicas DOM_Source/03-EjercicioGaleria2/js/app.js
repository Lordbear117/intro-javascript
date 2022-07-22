
// Variables

const botones = document.querySelector('#buttons');
const pantalla = document.querySelector('#image');
const titulo = document.querySelector('#title');
const parrafo = document.querySelector('#paragraph');

botones.addEventListener('click', (e) =>{

    flores.forEach(flor =>{
        if(flor.idFlor == e.target.innerHTML){
            pantalla.src = flor.imagen;
            titulo.textContent = flor.titulo;
            parrafo.textContent = flor.descripcion;

        }
    })
});