function fadeHeart(){
	$("#restaurants").hide();
	$("#q1").hide();
	$("#q2").hide();
	$("#q3").hide();

	$("#start").click(function(){
	    $("#fade1").fadeOut(2900);
	    $("#start").fadeOut(2900,function(){
	    	$("#q1").fadeIn();

    	});
	});


	$("#q1").click(function(){
		$("#restaurants").show();




	});
}
