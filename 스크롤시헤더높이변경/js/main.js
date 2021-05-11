$(function(){
    
    const $window = $(window);
    const $headerheight  = $('#main-header').outerHeight();
    console.log($headerheight);

    $window.scroll(function(){
        console.log($window.scrollTop());
        if($(this).scrollTop() >= $headerheight){
            $('#main-header').css('height','5em');
        }else{
            $('#main-header').css('height','6em');  
        }
    });
})