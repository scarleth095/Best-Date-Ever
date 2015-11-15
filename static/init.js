$(document).ready(function() {
	fadeHeart();
	var lon ,lat;
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(pos){
				lat=pos.coords.lattiude;
				lon=pos.coords.longitude;
				
			},
			function(error){
				console.log("failed", error);
			}
		);
	}
	else
	{
		console.log("Couldn't use geolocation");
	}

    loadRestaurants(5,lat,lon);
    loadAttractions(5,lat,lon);
    loadHotels(5,lat,lon);
});
