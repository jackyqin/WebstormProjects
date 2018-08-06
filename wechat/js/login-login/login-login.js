$(function(){

    //点击立即注册按钮
    $("#submit-login").click(function(){

        var uname = $("#uname").val();//获取账号

        var pass = $("#passwd").val();
        if (uname == ' ' && pass ==''){
            $("#submit-login").css("background-color","limegreen");
        }else{
            $("#submit-login").css("background-color","green");
        }
        //判断账号值
        if(uname == "123456" && pass == "123456"){

            window.location.href="index.html";
        }else{

            alert("账号或密码错误，请重新输入");
            window.location.href="login-login.html";

        }

    });$("#submit-login").hover(function(){
        $("#submit-login").css("background-color","green");
    },function(){
        $("#submit-login").css("background-color","limegreen");
    });
})


