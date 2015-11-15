function loadHotels(numberRestaurants){
    var url = 'https://api.tripadvisor.com/api/partner/2.0/location/60745/hotels?key=df9ce229-07ac-4c58-8af3-619317decc5b&limit=' + numberRestaurants ;
    $.ajax({
        url: url,
        dataType: 'json'
    }).always(function(response) {
        var restaurants = response.data;
        for(var i = 0; i < restaurants.length; i++){
        	var restaurant = restaurants[i]; 
          
            var newLink = $('<a>');
            newLink.addClass('restaurant-link');
            newLink.text(restaurant.name);
            newLink.attr('href', restaurant.web_url);
          
            var newLi = $('<li>');
            newLi.append(newLink);

          
            $('#hotels').append(newLi);
        }
    });
}
