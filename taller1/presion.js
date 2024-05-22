"use strict";
//La presión, el volumen y la temperatura de una masa de aire se relacionan por la formula

let presion=0;
let volumen=0;
let temperatura=0;
let num1=0.31;
let num2=460;
let calculator=0.0;

presion=parseFloat(prompt("ingrese la presion"));
volumen=parseFloat(prompt("ingrese el volumen"));
temperatura=parseFloat(prompt("ingrese la temperatura"));

calculator=(presion*volumen)/(num1*(temperatura+num2));

console.log("la masa del gas es ",calculator," kilogramos");

