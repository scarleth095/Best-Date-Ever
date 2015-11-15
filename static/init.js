$(document).ready(function() {
	fadeHeart();
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(pos){
				var crd = pos.coords;
				console.log(pos); 
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

    loadRestaurants(5);
    loadAttractions(5);
    loadHotels(5);
});
