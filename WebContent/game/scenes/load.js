define([	
	"crafty"
],function(Crafty) {

	  Crafty.load([
				   "assets/img/bg.png",
	               "assets/sprites/drummer.png", 
	               "assets/sprites/gnome.png", 
	               "assets/img/cloud1.png", "assets/img/cloud2.png", "assets/img/cloud3.png", 
	               "assets/img/walk_cursor.png", 
	               "assets/img/mouth_cursor.png",
	               "assets/img/tree1.png",
	               "assets/img/indicator.png"], function() {
			
	    	Crafty.sprite(150, 250,"assets/sprites/drummer.png", {
		        DrummerSprite: [0, 0]
		    });
	    	
	    	Crafty.sprite(40, 100, "assets/sprites/gnome.png", {
		        GnomeSprite: [0, 0]
		    });
	    		    	
			Crafty.scene("Meadow");			
		});

});
