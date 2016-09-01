/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/3/8
 *  Time:  20:29
 */
$(function() {
    var img = $("img[name='github']");
    for (var i = 0; i < img.length; i++) {
        img[i].onclick = function() {
            this.target = "_blank";
            window.open("https://github.com/paomoshuilingling");
        }
    }
    var pic = ["/images/common/background/b1.jpg", "/images/common/background/b3.jpg", "/images/common/background/b4.jpg", "/images/common/background/b2.jpg"];
    var i = 0;
    changeback();

    function changeback() {
        if (i > pic.length - 1) {
            i = 0;
        }
        var c = $(".background");
        c[0].src = pic[i];
        i++;
        setTimeout(changeback, 6000);
    }
    var scrollFunc = function(e) {
            e = e || window.event;
            var wheel = e.wheelDelta || e.detail;
            var nav = $('#header').find('nav');
            if (wheel) { //判断浏览器IE，谷歌滑轮事件    
                console.log(wheel);
                if (wheel > 0) { //当滑轮向上滚动时
                    nav.removeClass('headerHide');
                    nav.addClass('headerAppear');
                }
                if (wheel < 0) { //当滑轮向下滚动时
                    nav.removeClass('headerAppear');
                    nav.addClass('headerHide');
                }
            }
        }
        //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;
});
