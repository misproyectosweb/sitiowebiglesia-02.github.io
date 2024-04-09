/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<span class="flecha-previo"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="flecha-siguiente"><i class="fas fa-chevron-right"></i></span>' ,        
    }); 
});