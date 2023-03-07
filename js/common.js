(function ($) {
    'use strict';

    $(function () {
        // 헤더
        var $header = $('#header'),
            $window = $(window);

        $header.on('mouseover focusin', function () {
            $header.addClass('active');
        })
        $header.on('mouseout focusout', function () {
            $header.removeClass('active');
        })

        // 헤더 스크롤시 내려옴
        var lastScrollTop = 0,
            delta = 15;
        $window.scroll(function (event) {
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta)
                return;
            if ((st > lastScrollTop) && (lastScrollTop > 0)) {
                $header.addClass('on');
            } else {
                $header.removeClass('on');
            }
            lastScrollTop = st;
        });

        // 슬라이드
        var $slide = $('.slide_wrap'),
            $slideItem = $slide.find('.slide_item'),
            current = 0;

        $slideItem.each(function(index) {
            var slideIndex = index + 1 ;
            console.log(slideIndex);
            $slide.css({"width": `${100 * slideIndex}vw`, "transform" : `-${100 * slideIndex}vw`});
        })

        // 메뉴 버튼 클릭시 변경
        var $menuButton = $('.floating button'),
            $menuList = $('.floating li');

        $menuButton.on('click', function(){
            var $menuButtonParent = $(this).parents('li');
            $menuList.not($menuButtonParent).removeClass('active');
            $menuButtonParent.addClass('active');
        })
    });

})(window.jQuery);