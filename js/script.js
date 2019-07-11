
$(document).ready(function(){

    $(function(){
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('header').addClass('sticky');
                $('.logo_wrap a h1 i').hide();
            } else {
                $('header').removeClass('sticky');
                $('.logo_wrap a h1 i').show();
            }
        });
    });

    $("#go_top").hide();
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 250){
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