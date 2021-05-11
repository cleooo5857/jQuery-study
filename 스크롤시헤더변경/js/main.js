$(function () {
    const $window = $(window),
          $header = $('.page-header'),
          $headerClone = $header.contents().clone(),
          $headerCloneContainer = $('<div class="page-header-clone"></div>'),
          $threshold = $header.offset().top + $header .outerHeight();

        console.log($threshold);
        console.log($headerCloneContainer);
        //append A요소의 내용의 뒤에 B를 추가
        $headerCloneContainer.append($headerClone);
        console.log($headerCloneContainer);
        //appendTo B요소의 내용의 뒤에 A를 추가
        $headerCloneContainer.appendTo('body')
     
        $window.scroll($.throttle(1000/15,function(){
            var top = $(document).scrollTop()
            var scrollTop = Math.floor(top);
            console.log(scrollTop);
        if($(this).scrollTop() >= $threshold){
            $headerCloneContainer.addClass('visible');
        }else{
            $headerCloneContainer.removeClass('visible');      
        }
    }))
});
