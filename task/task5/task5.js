$(document).ready(function () {
    $("#login").click(function (e) {
        var name = $("#input-yonghu").val();//上方输入框：账号
        var pwd = $("#input-mima").val();//下方输入框：密码
        var text = $(".text");
        console.log(name);
        console.log(pwd);
        dataPost = {
            "name": name,
            "pwd": pwd
        };
        $.ajax({
            url: "/a/login",
            type: "post",
            data: dataPost,
            success: function (result) {
                var response = JSON.parse(result);
                if (response.code == 0) {
                    window.location.href = "https://www.baidu.com/";
                }
                else if (response.code == "-5003") {
                    text.text("无此用户");
                }
                else if (response.code == "-5004") {
                    text.text("密码错误");
                }
            }
        });
    });
    return false; //阻止表单默认提交行为
});
 