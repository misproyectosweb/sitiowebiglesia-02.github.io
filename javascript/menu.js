/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    
    //Menu responsivo
    //Calculamos el ancho de la página
    var ancho = $(window).width(),
        enlaces = $('#menu'),
        botonMenu = $('#btnMenu'),
        icono = $('#btnMenu .icono');

    //Agregamos un condicional para comprobar si actualmente la página se encuentra en un tamaño menor
    //a 768px, se procede a ocultar los enlaces
    if(ancho < 768){
        enlaces.hide();
        icono.addClass('fa-bars');        
    }

    //Cuando el usuario pulse sobre el botón del menú (barras), se ejecuta una función y se despliega
    //mostrando sus opciones y el icono cambia a una 'X'. Cuando se pulsa sobre el botón 'X' se cambia
    //al icono de barras    
    botonMenu.on('click', function(){
       enlaces.slideToggle();
       icono.toggleClass('fa-bars');
       icono.toggleClass('fa-times');
    });

    //Accedemos al objeto de la ventana y ejecutamos la función cada vez que se detecta un cambio en el
    //tamaño
    $(window).on('resize', function(){
        
       //Pregunta por el tamaño del ancho de la ventana que está actualmente
       if($(this).width() > 768) {
           enlaces.show();
           icono.addClass('fa-times');
           icono.removeClass('fa-bars');
       }
       else {
           enlaces.hide();
           icono.addClass('fa-bars');
           icono.removeClass('fa-times');
       }
    });
});