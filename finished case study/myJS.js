/*---------------------------------------------------------------
MOBILE DEVICE MENU TOGGLE SCRIPT
---------------------------------------------------------------*/

$("span.navBtn").click(function() {
    $("#mainMenu").slideToggle();

});

$("#mainMenu").on("click",function() {
   if ($(window).width() < 1024) {
        $("span.navBtn").click();
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
GOOGLE MAPS SCRIPT
---------------------------------------------------------------*/
function initMap() {
    
        // Creating a new variable to hold my lat and lng
          var officeLocation = {lat: 51.440027799999996, lng: 0.0351658};
    
        // Create a map object and specify the DOM element for display.
          map = new google.maps.Map(document.getElementById("map"), {
          center: officeLocation,
          scrollwheel : false,
          zoom: 16
        });
          var marker = new google.maps.Marker({
          position: officeLocation,
          map: map,
          title: 'Find us here!'
        });
    
          var popupAddress = "The Vintage Apparel Company, 2nd Floor<br />";
              popupAddress += "St. Clare House<br />";
              popupAddress += "30-33 Minories<br />";
              popupAddress += "London EC3N 1DD<br />";
          
              
          var infowindow = new google.maps.InfoWindow({
          content: popupAddress,
          maxWidth: 300
        });
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      }   