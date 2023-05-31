웹디자인기능사 14번
```
.main .top {
    height: 400px;
    background-color: tomato;
    display: flex;
}

.top .slider {
    /* width: calc(100% - 230px); */
    flex: 1;
    background-color: aqua;
    height: 400px;
    position: relative;
    overflow: hidden;
}

.slider .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
}

.slide a {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 400px;
}

.slide a:nth-child(1) {
    left: 0;
}

.slide a:nth-child(2) {
    left: 100%;
}

.slide a:nth-child(3) {
    left: 200%;
}

.slide img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.top .banner {
    width: 230px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
}
```

```
    // 좌우 슬라이드
    setInterval(function(){
        $('.slide').animate({left : '-100%' }, function(){
            $('.slide a:first').appendTo('.slide')
            $('.slide').css('left', 0)
        })
    },2700)
    
```