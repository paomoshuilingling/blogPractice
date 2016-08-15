$(function() {
    for (var i = 1; i < 4; i++) {
        var img1 = new Image();
        img1.src = '/images/resume/home' + i + '.jpg';
        draw(i, img1);
    }
});

function draw(id, img) {
    var canvas = document.getElementById(id).getContext('2d');
    img.onload = function () {
        canvas.drawImage(img, 0, 0, 300, 180);
    }
}