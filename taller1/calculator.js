"use strict";
/*daba la cantidad de pesos, obten la equivalencia a dolares asumiendo que la unidad cambiaria es un dato desconocido
*/

let pesos=0;
let dolar=0;
let calculator=0.0;

pesos=parseInt(prompt("ingrese la cantidad de pesos"));
dolar=parseInt(prompt("ingrese la tasa de cambio actual"));

calculator=pesos/dolar;

alert ("la cantidad de "+pesos+" pesos es equivalente a "+calculator+" dolares");