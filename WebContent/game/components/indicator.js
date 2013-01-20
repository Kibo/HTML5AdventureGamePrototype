define([    
    'crafty'
], function( Crafty ) {
			   
	Crafty.c("Indicator", {	
	    init: function() {
	    	this.requires("2D, DOM, Image, Solid");       
	        this.z = 10;
	        this.image("assets/img/indicator.png", "no-repeat")       
	    },
	});

});

