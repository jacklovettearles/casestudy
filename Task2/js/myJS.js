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

/*---------------------------------------------------------------
GOOGLE MAP API
---------------------------------------------------------------*/



 function initMap() {
        var uluru = {lat:51.3652777 , lng: -0.2181259};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }