"use strict";
/*Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas
invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con
respecto a la cantidad total invertida
*/

let x1=0;
let x2=0;
let x3=0;
let c=0.0;
let c2=0.0;
let c3=0.0;
let c4=0.0;
let d=100;
let v=0;

//Ingreso de datos

x1=parseInt(prompt("ingrese el valor de la primera persona"));
x2=parseInt(prompt("ingrese el valor de la segunda persona"));
x3=parseInt(prompt("ingrese el valor de la tercera persona"));

//calculadora

v= c=(x1+x2+x3);

c2=(x1/v)*d;

c3=(x2/v)*d;

c4=(x3/v)*d;

//resultados

console.log("Total de capital" ,c,);

console.log("porcentaje del primero inversor",c2,"%");

console.log("Porcentaje del segundo inversor ",c3,"%");

console.log("Porcentaje del tercer inversor ",c4,"%");

