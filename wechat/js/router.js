


$(function(){

    $("#title").load("../page/title/title.html")


    $("#dynamic").load("../page/dynamic/index.html")



    //切换
    $(".menu-item").click(function() {

        $("#dynamic").load($(this).data("page"))

    });
})