// Metodos de arreglos

//Concatenar los siguientes dos arrelgos
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

var comingSoon = ['panter', 'dragon','turtle']

var allAnimals = animals.concat(comingSoon);

for (let i = 0; i < allAnimals.length; i++){
    console.log(allAnimals[i]);
}

//---------------------------------------------------------------------------------------
// Acomodar el siguiente arreglo de menor a mayor

var arr = [4,6,1,0,8,2,45,11,5,33,50,101];

arr.sort(function(a, b) {return a-b});

arr.reverse();

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//---------------------------------------------------------------------------------------
// Agregar el animal cow

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

var comingSoon = ['panter', 'dragon','turtle']

var allAnimals = animals.concat(comingSoon);

allAnimals.push('cow');

for (let i = 0; i < allAnimals.length; i++){
    console.log(allAnimals[i]);
}

//---------------------------------------------------------------------------------------
// Se retira el elemento eagle de arreglo animals

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

animals.shift();

animals.join();

//---------------------------------------------------------------------------------------
// Econtrar l index de parrot

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

animals.indexOf('parrot');
