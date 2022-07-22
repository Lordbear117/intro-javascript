
let titulo = document.querySelector('#paragraph');
let pantalla = document.querySelector('#bigImage');
let contMiniaturas = document.querySelector('#imgsContainer');

contMiniaturas.addEventListener('click', (e) => {
    // console.log(e.target);
    if(e.target.src){
        titulo.innerText = e.target.name;
        pantalla.src = e.target.src;
    }
    

});