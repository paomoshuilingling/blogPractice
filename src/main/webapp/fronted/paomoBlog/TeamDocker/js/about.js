$(function () {
        
        var pic = ["../../design/me.jpg", "../../design/me1.jpg"];
        var i = 0;

        function changepic() {
            if (i > pic.length - 1) {
                i = 0;
            }
            var c = $(".circle4");
            c[0].src = pic[i];
            i++;
            setTimeout(changepic, 4000);
        }
        changepic();
    })