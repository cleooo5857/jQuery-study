$(function(){
    const $button = $('#buttons2 button');
    const $buttons = document.getElementsByTagName('button');

    // for(let i = 0; i<=$buttons; i++){
    //     $buttons[i].style.top = i*40 - 40 + 'px';
    // }
     
    $button.each(function(idx){
        var top =  idx*40 - 40 + 'px';
        $(this).css({top: top})
    })
    .mouseover(function(){
        $(this).stop().animate({'background-color':'#eeff00','color':'#000'},300);
        $(this).find('img:first-child').stop().animate({opacity:0},300)
        $(this).find('img:nth-child(2)').stop().animate({opacity:1},300)
    }
    ).mouseout(function(){
        $(this).stop().animate({'background-color':'#fff','color':'#000'},300);
        $(this).find('img:first-child').stop().animate({opacity:1},300)
        $(this).find('img:nth-child(2)').stop().animate({opacity:0},300)
    })
})