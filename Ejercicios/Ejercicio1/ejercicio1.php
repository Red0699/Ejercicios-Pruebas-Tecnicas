<?php
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

$infoSuperheroes = [
    'Iron Man' => [
        'nombreReal' => 'Tony Stark',
        'poderes' => ['Tecnologia avanzada', 'Movilidad aérea'],
        'equipo' => 'Los vengadores'
    ],
    'Capitán América' => [
        'nombreReal' => 'Steve Rogers',
        'poderes' => ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        'equipo' => 'Los vengadores'
    ],
    'Thor' => [
        'nombreReal' => 'Thor Odinson',
        'poderes' => ['Mjolnir', 'Viento y trueno'],
        'equipo' => 'Los vengadores'
    ],
    'Spider-Man' => [
        'nombreReal' => 'Peter Parker',
        'poderes' => ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        'equipo' => 'Los vengadores'
    ],
    'Hulk' => [
        'nombreReal' => 'Bruce Banner',
        'poderes' => ['Fuerza sobrehumana', 'Invulnerabilidad'],
        'equipo' => 'Los vengadores'
    ]
];

function showInfoHero($name)
{
    global $infoSuperheroes;
    //Comprobar si el heroe existe dentro del objeto
    if(array_key_exists($name, $infoSuperheroes))
    {
        //Conseguir la info de ese heroe
        $info = $infoSuperheroes[$name];

        //Mostrar Info
        echo '#########################################<br>';
        echo "Nombre real: {$info['nombreReal']}<br>";
        echo "Poderes: {$info['poderes']}<br>";
        echo "Equipo: {$info['equipo']}<br>";
        echo '#########################################<br>';
    }
}

showInfoHero('Batman');

?>

Hola mundo