/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

function esPalindromoConFunciones(palabra){

    let invertido = palabra.split("").reverse().join("");

    return (invertido === palabra);
}

function esPalindromo(palabra){

    // Dividir la cadena en un array de letras
    let letras = [];
    for (let i = 0; i < palabra.length; i++){
        letras.push(palabra[i]);
    }

    // Invertir en array con un bucle
    let letrasInvertidas = [];
    for (let i = letras.length - 1; i >= 0; i--){
        letrasInvertidas.push(letras[i]);
    }

    // Unir todas las letras del array con un bucle y guardadndo resultado
    // en una variable
    let palabraInvertida = "";
    for(let i = 0; i < letrasInvertidas.length; i++){
        palabraInvertida += letrasInvertidas[i];
    }

    // Devolver resultado
    return (palabra === palabraInvertida);
}

console.log(esPalindromo("otto")); // Devuelve: true
console.log(esPalindromo("victor")); // Devuelve: false