/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/3/8
 *  Time:  20:29
 */
$(function () {
    /* $('#hometitle').height($(window).height());
     $('#hometitle').width($(window).width());*/
    window.onload = function () {
        //home.html��githubͼ��
        var i = 0;
        var img = document.getElementsByName("github");
        for (i = 0; i < img.length; i++) {
            img[i].onclick = function () {
                this.target = "_blank";
                window.open("https://github.com/paomoshuilingling");
            }
        }
    }
});

