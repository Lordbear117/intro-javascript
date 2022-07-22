
let btnInicio = document.querySelector('#inicio');
let player1 = document.querySelector('#jugador1');
let player2 = document.querySelector('#jugador2');
let player3 = document.querySelector('#jugador3');

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;


btnInicio.addEventListener('click', () => {
    btnInicio.style.display = 'none';

    let intervalo = setInterval(carrera, 100);

    function carrera (){
        pos1 += Math.round(Math.random()*20);
        player1.style.left = `${pos1}px`;
        pos2 += Math.round(Math.random()*20);
        player2.style.left = `${pos2}px`;
        pos3 += Math.round(Math.random()*20);
        player3.style.left = `${pos3}px`;

        if(pos1 >= 646){
            clearInterval(intervalo);
            console.log('Ganador Rojo');
        }else if(pos2 >= 646){
            clearInterval(intervalo);
            console.log('Ganador Azul');
        }else if(pos3 >= 646){
            clearInterval(intervalo);
            console.log('Ganador Amarillo');
        }
    }
});