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
});
