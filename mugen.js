$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        blockId = $(this).data('scroll');
        blockOffset = $(blockId).offset().top;


        $("html, body").animate({
            scrollTop: blockOffset - 50
        }, 700)

    });

    $("[data-modal]").on("click", function (event) {
        event.preventDefault();

        $(modal_resume).addClass('show');
    });

    $(modal_resume).on("click",function(){
        $(modal_resume).removeClass('show');
    })

   



});



let icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");

    if( document.body.classList.contains("dark-theme")){
        icon.src="images/sun.png";
    }else{
        icon.src="images/moon.png";
    }
}