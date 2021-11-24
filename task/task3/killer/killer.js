$(document).ready(function () {
    //检查或创建被淘汰玩家数组，
    if (sessionStorage.getItem("beKill") != null) {
        var beKill = sessionStorage.getItem("beKill").split(",");
    }
    else {
        var beKill = [];//被杀的，存进来；
    }
    if (sessionStorage.getItem("beVote") != null) {
        var beVote = sessionStorage.getItem("beVote").split(",");
    }
    else {
        var beVote = [];//被投的，存过来；
    }

    //获取杀手平民数量
    var killerNumber = parseInt(sessionStorage.getItem("killerNumber"));//杀手总人数
    var orlmNumber = parseInt(sessionStorage.getItem("orlmNumber"));//平民总人数

    //检测当前是杀人项还是投票项，并添加对应的样式
    var k = sessionStorage.getItem("kill");//杀人按钮进来的
    var v = sessionStorage.getItem("vote");//投票按钮进来的

    if (v != null) {
        $(".word-1").text("玩家投票");
        $("word-2").text("发言谈论结束，大家请投票。");
    }
    else if (k != null) {
        $(".word-1").text("杀手杀人");
        $(".word-2").text("杀手请睁眼，请选择要淘汰的对象。");
    }

    //获取本地储存的数组
    var shu = sessionStorage.getItem("shu").split(",");//总玩家人数及各玩家身份
    var person = JSON.parse(sessionStorage.getItem("person"));
    //根据人数创建格子
    for (var i = 0; i < shu.length; i++) {
        $(".top").append('<div class="box">' +
            '<div class="square">' +
            '<p class="word-4">' + shu[i] + '</p>' +
            '<p class="word-5">' + (i + 1) + '号</p>' + '</div>' +
            '<div class="hiding">' + '<img class="knife" src="../killer/picture/dao.png">' +
            '</div>' +
            '</div>')

        if (person[i].condition == "died") {
            $(".word-4").eq(i).css("background-color", "#83b09a");
            $(".square").eq(i).click(function () {//被淘汰玩家点击警告
                alert("该玩家已阵亡");
                window.location.href = "/task/task3/killer/killer.htmll";
            });
        }
    }
    //淘汰按钮隐藏
    $(".hiding").hide();
    //玩家淘汰，根据实时情况实现杀手杀人或众人投票
    for (var i = 0, Wjia = shu.length; i < Wjia; i++) {
        !function (i) {
            $(".square").eq(i).click(function () {
                if (k != null && shu[i] == "杀手") {
                    alert("要对自己下手了吗？");
                }
                else {
                    $(".hiding").hide();
                    $(".hiding").eq(i).toggle();
                }
            });
            $(".knife").eq(i).click(function () {
                person[i].condition = "died";
                if (k != null) {
                    person[i].beKill = 1;
                    beKill.push(i);
                    sessionStorage.setItem("beKill", beKill);
                    Number(i);
                }
                if (v != null) {
                    person[i].beVote = 1;
                    beVote.push(i);
                    sessionStorage.setItem("beVote", beVote);
                    Number(i);
                }
                sessionStorage.setItem("person", JSON.stringify(person));
                window.location.href = "/task/task4/log/log.html";
            })
        }(i);
    }

    //每淘汰一位玩家，进行，各类玩家总数的消减
    function Number(i) {
        if (shu[i] == "杀手") {
            killerNumber--;
            sessionStorage.setItem("killerNumber", killerNumber);//杀手玩家总数消减
        }
        else {
            orlmNumber--;
            sessionStorage.setItem("orlmNumber", orlmNumber);//平民玩家人数消减
        }
    }


});
















//关闭时弹窗询问是否关闭，确定则跳转并清空数据
function Close() {
    let c = confirm("关闭本轮游戏回到主页？")
    if (c == true) {
        sessionStorage.clear();
        window.location.href = "file:///G:/task/task2/home/task2.html";
    }
}