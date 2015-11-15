function fadeHeart(){
	$("#restaurants").hide();
	$("#movies").hide();
	$("#other").hide();
	$("#pad").hide();
	$("#q1").hide();
	$("#q2").hide();
	$("#q3").hide();
	$("#data").hide();

	$("#start").click(function(){
	    $("#fade1").fadeOut(2900);
	    $("#start").fadeOut(2900,function(){
	    	$("#pad").show();
	    	$("#q1").fadeIn();

    	});
	});


	$("#q1").click(function(){
		$("#restaurants").show();
		$("#data").show();




	});
}
