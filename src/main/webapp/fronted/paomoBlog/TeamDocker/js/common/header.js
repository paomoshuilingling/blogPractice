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
	var pic = ["../../design/background/b1.jpg", "../../design/background/b3.jpg", "../../design/background/b4.jpg", "../../design/background/b2.jpg"];
	var i=0;
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
});