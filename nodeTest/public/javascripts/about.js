$(function() {

    var pic = ["/images/common/me.jpg", "/images/about/me1.jpg"];
    var i = 0;
    var c = $(".circle4");
    function changepic() {
        if (i > pic.length - 1) {
            i = 0;
        }
        
        c[0].src = pic[i];
        i++;
        setTimeout(changepic, 4000);
    }
    changepic();
    c.on('click',function(){
        window.open="www.baidu.com";
    })

})
