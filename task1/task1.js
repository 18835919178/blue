var list = document.getElementsByClassName("grid");  //获取所有类名 "grid" 的DOM节点
var time;

function check(one, two, three) {
    return one != two && two != three && one != three;
}

function colors() {
    var rgb = new Array();
    for (var i = 0; i < 3;) {                              //生成一个随机颜色，随机三次
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        if (!(r == 255 && g == 165 && b == 0)) {           //如果生成颜色不是橙色，则给数组添加值，并自增
            rgb[i] = "(" + r + "," + g + "," + b + ")";
            i++;
        }
    } 
    if (check(rgb[0], rgb[1], rgb[2])) {                   //如果没有相同的颜色，结果为true，
        return rgb;                                        //就返回值
    }else {                                                 //如果有相同的颜色，就重复函数
        return colors();
    }
}

function Num() {   // 随机数的选取
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];     // 所有数值的容器
    var result = [];  //创建新的空白容器，用来存放随机数
    for (var i = 0; i < 3; i++) { //使获取的三位随机数进行筛去选定，并将获取的数从总容器中删除
        var ran = Math.floor(Math.random() * (arr.length - i));
        result.push(arr[ran]);
        arr[ran] = arr[arr.length - i - 1];
    };
    return result;
}

function start() {
    clearInterval(time);                                 //停止计时事件
    time = setInterval(function () {
        for (var i = 0; i < list.length; i++) {          //给九宫格重置颜色
            list[i].style.backgroundColor = "#ffa500";
        };
        var Nums = Num();
        var color = colors();
        list[Nums[0]].style.backgroundColor = "rgb" + color[0];  //给三个格子赋颜色
        list[Nums[1]].style.backgroundColor = "rgb" + color[1];
        list[Nums[2]].style.backgroundColor = "rgb" + color[2];
    }, 1000);
    document.getElementById("start").disabled = true;
}

function stop() {
    clearInterval(time);                                  //停止计时事件
    for (var i = 0; i < list.length; i++) {               //给九宫格重置颜色
        list[i].style.backgroundColor = "#ffa500";
    }
    document.getElementById("start").disabled = false;
}













































