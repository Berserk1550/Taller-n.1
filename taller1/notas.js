"use strict";

/*Un alumno desea saber cual será su promedio general en las tres materias mas difíciles
que cursa y cual será el promedio que obtendrá en cada una de ellas. Estas materias se
evalúan como se muestra a continuación
*/

//variables 1

var examen=0;
var x=90;
var tarea1=0;
var tarea2=0;
var tarea3=0;
var x1=10;
var d=100;
var total=3;
var c=0;

//ingreso de datos 1


examen=parseFloat(prompt("ingrese la nota del examen de Matematicas"));
tarea1=parseFloat(prompt("ingrese la nota de la primera tarea"));
tarea2=parseFloat(prompt("ingrese la nota de la segunda tarea"));
tarea3=parseFloat(prompt("ingrese la nota de la tercer tarea"));

//calcular 1

c=((examen*x)/d)+((((tarea1+tarea2+tarea3)/total)*x1)/d);

console.log("la nota de matematicas es",c,);

//variables 2

var examen2=0;
var x2=80;
var tarea4=0;
var tarea5=0;
var x3=20;
var total2=2;
var r=0;

//ingreso de datos 2

examen2=parseFloat(prompt("ingrese la nota del examen de Fisica"));
tarea4=parseFloat(prompt("ingrese la nota de la primera tarea"));
tarea5=parseFloat(prompt("ingrese la nota de la segunda tarea"));

// calcular 2

r=c=((examen2*x2)/d)+((((tarea4+tarea5)/total2)*x3)/d);

console.log("la nota de fisica es ",r,);

//variable 3

var examen3=0;
var b=85;
var t1=0;
var t2=0;
var t3=0;
var b2=15;
var total3=3;
var o=0;

//ingreso de datos 3

examen3=parseFloat(prompt("ingrese la nota del examen de Quimica"));
t1=parseFloat(prompt("ingrese la nota de la primera tarea"));
t2=parseFloat(prompt("ingrese la nota de la segunda tarea"));
t3=parseFloat(prompt("ingrese la nota de la tercera tarea"));

//calcular 3

o=c=((examen3*b)/d)+((((t1+t2+t3)/total3)*b2)/d);

console.log("la nota de Quimica es ",o,);




