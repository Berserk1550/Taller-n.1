"use strict";
//Calcular el nuevo salario de un obrero si obtuvo un incremento del 25% sobre su salario anterior

let sueldo=0;
let porcentaje=25;
let division=100;
let calculator=0.0;

//ingreso de sueldo

sueldo=parseInt(prompt("ingrese su sueldo"));

//operacion
calculator=((sueldo*porcentaje)/division)+sueldo;

//resultado
alert ("felicidades su nuevo sueldo es "+calculator+ " pesos");

