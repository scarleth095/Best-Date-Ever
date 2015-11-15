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
		$(".attraction-link").hide();
		$(".hotel-link").hide();
		$(".rest-link").show();
		$("#data").show();
	});
	$("#q2").click(function(){
		$(".rest-link").hide();
		$(".hotel-link").hide();
		$(".attraction-link").show();
		$("#data").show();

	});
	$("#q3").click(function(){
		$(".rest-link").hide();
		$(".attraction-link").hide();
		$(".hotel-link").show();
		$("#data").show();
	});




}
