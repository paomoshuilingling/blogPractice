$(function () {
        window.onload = function () {
            for (i = 1; i < 4; i++) {
                var img1 = new Image();
                img1.src = '../../design/home' + i + '.jpg';
                draw(i, img1);
            }
            changeback();
        }
        var pic = ["../../design/background/b1.jpg", "../../design/background/b3.jpg", "../../design/background/b4.jpg", "../../design/background/b2.jpg"];
        var i = 0;

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

    function draw(id, img) {
        var canvas = document.getElementById(id).getContext('2d');
        img.onload = function () {
            canvas.drawImage(img, 0, 0, 300, 180);
        }
    }