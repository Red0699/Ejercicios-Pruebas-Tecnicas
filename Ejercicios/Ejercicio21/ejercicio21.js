/*
Advertencias:
- En español por fines didácticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
 
*/

function generarMatriz(numero){

    // Crear un array vacío
    let matriz = [];

    // Variable acumuladora de la cifra que voy a meter en la matriz
    let numeroActual = 1;

    //Bucle que genere las filas
        for(let i = 0; i < numero; i++){

            // Crear una nueva fila con un push
            matriz.push([]);

            // Bucle para generar cada numero de la matriz
            for(let j = 0; j < numero; j++){
                // Agregar numero a la fila actual
                matriz[i].push(numeroActual++);
            }
        }
        
    // devolver resultado
    return matriz;
}

console.log(generarMatriz(4));