$(function () {
        window.onload = function () {
            var fx = new Array(98, 90, 80, 67, 40);
            for (var i = 0; i < 5; i++) {
                drawworks(i + 1, fx[i]);
            }
            var colorhover = ["#5900B2", "#522A5C", "#5900B2", "#8C2300", "#D9A300"];
            var color = ["#DFC6E6", "#D657FF", "#9B5FFF", "#B4683A", "#B49B3D"];
            var classname = 'pubuliu';
            var arr = new Array("all", "js", "ui", "framework", "application");
            var tab = document.getElementById("tabs");
            var tab_a = tab.getElementsByTagName("a");
            var tab_content = tab.getElementsByTagName("div");
            show_tab_content(index(tab_a[0], tab_a));
            tab_a[0].href='/work';
            tab_a[0].style.borderTopColor = colorhover[0];
            for (var i = 1, l = tab_a.length; i < l; i++) {
                tab_a[i].style.borderTopColor = color[i];
                tab_a[i].href='/work/workType?type='+tab_a[i].text.substr(0,1);
                tab_a[i].mouseenter = function () {
                    show_tab_content(index(this, tab_a));
                }
            }
            function show_tab_content(i) {
                for (var j = 0, l = tab_content.length; j < l; j++) {
                    tab_a[j].style.borderBottom = "1px solid #000000";
                    tab_a[j].style.borderTopColor = color[j];
                    tab_content[j].style.display = "none";
                }
                tab_a[i].style.borderBottom = "0";
                tab_a[i].style.borderTopColor = colorhover[i];
                tab_content[i].style.display = "block";
                pubuliu(i);
            }

            //瀑布流函数
            function pubuliu() {
                var lis = $("." + classname).children("ul").children("li");
                var li_height = {C1: [], C2: [], C3: [], C4: []};
                var li_imgtotal = lis.children("canvas");
                var lisspan = $("." + classname).children("ul").children("li").children("ul");
                for (var i = 0; i < lis.length; i++) {

                    //lis.eq(i).css("border", "1px solid");
                    //canvas的高度和宽度
                    var liw = parseInt(170);
                    var lih = parseInt(150 + Math.random() * 50);
                    //li的高度和宽度
                    lis.eq(i).css("height", parseInt(lih + 123 + "px"));
                    li_imgtotal.eq(i).css("width", liw + "px");
                    li_imgtotal.eq(i).css("height", lih + "px");
                    li_imgtotal[i].id = "pubuliu" + i;
                    var img = new Image();
                    img.src = '/images/work/pubuliu/' + i + '.jpg';
                    draw2(li_imgtotal[i].id, img, liw, lih);
                    var col = i % 4;
                    switch (col) {
                        case 0:
                            lis.eq(i).css("left", "5px");
                            li_height.C1.push(parseInt(lis.eq(i).css("height")));
                            var row = Math.floor(i / 4);
                            if (!row) {
                                lis.eq(i).css("top", "0");
                            } else {
                                var top = 0;
                                for (var j = 0; j < row; j++) {
                                    top += li_height.C1[j];
                                    top += 10;
                                }
                                lis.eq(i).css("top", top + "px");
                            }
                            break;
                        case 1:
                            lis.eq(i).css("left", "190px");
                            li_height.C2.push(parseInt(lis.eq(i).css("height")));
                            var row = Math.floor(i / 4);
                            if (!row) {
                                lis.eq(i).css("top", "0");
                            } else {
                                var top = 0;
                                for (var j = 0; j < row; j++) {
                                    top += li_height.C2[j];
                                    top += 10;
                                }
                                lis.eq(i).css("top", top + "px");
                            }
                            break;
                        case 2:
                            lis.eq(i).css("left", "375px");
                            li_height.C3.push(parseInt(lis.eq(i).css("height")));
                            var row = Math.floor(i / 4);
                            if (!row) {
                                lis.eq(i).css("top", "0");
                            } else {
                                var top = 0;
                                for (var j = 0; j < row; j++) {
                                    top += li_height.C3[j];
                                    top += 10;
                                }
                                lis.eq(i).css("top", top + "px");
                            }
                            break;
                        case 3:
                            lis.eq(i).css("left", "560px");
                            li_height.C4.push(parseInt(lis.eq(i).css("height")));
                            var row = Math.floor(i / 4);
                            if (!row) {
                                lis.eq(i).css("top", "0");
                            } else {
                                var top = 0;
                                for (var j = 0; j < row; j++) {
                                    top += li_height.C4[j];
                                    top += 10;
                                }
                                lis.eq(i).css("top", top + "px");
                            }
                            break;
                    }
                    //文字部分的高度和宽度
                    lisspan[i].style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
                }
            }
        }
    });

    function draw2(id, img, w, h) {
        var canvas = document.getElementById(id).getContext('2d');
        img.onload = function () {
            canvas.drawImage(img, 0, 0, w, h);
        }
    }
    function index(current, obj) {
        for (var i = 0, l = obj.length; i < l; i++) {
            if (obj[i] == current)
                return i;
        }
    }
    function drawworks(i, x) {
        var idc = "c" + i;
        var idr = "r" + i;
        var canvasc = document.getElementById(idc);
        canvasc.width = 30;
        canvasc.height = 18;
        var contextc = canvasc.getContext('2d');
        var canvasr = document.getElementById(idr);
        canvasr.width = 98;
        canvasr.height = 16;
        canvasr.style.border = "1px solid #4B0082";
        canvasr.style.marginBottom = "10px";
        var contextr = canvasr.getContext('2d');
        //绘制圆形
        contextc.beginPath();
        contextc.fillStyle = "#4B0082";
        contextc.arc(10, 10, 8, 0, Math.PI * 2, true);
        contextc.closePath();
        contextc.fill();
        //绘制序号
        contextc.font = "15px sans-serif";
        contextc.fillStyle = 'rgba(988,377,0,1)';
        contextc.fillText(i, 6.8, 14.5);
        contextc.fillStyle = "white";
        //绘制矩形条
        contextr.fillStyle = "#4B0082";
        contextr.fillRect(0, 0, x, 16);
    }