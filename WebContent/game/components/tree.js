define([    
    'crafty'
], function( Crafty ) {
			   
	Crafty.c("Tree1", {	
	    init: function() {
	        this.requires("2D, DOM, Image, Solid");   
	        this.image("assets/img/tree1.png", "no-repeat");   
	        this.z = 10;        
	    },
	});

});