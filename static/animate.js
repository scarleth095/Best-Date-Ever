function fadeHeart(){
	$("#restaurants").hide();
	$("#movies").hide();
	$("#other").hide();
	$("#pad").hide();
	$(".q").hide();
	

	$("#start").click(function(){
	    $("#fade1").fadeOut(2900);
	    $("#start").fadeOut(2900,function(){
	    	$("#pad").show();
	    	$(".q").fadeIn();
	    	

    	});
	});


	$("#q1").click(function(){
		$("#restaurants").show();
		$("#data").show();




	});
}
