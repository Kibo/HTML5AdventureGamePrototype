define([    
    'crafty'
], function( Crafty ) {
			   
	Crafty.c("Board", {  
		
		boundary: new Crafty.polygon( [[0,300], [600, 350], [800,250], [800,320], [730,360], [800,360], [800,400], [300, 400], [0, 320]] ),
		init: function() {
	        this.requires("2D, DOM, Mouse, Collision");
	        this.x = 0;
	        this.y = 0;
	        this.w = Crafty.viewport.width;  
	        this.h = Crafty.viewport.height;      
	        this.collision( this.boundary );
	        this.bind("Click", function(){          	        	
	        	Crafty.trigger("ClickToBoard", {x:Crafty.mousePos.x, y:Crafty.mousePos.y});        	        
	        })   
	        .bind("MouseOver", function(e){        	     
	        	this.css('cursor', 'url(assets/img/walk_cursor.png) 10 10, auto');	        	       
	        })
	        .bind("MouseOut", function(e){        	     
	        	this.css('cursor', 'default');	        	       
	        });
	             
	        //door to cave
	        Crafty.e("2D, DOM, Collision")
	         	.attr({w:50, h:50, x:770, y:360})
	         	.css('cursor', 'url(assets/img/walk_cursor.png) 10 10, auto')
	         	.collision()
	         	.onHit("Gnome", function(o){	         		
	         	  console.log('to cave');
	         	  Crafty.scene("Cave");	
	         	 });
	         	 
	        //door to kingdom
	        Crafty.e("2D, DOM, Collision")
	         	.attr({w:50, h:50, x:780, y:200})         
	         	.collision()
	         	.onHit("Gnome", function(o){
	         	  console.log('to castle');
	         	  Crafty.scene("Castle");	
	         	 });
	     }
	});

});

