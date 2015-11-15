$(document).ready(function() {
	fadeHeart();
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(pos){
				var lat=pos.coords.latitude;
				var lon=pos.coords.longitude;
				loadData(lat,lon);

				
			},
			function(error){
				console.log("failed", error);
				loadData(null,null);
			}
		);
	}
	else
	{
		console.log("Couldn't use geolocation");
		loadData(null,null);
	}

    
});

function loadData(lat,lon){
	loadRestaurants(5,lat,lon);
    loadAttractions(5,lat,lon);
    loadHotels(5,lat,lon);

});