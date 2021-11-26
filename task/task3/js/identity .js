$(document).ready(function () {  //待页面加载完成后，jQ框架在进行渲染
    // 获取本地储存的数组 
    var a = sessionStorage.getItem("shu");
    var shu = a.split(",");
    var orlm = sessionStorage.getItem("orlm");
    var killer = sessionStorage.getItem("killer");
    console.log('shuzu', shu); //控制台
    $("#role").hide();//网页加载好后，先将角色隐藏
    //设置查看身份的点击监听
    //初始值
    var i = 0;
    var t = 0;
    var f = 1;
    //初始翻页页面的展示的内容
    $(".circle").text(t + 1);
    $(".word-4").text("查看" + f + "号身份");
    f++;

    $("#bton").click(function () {  //点击函数，对其点击来实现下面的一系列任务
        if (i < shu.length * 2 - 2) { //判断，来进行翻页所展现正确的的内容
            if (i == 0 || i % 2 == 0) { //嵌套的判定              
                //当上面的两种判定都符合要求，以下任务运行，并循环至失去要求目的
                $(".img3").hide();
                $("#role").show();
                $(".word-1").text("角色:" + shu[t]);
                $(".circle").text(t + 1);
                $(".word-4").text("隐藏并传递给" + f + "号");
                if (shu[t] == "杀手") {
                    $(".word-2").text("词组:" + killer);
                }
                else if (shu[t] == "平民") {
                    $(".word-2").text("词组:" + orlm);
                }
                t++;
                i++;
                console.log(t, i, f);
            }
            //符合主要求但，第一个嵌套要求否定，执行下面任务，并循环
            else {
                $("#role").hide();
                $(".img3").show();
                $(".circle").text(t + 1);
                $(".word-4").text("隐藏并传递给" + f + "号");
                i++;
                f++;
                console.log(t, i, f);
            }
        }
        //为没有符合上面的主要求，进行下面的判定
        else if (i == (t + 1) * 2 - 2) {  //符合判定，执行下面的任务
            //跳转法官页面前最后一张身份牌；因最后一张容易判定错误；直接给它单独判定。
            $(".word-1").text("角色:" + shu[t]);
            if (shu[t] == "杀手") {
                $(".word-2").text("词组:" + killer);
            }
            else if (shu[t] == "平民") {
                $(".word-2").text("词组:" + orlm);
            }
            //跳转法官页面
            $(".img3").hide();
            $("#role").show();
            $(".circle").text(t + 1);
            $(".word-4").text("法官页面");
            i++;
        }
        //上面的判定都失去意义，下面命令生效，跳转页面
        else {
            location.href = "judge.html";
        }
    });
});

//后退时弹窗询问是否后退，确定则跳转并清空数据
function BackOff() {
    let b = confirm("退回到上一页？");
    if (b == true) {
        sessionStorage.clear();
        window.location.href = "../task2/parameter.html";
    }
}
//关闭时弹窗询问是否关闭，确定则跳转并清空数据
function Close() {
    let c = confirm("关闭本轮游戏回到主页？")
    if (c == true) {
        sessionStorage.clear();
        window.location.href = "../task2/task2.html";
    }
}