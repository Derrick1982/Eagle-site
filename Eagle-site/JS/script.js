$(document).ready(function() {  

var map = new GMaps({
     
      div: '#map',
      lat:  51.98473188250202,
      lng: 5.914464667439461,
     zoom: 18
});

    
     map.addMarker({
      lat: 51.98473188250202,
      lng: 5.914464667439461,
      title: 'Arnhem',
      infoWindow: {
       content: '<p>Eagle</p>'
}
});
    
    
  var map2 = new GMaps({
     
      div: '#map2',
      lat:  52.2141356,
      lng: 5.958973900000046,
     zoom: 18
});

    
     map2.addMarker({
      lat:  52.2141356,
      lng: 5.958973900000046,
      title: 'Apeldoorn',
      infoWindow: {
       content: '<p>Eagle</p>'
          
}
});  
    
    var map3 = new GMaps({
     
      div: '#map3',
      lat:  51.8457021,
      lng: 5.862490600000001,
      zoom: 11
});

      $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
       
    }); 
      
    
 });     