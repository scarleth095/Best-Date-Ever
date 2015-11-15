function fadeHeart(){
	$(".rest-link").hide();
	$(".attraction-link").hide();
	$(".hotel-link").hide();
	$("#pad").hide();
	$("#here").hide();
	$("#data").hide();
	

	$("#start").click(function(){
	    $("#fade1").fadeOut(2900);
	    $("#start").fadeOut(2900,function(){
	    	$("#pad").show();
	    	$("#here").fadeIn();
	    	

    	});
	});


	$("#q1").click(function(){
		$("#attractions").hide();
		$("#other").hide();
		$("#restaurants").show();
		$("#data").show();
	});
	$("#q2").click(function(){
		$("#restaurants").hide();
		$("#other").hide();
		$("#attractions").show();
		$("#data").show();

	});
	$("#q3").click(function(){
		$("#restaurants").hide();
		$("#attractions").hide();
		$("#other").show();
		$("#data").show();
	});




}
