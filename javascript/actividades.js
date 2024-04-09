/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Tomamos todas las imágenes de la galería
const imagenes = document.querySelectorAll('.img');

// Seleccionamos el elemento que contiene la clase especificada
const contenedorImagen = document.querySelector('.contenedor-img');

// Se captura la imagen elegida
const mostrarImg = document.querySelector('.img-mostrar');

// Se captura el texto que acompaña debajo a la imagen
const textoImagen = document.querySelector('.texto');

// Agregar la funcionalidad al botón de cerrar
const botonCerrar = document.querySelector('.btn');

// ********************************************************************************************************************

// Cuando se han capturado utilizamos un bucle para recorrerlas
imagenes.forEach(imagen => {
    // Cuando se eliga a cada una de las imagenes por medio del evento click, se ejecuta una función    
    imagen.addEventListener('click', () => {
                
        //Llamamos a la función
        agregarImagen(imagen.getAttribute('src'),imagen.getAttribute('alt'));
        
        // Obtenemos el nombre del archivo de imagen por medio del atributo 'src'
        // console.log(imagen.getAttribute('src'));
        // console.log(imagen.getAttribute('alt'));
    });
});

// Creamos una función para capturar los atributos 'src' y 'alt' de las imagenes que componen la galería LightBox
// y poder así agrega
const agregarImagen = (srcImg, altImg) => {
    // Con esta instrucción se logra que el contenedor del ligthbox aparezca accediendo a su lista de clases
    // utilizando la clase toggle
    contenedorImagen.classList.toggle('moverContenedor');
    
    // Mostrar la imagen de la galería con una transition de entrada de adentro hacia afuera
    mostrarImg.classList.toggle('mostrar-img');
    
    // Para mostrar la imagen elegida
    mostrarImg.src = srcImg;
    
    // Para mostrar el texto de la imagen elegida
    textoImagen.innerHTML = altImg;
};

// Se crea esta función para cerrar el contenedor de las imagenes de la galería pulsando en cualquier
// parte del contenedor que no sea en la imagen
//contenedorImagen.addEventListener('click', () => {
//    contenedorImagen.classList.toggle('moverContenedor');    
//    mostrarImg.classList.toggle('mostrar-img');
//});

// Se crea esta función para cerrar el contenedor de las imagenes de la galería pulsando sobre el botón
// ubicado en la esquina suerior derecha del contenedor
botonCerrar.addEventListener('click', () => {
    contenedorImagen.classList.toggle('moverContenedor');    
    mostrarImg.classList.toggle('mostrar-img');
});

