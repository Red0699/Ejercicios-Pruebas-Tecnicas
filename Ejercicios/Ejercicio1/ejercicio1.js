/*

Enunciado Ejercicio 1:

Dado un array de superhéroes de Marvel haz un programa que pueda
mostrar la información de un superhéroe.

Y añade una capacidad de buscar información de varios superhéroes a la vez.

Ejemplo:
mostrarInformacionSuperheroe('Iron Man');

Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los Vengadores

Ejemplo 2:
mostrarInformacionSuperheroe([array de nombres]);

Salida:
Muestra la información de todos los superhéroes

*/

// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};

const showInfoSuperHero = (name) => {

    //Comprobar si el heroe existe dentro del objeto
    if(name in infoSuperheroes){
        //Conseguir la info de ese heroe
        const info = infoSuperheroes[name];
        //Mostrar Info
        console.log(`##################### ${name} #####################`);
        console.log(`Nombre real: ${info.nombreReal}`);
        console.log(`Poderes: ${info.poderes.join(', ')}`);
        console.log(`Equipo: ${info.equipo}`);
        console.log(`###################################################`);
    }else{
        console.log(`###################################################`);
        console.log(`${name} no existe en los datos del objeto`);
        console.log(`###################################################`);
    }

}

const showInfoSuperHeroes = (names) => {
    //Recorrer todos los nombres
    names.forEach(name => {

        //Mostrar info de los heroes (usar función anterior);
        showInfoSuperHero(name);
    })

    //Mostrar info de los heroes (usar función anterior);
}

showInfoSuperHero("Batman");
showInfoSuperHeroes(["Iron Man", "Thor", "Spider-Man", "Joker"]);