/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

function simplificarRuta(ruta){

    // Crear variable pila para almacenar las partes de la ruta
    let pila = [];

    // Dividir la ruta en sus diferentes partes utilizando el separador /
    const partes = ruta.split('/');

    // Recorrer cada parte
    for(const parte of partes){

        // Si la partes es .. quito el ultimo elemento
        if(parte === '..'){
            pila.pop();
        }
        // Si la parte es diferente a "." a ".." o a una cadena vacía
        // entonces guardo esa en la pila
        else if (parte !== "." && parte !== ""){
            pila.push(parte);
        }
    }
    return '/' + pila.join("/");
}

console.log(simplificarRuta("/x/./y/../../z/"));    // Salida: /z
console.log(simplificarRuta("/../"));               // Salida: /
console.log(simplificarRuta("/home//pruebas/"));    // Salida: /home/pruebas