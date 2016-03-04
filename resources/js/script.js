/*-Sticky Nav*/
$(document).ready(function () {
    
    $( '.js--main_section').waypoint(function(direction) {
        if (direction == "down"){
          $('nav').addClass('sticky');
            
        }
        else {
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });

    
/*-Scroll-*/
$('.js--scroll-to-plan').click(function(){
 $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000)   
});
    
$('.js--scroll-to-start').click(function(){
    $('html,body').animate({scrollTop:$('.js--main_section').offset().top},1000)
    
});    
    
    /*-Animation-*/

});