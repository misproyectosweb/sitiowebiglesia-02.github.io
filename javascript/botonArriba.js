/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    //Accedemos primeramente al elemento botón y cuando pulsemos sobre ese botón se ejecutará una función
    $('.btnVolverArriba').click(function(){
        
        //La función permite utilizar el botón para regresar a la parte superior de la página
        $('body, html').animate({
            scrollTop: '0px'
        },300);        
    });
    
    //Cuando el usuario baje por la página ejecutará una función con un condicional que nos indicará que
    //si el usuario no ha bajado por la página el botón no aparecerá. De lo contrario, el botón aparece
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.btnVolverArriba').slideDown(200);
        }
        else
        {
            $('.btnVolverArriba').slideUp(200);
        }
    });
});

