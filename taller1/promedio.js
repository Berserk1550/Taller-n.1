"use strict";

/*Todos los lunes, miércoles y viernes, una persona corre la misma ruta y cronometra los
tiempos obtenidos. Determinar el tiempo promedio que la persona tarda en recorrer la
ruta en una semana cualquiera.
*/

let lunes=0;
let miercoles=0;
let viernes=0;
let num=3;
let calculator=0.0;
let nombre=0

//ingreso de datos

nombre=prompt("Ingresa el nombre del usuario");
lunes=parseInt(prompt("Ingrese el tiempo en minutos del lunes"));
miercoles=parseInt(prompt("Ingrese el tiempo en minutos del miercoles"));
viernes=parseInt(prompt("Ingrese la cantidad en minutos del viernes"));

//calculo

calculator=(lunes+miercoles+viernes)/num;

document.write("Hola ",nombre," tu promedio de tiempo es ",calculator," minutos");
