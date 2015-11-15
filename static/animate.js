function fadeHeart(){
	$("#restaurants").hide();
	$("#attractions").hide();
	$("#hotels").hide();
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
		$("#hotels").show();
		$("#restaurants").hide();
		$("#data").show();
	});
	$("#q2").click(function(){
		$("#restaurants").hide();
		$("#hotels").hide();
		$("#attractions").show();
		$("#data").show();

	});
	$("#q3").click(function(){
		$("#restaurants").hide();
		$("#attractions").hide();
		$("#hotels").show();
		$("#data").show();
	});




}
