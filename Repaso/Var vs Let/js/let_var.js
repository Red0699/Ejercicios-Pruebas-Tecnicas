'use strict'

// Pruebas con 'let'(bloque) y 'var'(global)

// Prueba con 'var'
var numero = 40; 
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Prueba con 'let'
var texto = "Curso JS cos7web.es"
console.log(texto); // valor JS

if(true){
    let texto = "Curso SQL cos7web.com";
    console.log(texto); // valor SQL
}

console.log(texto); // valor JS