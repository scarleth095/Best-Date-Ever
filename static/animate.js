function fadeHeart(){
	$("#restaurants").hide();
	$("#movies").hide();
	$("#other").hide();
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
		$("#restaurants").show();
		$("#data").show();




	});
}
