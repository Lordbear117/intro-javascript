// Convierte de F a C y de C a F.

    function convertirTemperaturas(conversion, temperatura){

        let nuevaTemperatura ="";
        // De C a F
        if (conversion == 1){
            nuevaTemperatura = ((temperatura * 1.8) + 32) + " Fahrenheit";
        }
        // De F a C
        else if (conversion == 2){
            nuevaTemperatura = ((temperatura - 32) / 1.8) + " Celsius";
        }

        return alert (nuevaTemperatura);
    }
    
    const conversion = Number(prompt('Ingresa "1" para convertir de Celsius a Faharenheit 0 \n "2" para convertir de Faharenheit a Celsius: '));
    const temperatura = Number(prompt('Ingresa una temperatura: '));

    convertirTemperaturas (conversion, temperatura);


