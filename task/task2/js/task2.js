$(document).ready(function () {
    // 获取DOM节点
    var box = document.getElementById("box");
    var type = document.getElementById("tYpe");
    var top = document.getElementById("pTop");
    var center = document.getElementById("pCenter");
    var bottom = document.getElementById("pBottom");
    var wtop = document.getElementById("wTop");
    var wcenter = document.getElementById("wCenter");
    var wbottom = document.getElementById("wBottom");

    // 跳转页面，开始游戏
    box.onclick = function () {
        if (top.innerHTML != "警察版") {
            window.location.href = "../task2/parameter.html";
        };
    };
    $(".main-top").click(function () {
        window.location.href = "../task2/parameter.html";
    });

    // 游戏分类切换 
    $(".triangle-l").hide();
    $(".triangle-r").click(function () {
        type.innerHTML = "杀人游戏";
        top.innerHTML = "警察版";
        center.innerHTML = "3.0版";
        bottom.innerHTML = "精英版";
        wtop.innerHTML = "有999个用户正在玩此款游戏";
        wcenter.innerHTML = "有1111个用户正在玩此款游戏";
        wbottom.innerHTML = "有666个用户正在玩此款游戏";
        $(".triangle-r").hide();
        $(".triangle-l").show();
        $(".circle-l").css("background-color", "#d2d2d2");
        $(".circle-r").css("background-color", "#69d2eb");
    });

    $(".circle-r").click(function () {
        type.innerHTML = "杀人游戏";
        top.innerHTML = "警察版";
        center.innerHTML = "3.0版";
        bottom.innerHTML = "精英版";
        wtop.innerHTML = "有999个用户正在玩此款游戏";
        wcenter.innerHTML = "有1111个用户正在玩此款游戏";
        wbottom.innerHTML = "有666个用户正在玩此款游戏";
        $(".triangle-r").hide();
        $(".triangle-l").show();
        $(".circle-l").css("background-color", "#d2d2d2");
        $(".circle-r").css("background-color", "#69d2eb");
    });

    $(".triangle-l").click(function () {
        type.innerHTML = "捉鬼游戏";
        top.innerHTML = "杀手版";
        center.innerHTML = "猜词版";
        bottom.innerHTML = "白痴版";
        wtop.innerHTML = "有1133个用户正在玩此款游戏";
        wcenter.innerHTML = "有1314个用户正在玩此款游戏";
        wbottom.innerHTML = "有1520个用户正在玩此款游戏";
        $(".triangle-l").hide();
        $(".triangle-r").show();
        $(".circle-r").css("background-color", "#d2d2d2");
        $(".circle-l").css("background-color", "#69d2eb");

    });
    $(".circle-l").click(function () {
        type.innerHTML = "捉鬼游戏";
        top.innerHTML = "杀手版";
        center.innerHTML = "猜词版";
        bottom.innerHTML = "白痴版";
        wtop.innerHTML = "有1133个用户正在玩此款游戏";
        wcenter.innerHTML = "有1314个用户正在玩此款游戏";
        wbottom.innerHTML = "有1520个用户正在玩此款游戏";
        $(".triangle-l").hide();
        $(".triangle-r").show();
        $(".circle-r").css("background-color", "#d2d2d2");
        $(".circle-l").css("background-color", "#69d2eb");
    });
});
