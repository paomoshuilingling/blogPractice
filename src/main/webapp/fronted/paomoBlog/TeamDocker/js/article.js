$(function() {
        window.onload = function() {
            //article.html的标签云
            var tags = document.getElementById("tags");
            var oa = tags.getElementsByTagName("a");
            var texttags = new Array("JavScript", "css", "flex", "webGL", "HTML", "Canvas", "ProtoType", "HTML5", "grid", "nodeJS", "CSS3", "jQuery", "Ajax", "ECharts");
            for (var i = 0, l = oa.length; i < l; i++) {
                oa[i].style.fontSize = (Math.random() + 0.8) + 'em';
                oa[i].style.fontWeight = (Math.random() + 1);
                oa[i].style.color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
                $(oa[i]).text(texttags[i]);
                $(oa[i]).mouseover(function() {
                    $(this).css("text-shadow", "2px 2px 2px darkmagenta");
                }).mouseout(function() {
                    $(this).css("text-shadow", "0 0 0 white");
                })
            }
        }
    });