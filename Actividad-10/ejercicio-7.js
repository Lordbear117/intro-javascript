// ### Problema 7

// **Objetos-Recursividad:**

// Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad `id`

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
              //     console.log(key + ' key');
            //  console.log(value);
            //  console.log('............');
              for(const [key, val] of Object.entries(value)){
            //     console.log(key + ' key');
            //  console.log(val);
            //  console.log('............');
                  if (key === "id") {
                      cont++
                  } else {
                      if (val.id){
                        //console.log(val.id);
                          cont++
                      } else {
                          for (const idFinal of val){
                              let ids = Object.values(idFinal);
                                //console.log(ids);
                              for (const nombre of ids){
                                //console.log(nombre);
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