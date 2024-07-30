/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);

function ordenarPorApellidos(personas) {

    // Crear una variable con un nuevo array para apellidos
    const apellidos = personas.map(persona => persona.split(" ")[1]);

    // Ordenar los apellidos
    apellidos.sort();

    //Crear un array con los nombres y apellidos ya ordenados
    const personasOrdenadas = apellidos.map(apellido => {

        //Encontrar el nombre y apellido original correspondiente al apellido ordenado
        const nombreOriginal = personas.find(nombreCompleto => {
            return nombreCompleto.split(" ")[1] === apellido

        })

        return nombreOriginal;
    })
    return personas;

}