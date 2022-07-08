
var arr = [1,4,6,10,22,55,46,2,5,0];

for (let i = 0; i <= arr.length; i++){

    if (arr[i] > 3){
        console.log(arr[i]);
    }
}



var arreglo = [];
let i = 0;

while (i < 5){
    
    arreglo [i] = i;
    console.log(arreglo[i]);
    i++;
}



var arr = [1,4,6,10,22,55,46,2,5,0];
arr.sort(function(a, b){return a-b});

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

