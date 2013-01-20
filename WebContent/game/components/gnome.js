define([    
    'crafty'
], function( Crafty ) {
			   
	Crafty.c("Gnome", {	
	    init: function() {
	    	this.requires("2D, DOM, SpriteAnimation, GnomeSprite, Keyboard, Mouse, Collision");       			           			           
	        this.speed = 4;       
	        this.moving = false;
	        this.talk = false; 
	        this.animate('talk', 0, 0, 1);
		 	this.animate('walk_right', 2, 0, 3);
		 	this.animate('walk_left', 4, 0, 5)		
		 	.collision()
		 	.onHit("Solid", function (o) {	 		
		 			//z-index
		 			if(this.getY() > (o[0].obj.y + o[0].obj.h) ){
	                	this._z = 15;
	                }else{
	                	this._z = 5;	
	                }	 		        	  
	        })
	        .bind("Talk", function( data ){	
	        	if(!this.talk){
	        		player.moving = true;
	        		player.setTargetX( data.x - 50 );
	                player.setTargetY( data.y + data.h );          		        	
	        	}
	        	this.talk = true;
			})
			.bind("ClickToBoard", function( data ){	
				this.talk = false;			
				if( this.getX() != data.x && 
		        	this.getY() != data.y ){
					this.setTargetX( data.x );
	            	this.setTargetY( data.y );           
	            	this.moving = true;	
				}
			})		
		 	this.bind("EnterFrame", function(e) {  
		 			 			 	
		 			if(this.moving) {	    	              
		    	               
		    	 			 	//Calculate difference in distance between start and final position
		    	                dx = this.targetX - this.x;
		    	                dy = this.targetY - this.y;          
		    	                
		    	                //animate sprite
		    	                if(dx > 0){
		    	                	this.animate('walk_right', 5, -1)	
		    	                }else{
		    	                	this.animate('walk_left', 5, -1)		
		    	                }
		    	                	    	                 	               
		    	                var distance = Math.sqrt((dx*dx)+(dy*dy));
		    	                
		    	                dx = dx/distance;
		    	                dy = dy/distance;
		    	                	    	                
		    	                //Move sprite
		    	                this.x += dx*this.speed;
		    	                this.y += dy*this.speed;
		    	                
		    	                //If current position with speed is higher than destination, set to destination
		    	                if ((dx > 0 && this.x + this.speed >= this.targetX) || (dx < 0 && this.x - this.speed <= this.targetX)) {
		    	                    this.x = this.targetX
		    	                }
		    	                if ((dy > 0 && this.y + this.speed >= this.targetY) || (dy < 0 && this.y - this.speed <= this.targetY)) {
		    	                    this.y = this.targetY
		    	                }
		    	                	    	              	    	              
		    	                //If at destination, stop
		    	                if (this.x == this.targetX && this.y == this.targetY) {
		    	                    this.moving = false;
		    	                    this.stop().sprite(0, 0, 1, 1);
		    	                }
		    	                	    	 		  					 	 		
		    	 		}else if(this.talk){
		    	 			this.animate('talk', 20, -1);
		    	 			 	    	 			 	    	 			 	    	 			 	    	 		    	 			 						 	 	
			 	 		}else{
			 	 			//blink
			 	 			if(e.frame % 100 > 0 && e.frame % 100 < 4) {    		  			
								this.sprite(6, 0, 1, 1); //blink
							}else{
								this.sprite(0, 0, 1, 1);	
							}	
		    	 		}	 				 				 				 
					})	 		 
	    }, 
	    //set origin of sprite
	    setTargetX: function( x_position ){ this.targetX = x_position - this.w/2 },
	    setTargetY: function( y_position ){ this.targetY = y_position - this.h },
	    getX: function(){ return this.x + this.w/2 },
	    getY: function(){ return this.y + this.h },
	});

});

