define([	
	"crafty"
],function(Crafty) {
		
	Crafty.scene("Castle", function () {  
		Crafty.background("yellow");
		Crafty.e("2D, DOM, Text").attr({ x: 350, y: 200, w:100, h:50}).text("Castle scene.");	    			    	   
	});

});