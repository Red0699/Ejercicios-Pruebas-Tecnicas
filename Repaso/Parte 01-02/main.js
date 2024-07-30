//alert('Hola! Soy Nicolas')

//Variables
let nombre = "Nicolas";
nombre = "Yimmer Nicolas";

//Constantes
const apellido = 'Campos'

//Otra variable
let altura = 175;

//Mostrar en consola
console.log(nombre);
console.log(altura);

//Concatenación
let concatenacion = nombre + " " + apellido;

//Seleccionar elementos de la página
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2> Mi nombre es: ${concatenacion}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

//Condiciones
if (altura >= 185) {
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
} else {
    datos.innerHTML += "<h1>Eres una persona baja</h1>";
}

//Bucles
for (let year = 2000; year <= 2023; year++) {
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`
}

//Arrays
let nombres = ["Nicolas", "Francisco", "Pepe"];

let divNombres = document.querySelector("#nombres");

//divNombres.innerHTML = nombres[0];

divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";

nombres.forEach(nombre => {
    divNombres.innerHTML += `<li>${nombre}</li>`
})

divNombres.innerHTML += "</ul>"

//Funciones
const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2> Mi nombre es: ${concatenacion}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

console.log(miInformacion("Nicolas Campos", 175));

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML = miInformacion("Nicolas Campos", 175);
}

imprimir();