function loadAttractions(numberRestaurants,lat,lon){
    var url;
    if (lat ==null || lon==null){
     url = 'https://api.tripadvisor.com/api/partner/2.0/location/60745/attractions?key=df9ce229-07ac-4c58-8af3-619317decc5b&limit=' + numberRestaurants ;

    }

   else{ 
     url = 'http://api.tripadvisor.com/api/partner/2.0/map/'+lat+','+lon+'/attractions?key=df9ce229-07ac-4c58-8af3-619317decc5b&limit=' + numberRestaurants ;
    }
    $.ajax({
        url: url,
        dataType: 'json'
    }).always(function(response) {
        var restaurants = response.data;
        for(var i = 0; i < restaurants.length; i++){
        	var restaurant = restaurants[i]; 
          
            var newLink = $('<a>');
            newLink.addClass('venue-link');
            newLink.text(restaurant.name);
            newLink.attr('href', restaurant.web_url);
          
            var newLi = $('<li>');
            newLi.append(newLink);

            var newImage = $('<img>');
            newImage.attr('src',restaurant.rating_image_url);
            newLi.append(newImage);

          
            $('#attractions').append(newLi);
        }
    });
}
