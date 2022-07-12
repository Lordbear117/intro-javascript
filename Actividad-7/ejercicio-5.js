// Retorna el numero mayor de un arreglo

const arr = [45, 56, 32, 98, 1000, 5, 23]

function numeroMayor(arr){

    let mayor = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (mayor < arr[i]){
            mayor = arr[i];
        }
    }

    return mayor;
}

numeroMayor(arr);