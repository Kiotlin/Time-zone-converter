$(document).ready(function(){
    $("#go_top").hide();
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 50){
                $("#go_top").fadeIn();
            }else {
                $("#go_top").fadeOut();
            }
        });
    });

    $("#go_top").click(function(){
        $("html,body").animate({scrollTop:0},800);
        return false;
    });
});