/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 
*/

function contarPalabras(frases){
    
    //Definir una variable que acumule el total de palabras de cada frase
    let totalPalabras = 0;

    // Hacer un bucle para recorrer cada frase
    frases.forEach(fraseActual => {

        // Dividir frase actual en un array de palabras
        const palabras = fraseActual.split(" ");
        const numeroPalabras = palabras.length;

        //Sumar el total de palabras a la variable acumuladora
        totalPalabras += numeroPalabras;
    })

    

    //Devolver total de palabras entre todas las frases
    return totalPalabras;
}

console.log(
    "El total de palabras entre todas las frases es: "+
    contarPalabras([
        "Hola, soy Víctor Robles WEB",
        "Me gusta programar",
        "Y soy desarrollador web"
    ])
);