$(document).ready(function() {





    

$('.snip1577').hover(function(){
    $(this).toggleClass('active');
    
    $(".snip1577").css('background-color', 'transparent');
    $(".snip1577 img").css('opacity', '0');
    $(".active img").css('opacity', '1');

    var item = $(this).attr('data-item');

    $("*[data-item='"+item+"']").addClass('active');

    
}, function(){
    var item = $(this).attr('data-item');
    $(this).toggleClass('active');
    
    $(".snip1577 img").css('opacity', '1');
    $(".active img").css('opacity', '0');
    $("*[data-item='"+item+"']").removeClass('active');
});




});