"use strict"

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    old: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.old);
        console.log(this.modelo, this.maxima, this.old);
        console.log(this.modelo, this.maxima, this.old);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();
console.log(coche);