"use strict";
/*El dueño de una tienda compra un articulo a un precio determinado. Obtener el precio
en que lo debe vender para obtener una ganancia del 30%.
*/;

let producto=0;
let Precio=0;
let porcentaje=30;
let division=100;
let calculator=0.0;

// ingreso de datos

producto=prompt("Ingrese el nombre ");
Precio=parseInt(prompt("ingrese el precio de compra en pesos Colombianos"));

// Calculo

calculator=((Precio*porcentaje)/division)+Precio;
document.write("El precio de venta de ",producto," para ganar un 30% es ",calculator," pesos Colombianos");