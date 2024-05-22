"use strict";
/* calcula las pulsaciones que debe tener una persona durante 10 segundos de ejercicio
*/

let pulsaciones=220;
let edad=0;
let division=10;
let calculator=0.0;

edad=parseInt(prompt("ingrese la edad del usuario"));

calculator=(pulsaciones-edad)/division;

document.write("las pulsaciones que el usuario deberia tener es ",calculator," pulsaciones cada 10 segudnso");