/*---------------------------------------------------------------
MOBILE DEVICE MENU TOGGLE SCRIPT
---------------------------------------------------------------*/

$("span.navBars").click(function() {
    $("#mainMenu").slideToggle();

});

$("#mainMenu").on("click",function() {
   if ($(window).width() < 1024) {
        $("span.navBars").click();
       }

});

/*---------------------------------------------------------------
SMOOTH SCROLLING FOR MAIN MENU LINKS
---------------------------------------------------------------*/
$(function() {
    $(".navC a, actionB a, .logoC a").bind("click", function(event){
        
        var $anchor = $(this);
        $("html,body").stop().animate({
            
            scrollTop: $($anchor.attr("href")).offset().top-100
            
        },2000);
        
        event.preventDefault();
        
    });
});