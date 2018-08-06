
$(function(){
    setInterval(function(){
        var dateTime = new Date();
        var h = dateTime.getHours();
        var m = dateTime.getMinutes();
        var s = dateTime.getSeconds();
        var stime=' 123';
        if(h>=0&&h<12){
            stime = "上午" ;
        }else if(h>=12&&h<=13){
            stime = "中午";
        }else{
            stime = "下午";
        }
        if (m>= 0 && m <= 9) {
            m = "0" + m;

        }
        if (s>= 0 && s <= 9) {
            s = "0" + s;
        }
        $("#time").text(stime.valueOf()+h + ":" + m + ":" + s);
    });
    $(function () {
        $("#title-add").click(function () {
            $("#title-menu").toggle();
            $(this).flush();
        })
    });
    // $(function () {
    //     $("#menu-message").click(function () {
    //         $(".message-top-head").css({"background-image":"url('../../img/index/message-icon-press.svg')"});
    //         $(".message-bottom").css("color","green");
    //         $(".address-top-head").css({"background-image":"url('../../img/index/namebook-icon.svg')"});
    //         $(".message-bottom").css("color","gray");
    //         $(".find-top-head").css({"background-image":"url('../../img/index/find.svg')"});
    //         $(".find-bottom").css("color","gray");
    //         $(".self-top-head ").css({"background-image":"url('../../img/index/me-icon.svg')"});
    //         $(".self-bottom").css("color","gray");
    //     });
    //
    //     $("#menu-find").click(function () {
    //         $(".message-top-head").css({"background-image":"url('../../img/index/message-icon.svg')"});
    //         $(".message-bottom").css("color","gray");
    //         $(".address-top-head").css({"background-image":"url('../../img/index/namebook-icon.svg')"});
    //         $(".message-bottom").css("color","gray");
    //         $(".find-top-head").css({"background-image":"url('../../img/index/discovery-icon-press.svg')"});
    //         $(".find-bottom").css("color","green");
    //         $(".self-top-head ").css({"background-image":"url('../../img/index/me-icon.svg')"});
    //         $(".self-bottom").css("color","gray");
    //     });
    //     $("#menu-self").click(function () {
    //         $(".message-top-head").css({"background-image":"url('../../img/index/message-icon.svg')"});
    //         $(".message-bottom").css("color","gray");
    //         $(".address-top-head").css({"background-image":"url('../../img/index/namebook-icon.svg')"});
    //         $(".message-bottom").css("color","gray");
    //         $(".find-top-head").css({"background-image":"url('../../img/index/find.svg')"});
    //         $(".find-bottom").css("color","gray");
    //         $(".self-top-head ").css({"background-image":"url('../../img/index/me-icon-press.svg')"});
    //         $(".self-bottom").css("color","green");
    //     })
    //
    //
    //
    // })
})




