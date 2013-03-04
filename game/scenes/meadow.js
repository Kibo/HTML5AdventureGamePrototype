define([	
	"crafty",
	'game/dialogs/meadow_dialog' 
],function(Crafty) {
		
	Crafty.scene("Meadow", function () {
	   	      
	    Crafty.background("url('assets/img/bg.png')");		    		    		   		          			 
	    Crafty.e("Clouds");		    
     	Crafty.e("Board"); 
     	
     	Crafty.e("Indicator").attr({x: 550, y: 40}); 
     	Crafty.e("Tree1").attr({x: 30, y: 80}); 
     	
     	drummer = Crafty.e("Drummer, Talkable")
     		.attr({x: 370, y: 120})
     		.talkable( DIALOGS_MEADOW_SCENE );
     	         	         
     	player = Crafty.e("Gnome").attr({x: 2, y: 220});    
     	         	         
    });	 // scene 

});


 