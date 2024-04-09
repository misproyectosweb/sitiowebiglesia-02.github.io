/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global Swal, fetch */

// Acedemos al elemento formulario 
const formulario = document.querySelector('#formulario');
   
// En esta variable almacenaremos todos los inputs del formulario
const entradas = document.querySelectorAll('#formulario input');

// Esta función permite mostrar un mensaje de alerta al usuario para hacer constar que se envió
// o no el correo
function mensaje() {
    
    // Accedemos a la información del formulario y la almacenamos en la variable
    const datos = new FormData(formulario);
                    
    if(datos !== "") {
        Swal.fire({
            icon: 'success',
            imageUrl: 'imagenes/LogoIglesiaColor.png',        
            imageAlt: 'logo de la iglesia',
            imageWidth: 300,
            imageHeight: 90,
            title: 'Estado del mensaje de correo',
            text: 'Su mensaje se envió correctamente'  
        });                        
    }
    else {
        Swal.fire({
            icon: 'error',
            imageUrl: 'imagenes/LogoIglesiaColor.png',        
            imageAlt: 'logo de la iglesia',
            imageWidth: 300,
            imageHeight: 90,
            title: 'Estado del mensaje de correo',
            text: 'Su mensaje no ha sido enviado'  
        });
    }            
}

// Función que realiza las validaciones
function validaciones() {

    // Un objeto llamado expresiones con sus propiedades y cada propiedad contiene una expresión regular
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,    // Solo permite letras y espacios, pueden llevar acentos
        telefono: /^\d{7,14}$/,              // Solo permite 7 a 14 numeros. No permite caracteres ni símbolos
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ // Formato para validar la dirección de un correo
    };

    // Los valores de las propiedades se inicializan en false con el fin de que al ser validados cambie
    // su valor en los inputs a true
    const campos = {
        nombre: false,
        telefono: false,
        correo: false
    };

    // Creamos una función reutilizable
    const validarCampo = (expresion, input, campo) => {

        // Si el valor en el input cumple con las especificaciones de la prueba de validación de la 
        // expresión, agregamos una forma dinámica para acceder al valor de cada campo para su respectiva
        // validación empleando los templateStrings
        if(expresion.test(input.value)){                   
            document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
            document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
            document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove('formulario_input_error-activo');
            campos[campo] = true; // Accedemos al objeto junto con el campo correspondiente y cambiamos su valor
        } else {
            document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
            document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
            document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add('formulario_input_error-activo');
            campos[campo] = false;
        }
    };

    // El código se va a ejecutar cuando el valor del campo name del input sea el correspondiente que se
    // va a comprobar o validar
    // Devuelve verdadero si la expresión regular se cumplió comprobando el valor ingresado en el input
    const validarFormulario = (e) => {
        switch (e.target.name) {        
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
            break;        
        }
    };

    // Comprobamos cuando el usuario pulsa el botón del mouse y cuando pulsa fuera del formulario
    // La función se ejecuta por cada uno de los inputs que tengamos en el formulario
    entradas.forEach((input) => {

        // Cuando el usuario presiona una tecla un evento es iniciado al soltar la tecla y de inmediato
        // se llama y se ejecuta otra función
        input.addEventListener('keyup', validarFormulario);    

        // Ejecuta la función cuando el usuario pulse fuera del formulario
        input.addEventListener('blur', validarFormulario);
    });

    // Cuando el usuario pulse sobre el botón "submit" se remueven los iconos de verificación y se limpian
    // los campos del formulario y se ejecuta las instrucciones para enviar los datos a la cuenta de correo
    // especificada   
    formulario.addEventListener('submit', (e) => {

        //Evita aplicar la función que tiene asignado por defecto el elemento
        e.preventDefault();
        
        // Se llama a la función que muestra el mensaje de alerta
        mensaje();
        
        // Con esta función se limpian los campos del formulario
        formulario.reset();
                                    
        // Accedemos a todos los iconos de chequeo y de error para eliminarlos 
        document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario_grupo-correcto');
        });                  
    });
}

// Llamada a la función para realizar la comprobación de los datos en los campos y luego enviar dicha
// información por correo
validaciones();