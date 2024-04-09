/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Obtenemos el elemento que necesitamos en el HTML
let x = document.querySelectorAll('#mes'),
    i;

// Creamos el array que contiene todos los meses
let nombreMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Obtiene la fecha del sistema y lo tendremos como punto de referencia
let fechaActual = new Date();

// Nos devuelve un número entre 0 y 11 correspondiente a cada mes del año (0-Enero / 11-Diciembre)
let numeroMes = fechaActual.getMonth();

// Obtenemos el mes y año para colocarlos en el encabezado directamente
mesActual = nombreMeses[numeroMes];

// Se utiliza un bucle para iterar a traves de todos los elementos comunes y desplegar en todos el
// mes actual
for(let i=0; i < x.length; i++){
    x[i].innerHTML = mesActual;
}

