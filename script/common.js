$(function(){
    // 서브메뉴
    $('.gnb > li').hover(function(){
        $(this).find('ul').stop().slideDown()
    }, function(){
        $(this).find('ul').stop().slideUp()
    })

    // 좌우 슬라이드
    setInterval(function(){
        $('.slide').animate({left : '-100%' }, function(){
            $('.slide a:first').appendTo('.slide')
            $('.slide').css('left', 0)
        })
    },2700)
})