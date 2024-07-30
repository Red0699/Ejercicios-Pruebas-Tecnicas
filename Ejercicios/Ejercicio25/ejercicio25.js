/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 25:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 
Devuelve: 
[ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg']
 
*/

function renombrarArchivos(ficheros){

    // Recorriendo cada arcivo y devolviendo un array nuevo
    return ficheros.map((fichero, indice) => {

        // Crear nuevo array filtrado que contenga todos los archivos que coinciden con el actual
        let filtrados = ficheros.slice(0, indice).filter(ficheroFiltro => fichero === ficheroFiltro)

        // Si no hay repetidos devolvemos el archivo actual
        // Si hay repetidos agregamos numeracion
        let resultado = fichero;
        if(filtrados.length !== 0){
            let ficheroPartido = fichero.split('.');
            resultado = `${ficheroPartido[0]}(${filtrados.length}).${ficheroPartido[1]}`
        }

        return resultado
    })
}

console.log(renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]));