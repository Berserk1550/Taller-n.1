"use strict";
/*En un hospital existen tres áreas: Ginecología, Pediatría, Traumatologia. El presupuesto
anual del hospital se reparte conforme a la sig. tabla
*/

let presupuesto=0;
let Ginecología=40;
let Pediatría=30;
let Traumatologia=30;
let division=100;
let calculator=0.0;

//Ingreso de datos

presupuesto=parseInt(prompt("Ingrese el presupuesto anual en pesos Colombianos"));

//Resultados 

calculator=(presupuesto*Ginecología)/division;
document.write ("El presupuesto anual de Ginecologia es ",calculator," pesos Colombianos");

document.write("<br>");

calculator=(presupuesto*Pediatría)/division;
document.write("<brEl presupuesto anual de Pediatria es ",calculator,(" pesos Colombianos"));

document.write("<br>");

calculator=(presupuesto*Traumatologia)/division;
document.write("<br>El presupuesto anual de Traumatologia es ",calculator," pesos Colombianos");

document.write("<br>");

document.write("<br>sumando todos los resultados da un total de ",presupuesto," pesos Colombianos");