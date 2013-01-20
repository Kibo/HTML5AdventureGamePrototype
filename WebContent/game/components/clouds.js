define([    
    'crafty'
], function( Crafty ) {
			   
	Crafty.c("Clouds", {
		count:3,
		speedMin: 500,
		speedMax:1000,
	    init: function() {    
	   		for(var i=0; i < this.count; i++){
	   			this.instanceOf( "assets/img/cloud1.png", 1000, 1500 );
	   	   		this.instanceOf( "assets/img/cloud2.png", 1500, 2000 );
	   	   		this.instanceOf( "assets/img/cloud3.png", 2000, 2500 ); 	   			
	   		}    		    	          
	    },
	    
	    instanceOf: function( pathToImage, minSpeed, maxSpeed ){    	
	    	 var cloud = Crafty.e("2D, DOM, Image, Tween");
	    	 cloud.image( pathToImage, "no-repeat");
	    	 cloud.attr({x:Crafty.math.randomInt(0, Crafty.viewport.width), y:Crafty.math.randomInt(0, cloud.h/3)});    	 
	    	 cloud.tween({x: -cloud.w}, Crafty.math.randomInt(minSpeed, maxSpeed));
	    	 cloud.bind("TweenEnd", function() {             		
	    		 cloud.attr({x: Crafty.viewport.width, y:Crafty.math.randomInt(0, cloud.h/2)});  
	    		 cloud.tween({x: -cloud.w}, Crafty.math.randomInt(minSpeed, maxSpeed));
	 		 });
	    	 return cloud;
	    },    
	});

});