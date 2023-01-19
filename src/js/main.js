$(document).ready(function(){
    var button = $('#mainButton');

    button.on('mouseenter', function(){
        button.addClass('animate__headShake')
    });

    button.on('mouseleave', function(){
        button.removeClass('animate__headShake')
    });
    
    
});