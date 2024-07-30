class Coche {
    constructor(modelo, velocidad, old){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.old = old;
    }

    acelerar(){
        this.velocidad += 5;
    }

    decelerar(){
        this.velocidad -= 5;
    }

}

// Herencia
class Autobus extends Coche{
    constructor(modelo, velocidad, old){
        super(modelo, velocidad, old);
        this.longitud = 10;
    }

    getLongitud(){
        return "La longitud del bus es de: "+this.longitud;
    }
}

var bus1 = new Autobus('Pegasus', 150, 2018);
console.log(bus1.getLongitud());
document.write("<h2>Longitud del bus: "+bus1.longitud+"</h2>");


var coche1 = new Coche('Volkswagen', 200, 2010);
var coche2 = new Coche('Seat', 150, 2008);
var coche3 = new Coche('Mercedes', 220, 2015);
var coche4 = new Coche('Volvo', 200, 2020);

document.write("<h2>Velocidad: "+coche1.velocidad+"</h2>");
console.log(coche1);
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();

document.write("<h2>Velocidad: "+coche1.velocidad+"</h2>");
document.write("<h2>Modelo: "+bus1.modelo+"</h2>");

console.log(coche2);
console.log(coche3);
console.log(coche4);
console.log(coche1);