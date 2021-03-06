<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>文章</title>
    <link rel="shortcut icon" href="../../design/common/favicon.ico">
    <link type="text/css" rel="stylesheet" href="../css/common.css">
    <link type="text/css" rel="stylesheet" href="../css/article.css">
</head>

<body>
    <div>
        <article id="header">
            <nav>
                <img class="circle1" id="me" src="../../design/me.jpg" />
                <img id="img" name="github" title="泡沫水灵灵的github，欢迎踩一踩、留言！" src="../../design/icon-github.png" />
                <a href="about.html">关于</a>
                <a href="works.html">作品</a>
                <a href="article.html">文章</a>
                <a href="resume.html">首页</a>
                <div style="clear:both;"></div>
            </nav>
        </article>
        <article id="article">
            <section>
                <article>
                    <aside>
                        <ul>
                            <li>3.11</li>
                            <li>CSS</li>
                        </ul>
                    </aside>
                    <header>
                        <h2>这里是文章标题</h2>
                        <span>+</span>
                        <h1>这里是副标题</h1>
                    </header>
                    <p>这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文。</p>
                    <footer>
                        <label>xiongyu 发表于 2016年3月11日</label>
                    </footer>
                </article>
                <article>
                    <aside>
                        <ul>
                            <li>3.21</li>
                            <li>HTML</li>
                        </ul>
                    </aside>
                    <header>
                        <h2>这里是文章标题</h2>
                        <h1>这里是副标题</h1>
                    </header>
                    <p>这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文。</p>
                    <footer>
                        <label>xiongyu 发表于 2016年3月21日</label>
                    </footer>
                </article>
                <article>
                    <aside>
                        <ul>
                            <li>4.21</li>
                            <li>HTML</li>
                        </ul>
                    </aside>
                    <header>
                        <h2>这里是文章标题</h2>
                        <h1>这里是副标题</h1>
                    </header>
                    <p>这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文,这里是正文。</p>
                    <footer>
                        <label>xiongyu 发表于 2016年4月21日</label>
                    </footer>
                </article>
                <footer id="page">
                    <a href="#"><span>第一页</span></a>
                    <a href="#"><span>上一页</span></a>
                    <a href="#"><span>1</span></a>
                    <a href="#"><span>2</span></a>
                    <a href="#"><span>3</span></a>
                    <a href="#"><span>4</span></a>
                    <a href="#"><span>……</span></a>
                    <a href="#"><span>下一页</span></a>
                    <a href="#"><span>最后页</span></a>
                </footer>
            </section>
            <aside id="aside">
                <span id="search">
                    <span class="search-icon"></span>
                <input class="su" type="text" placeholder="        Keywords" />
                <span><input class="go" type="submit" value="GO"/></span>
                </span>
                <ul class="href">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">其他文章</a></li>
                </ul>
                <div class="calendar">
                    <Script LANGUAGE="JavaScript">
                    var months = new Array("一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二");
                    var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
                    var days = new Array("日", "一", "二", "三", "四", "五", "六");
                    var classTemp;
                    var today = new GetToday();
                    var year = today.year;
                    var month = today.month;
                    var newCal;

                    function getDays(month, year) {
                        if (1 == month) return ((0 == year % 4) && (0 != (year % 100))) || (0 == year % 400) ? 29 : 28;
                        else return daysInMonth[month];
                    }

                    function GetToday() {
                        this.now = new Date();
                        this.year = this.now.getFullYear();
                        this.month = this.now.getMonth();
                        this.day = this.now.getDate();
                    }

                    function Calendar() {
                        newCal = new Date(year, month, 1);
                        today = new GetToday();
                        var day = -1;
                        var startDay = newCal.getDay();
                        var endDay = getDays(newCal.getMonth(), newCal.getFullYear());
                        var daily = 0;
                        if ((today.year == newCal.getFullYear()) && (today.month == newCal.getMonth())) {
                            day = today.day;
                        }
                        var caltable = document.all.caltable.tBodies.calendar;
                        var intDaysInMonth = getDays(newCal.getMonth(), newCal.getFullYear());

                        for (var intWeek = 0; intWeek < caltable.rows.length; intWeek++)
                            for (var intDay = 0; intDay < caltable.rows[intWeek].cells.length; intDay++) {
                                var cell = caltable.rows[intWeek].cells[intDay];
                                var montemp = (newCal.getMonth() + 1) < 10 ? ("0" + (newCal.getMonth() + 1)) : (newCal.getMonth() + 1);
                                if ((intDay == startDay) && (0 == daily)) {
                                    daily = 1;
                                }
                                var daytemp = daily < 10 ? ("0" + daily) : (daily);
                                var d = "<" + newCal.getFullYear() + "-" + montemp + "-" + daytemp + ">";
                                if (day == daily) cell.className = "DayNow";
                                else if (intDay == 6) cell.className = "DaySat";
                                else if (intDay == 0) cell.className = "DaySun";
                                else cell.className = "Day";
                                if ((daily > 0) && (daily <= intDaysInMonth)) {
                                    cell.innerText = daily;
                                    daily++;
                                } else {
                                    cell.className = "CalendarTD";
                                    cell.innerText = "";
                                }
                            }
                        document.all.year.value = year;
                        document.all.month.value = month + 1;
                    }

                    function subMonth() {
                        if ((month - 1) < 0) {
                            month = 11;
                            year = year - 1;
                        } else {
                            month = month - 1;
                        }
                        Calendar();
                    }

                    function addMonth() {
                        if ((month + 1) > 11) {
                            month = 0;
                            year = year + 1;
                        } else {
                            month = month + 1;
                        }
                        Calendar();
                    }

                    function setDate() {
                        if (document.all.month.value < 1 || document.all.month.value > 12) {
                            alert("月的有效范围在1-12之间!");
                            return;
                        }
                        year = Math.ceil(document.all.year.value);
                        month = Math.ceil(document.all.month.value - 1);
                        Calendar();
                    }
                    </Script>
                    <Script>
                    function buttonOver() {
                        var obj = window.event.srcElement;
                        obj.runtimeStyle.cssText = "background-color:darkmagenta";
                        // obj.className="Hover";
                    }

                    function buttonOut() {
                        var obj = window.event.srcElement;
                        window.setTimeout(function() {
                            obj.runtimeStyle.cssText = "";
                        }, 300);
                    }
                    </Script>
                    <table border="0" cellpadding="0" cellspacing="1" class="Calendar" id="caltable">
                        <thead>
                            <tr align="center" valign="middle">
                                <td colspan="7" class="Title">
                                    <a href="javaScript:subMonth();" title="上一月" Class="DayButton">3</a>
                                    <input name="year" type="text" size="4" maxlength="4" onKeyDown="if (event.keyCode==13)" onKeyUp="this.value=this.value.replace(/[^0-9]/g,'')" onpaste="this.value=this.value.replace(/[^0-9]/g,'')"> 年
                                    <input name="month" type="text" size="1" maxlength="2" onKeyDown="if (event.keyCode==13)" onKeyUp="this.value=this.value.replace(/[^0-9]/g,'')" onpaste="this.value=this.value.replace(/[^0-9]/g,'')"> 月 <a href="JavaScript:addMonth();" title="下一月" Class="DayButton">4</a>
                                </td>
                            </tr>
                            <tr align="center" valign="middle">
                                <Script LANGUAGE="JavaScript">
                                document.write("<TD class=DaySunTitle id=diary >" + days[0] + "</TD>");
                                for (var intLoop = 1; intLoop < days.length - 1; intLoop++)
                                    document.write("<TD class=DayTitle id=diary>" + days[intLoop] + "</TD>");
                                document.write("<TD class=DaySatTitle id=diary>" + days[intLoop] + "</TD>");
                                </Script>
                            </TR>
                        </thead>
                        <TBODY border=1 cellspacing="0" cellpadding="0" ID="calendar" ALIGN=CENTER ONCLICK="getDiary()">
                            <Script LANGUAGE="JavaScript">
                            for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
                                document.write("<TR style='cursor:hand'>");
                                for (var intDays = 0; intDays < days.length; intDays++) document.write("<TD class=CalendarTD onMouseover='buttonOver();' onMouseOut='buttonOut();'></TD>");
                                document.write("</TR>");
                            }
                            </Script>
                        </TBODY>
                    </TABLE>
                    <Script LANGUAGE="JavaScript">
                    Calendar();
                    </Script>
                </div>
                <div id="tags">
                    <label>Tags</label>
                    <ol class="tags">
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                    </ol>
                </div>
            </aside>
        </article>
        <footer id="footer">
            <p>
                <a href="resume.html">首页</a>
                <a href="article.html">文章</a>
                <a href="works.html">作品</a>
                <a href="about.html">关于</a>
            </p>
            <hr>
            <ul>
                <li id="stu">
                    <h4>网站推荐</h4>
                    <ul>
                        <li><a href="http://www.zhangxinxu.com/" target="_blank">张鑫旭-鑫空间-鑫生活</a></li>
                        <li><a href="http://www.cnblogs.com/TomXu/" target="_blank">汤姆大叔的博客</a></li>
                        <li><a href="http://www.ruanyifeng.com/home.html" target="_blank">阮一峰的个人网站</a></li>
                        <li><a href="http://stackoverflow.com/" target="_blank">Stack Overflow</a></li>
                        <li><a href="https://segmentfault.com/" target="_blank">segmentfault</a></li>
                        <li><a href="http://www.jikexueyuan.com/" target="_blank">极客学院</a></li>
                        <li><a href="http://blog.jobbole.com/" target="_blank">博客-伯乐在线</a></li>
                    </ul>
                </li>
                <li id="link">
                    <h4>友情链接</h4>
                    <ul>
                        <li><a href="http://blog.csdn.net/u010147288" target="_blank">泡沫水灵灵的博客</a></li>
                        <li><a href="http://weibo.com/u/2704130365/home?wvr=5&sudaref=security.weibo.com" target="_blank">泡沫水灵灵的微博</a></li>
                        <li><a href="http://lysongzi.com/" target="_blank">林友松のcoder</a></li>
                        <li><a href="http://www.codeceo.com/" target="_blank">码农网</a></li>
                        <li><a href="http://www.cnblogs.com/" target="_blank">博客园</a></li>
                        <li><a href="https://www.zhihu.com/" target="_blank">知乎</a></li>
                        <li><a href="http://www.2cto.com/" target="_blank">红黑联盟</a></li>
                        <li><a href="http://gold.xitu.io/#/" target="_blank">稀土掘金</a></li>
                    </ul>
                </li>
                <li id="study">
                    <h4>学习资料</h4>
                    <ul>
                        <li><a href="http://qun.jikexueyuan.com/web/topic/274" target="_blank">前端干货分享</a></li>
                        <li><a href="http://w3school.com.cn/" target="_blank">w3school在线教程</a></li>
                        <li><a href="http://www.apjs.net/" target="_blank">AnjularJS中文网</a></li>
                        <li><a href="http://nodejs.cn/" target="_blank">Node.js中文网</a></li>
                        <li><a href="http://efe.baidu.com/" target="_blank">百度EFE</a></li>
                        <li><a href="http://fis.baidu.com/" target="_blank">FIS3前端工程构建工具</a></li>
                    </ul>
                </li>
                <li id="stud">
                    <h4>书屋必备</h4>
                    <ul>
                        <li><a href="resume.html" target="_blank">JavaScript高级程序设计</a></li>
                        <li><a href="resume.html" target="_blank">Head First JavaScript</a></li>
                        <li><a href="resume.html" target="_blank">Head First HTML与CSS、XHTML</a></li>
                        <li><a href="resume.html" target="_blank">CSS权威指南</a></li>
                        <li><a href="resume.html" target="_blank">HTML5秘籍</a></li>
                        <li><a href="resume.html" target="_blank">HTTP权威指南</a></li>
                        <li><a href="resume.html" target="_blank">剑指offer</a></li>
                    </ul>
                </li>
                <li id="friendlink">
                    <h4>轻松天地</h4>
                    <ul>
                        <li><a href="http://bbs.jiyifa.cn/" target="_blank">记忆法论坛</a></li>
                        <li><a href="http://tuhaonet.com/" target="_blank">土豪网</a></li>
                        <li><a href="http://www.itmian4.com/" target="_blank">IT面试</a></li>
                        <li><a href="https://www.douban.com/people/143523117/" target="_blank">豆瓣douban</a></li>
                        <li><a href="http://www.bilibili.com/" target="_blank">哔哩哔哩弹幕视频网</a></li>
                    </ul>
                </li>
            </ul>
            <div>
                <p>版权信息</p>
                <img name="github" title="泡沫水灵灵的github，欢迎踩一踩、留言！" src="../../design/icon-github.png" />
            </div>
        </footer>
    </div>
    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/index.js"></script>
    <script type="text/javascript">
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
    </script>
</body>

</html>
