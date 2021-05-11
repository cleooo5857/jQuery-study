$(function(){
    const $aside = $('aside'),
          $button = $aside.find('button')
    
    $button.click(function(){
        $aside.toggleClass('open');
        if($aside.hasClass('open')){
            $aside.stop().animate({left:'-70px'},300);
            $(this).find('img').attr('src','img/btn_open.png');
        }else{
            $aside.stop().animate({left:'-350px'},300);
            $(this).find('img').attr('src','img/btn_close.png');
        }

    })
});