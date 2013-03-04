define([    
    'crafty'
], function( Crafty ) {
			   
	Crafty.c("Drummer", {	
	    init: function() {
	    	this.requires("2D, DOM, SpriteAnimation, DrummerSprite, Solid, Mouse, Collision");       
	        this.z = 10;
	        this.animate('talk', 1, 0, 2);
		 	this.animate('beat', 0, 0, 1);
		 	this.animate('beat', 20, -1)
		 	.collision( new Crafty.polygon([80,0], [130 ,0], [130,200], [80,200]))
		 	.bind("MouseOver", function(e){		
				this.css({'cursor':'url(assets/img/mouth_cursor.png) 10 10, auto'});
			})
			.bind("MouseOut", function(e){        	     
	        	this.css('cursor', 'default');	        	       
	        }) 
		 	.bind("EnterFrame", function(e) {   
		 		//blink
	 			if(e.frame % 200 > 0 && e.frame % 200 < 4) {
					this.sprite(3, 0, 1, 1); 
				}
			})
			.bind("ClickToBoard", function( data ){			
				this.stop().animate('beat', 20, -1);
			});
	    },
	});

});

