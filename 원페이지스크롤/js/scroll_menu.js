$(function(){
    var $menu = $('#top_menu ul li'),
    $contents = $('#contents > div');
    var back_top = $('.go_top');

    $menu.click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        var section = $contents.eq(idx);
        //offset().top 최상단에서 떨어져있는 top값
        var sectionDistance = section.offset().top;
        console.log(sectionDistance);
        //클릭시 스크롤양을(scrollTop) 값을 가져온다(sectionDistance) 
        $('html,body').stop().animate({scrollTop:sectionDistance})
    });
    $(window).scroll(function(scroll){
        var scrollvalue = $(document).scrollTop();
        console.log(scrollvalue);
        $contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on'); 
            }
        });
        if($(this).scrollTop() > 800){
            back_top.fadeIn(200);
        }else{
            back_top.fadeOut(200);
        }
    });
     back_top.click(function(e){
         e.preventDefault();
         $('html,body').stop().animate({scrollTop:0},500);
     })

});


