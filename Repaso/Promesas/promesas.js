"use strict"

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();
console.log(coche);

// Promesas
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos";
        // Si saludo fuera false:
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});