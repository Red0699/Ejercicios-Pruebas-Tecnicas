/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

function juegoDelAhorcado(palabraSecreta){
    // Crear variable palabra oculta con guiones bajos
    let palabraOculta = "_".repeat(palabraSecreta.length);

    // Variable con el numero de intentos
    let intentos = 5;

    // Bucle para pedir letras que se va a ejecutar
    // mientras que no se hayan adivinado todas las letras
    // y mientras aun queden intentos
    while(intentos > 0 && palabraOculta !== palabraSecreta){

        //Pedir una letra
        let letra = prompt("Adivina una letra");

        // Comprobar si la letra esta en la palabra para actualizar la variable palabraOculta
        if(palabraSecreta.includes(letra)){

            // actualizar la variable palabra oculta
            // y meter la letra en la posición correcta
            for(let i = 0; i < palabraSecreta.length; i++){
                if(letra === palabraSecreta[i]){

                    //Convertir la palabraOculta en un array
                    let palabraOcultaArray = Array.from(palabraOculta);
                    
                    // Seleccionar su indice y cambiar _ por la letra adivinada
                    palabraOcultaArray[i] = letra;

                    // Unir el array en un string de nuevo
                    // Actualizar la variable palabraOculta
                    palabraOculta = palabraOcultaArray.join("");
                }
            }
        }
        
        else {
            // Si no existe la letra en la palabra, entonces resto un intento
            intentos--;
        }
        // Mostrar el estado actual de la palabra oculta

        // Mostra cuantos intentos quedan
    }

    // Cuando salga del bucle
    // Si se han adivinado todas las letras, mostrar mensaje de victoria
    if(palabraOculta === palabraSecreta){
        console.log(`¡Enhorabuena, has ganado! La palabra secreta es: ${palabraSecreta}`)
    }else{
        console.log(`Lo siento, has perdido. La palabra secreta era ${palabraSecreta}`)
    }
}

const lanzarJuego = document.querySelector('#lanzarJuego').addEventListener("click", () => juegoDelAhorcado("victor"));