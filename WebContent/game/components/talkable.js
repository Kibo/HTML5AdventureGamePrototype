define([    
    'crafty'
], function( Crafty ) {
			   
	/**
	* It adds to entity the ability to dialogue.
	*  
	* @author Tomas Jurman (tomasjurman@gmail.com) 
	*/
	Crafty.c("Talkable", {
		
		NEW_CONVERSATION_ID:100,
		EXERCISE_IS_TRUE_CONVERSATION_ID:200,
		EXERCISE_IS_FALSE_CONVERSATION_ID:300,
		
		dialog: [],	
		distance: 50,
	    init: function() {
	    	this.requires("Mouse, TalkableViews");
	        this.bind("Click", function(e) {   	        	       
	        	Crafty.trigger("Talk", { x:this.x, y:this.y, w:this.w, h:this.h});        	                                
	            this.stop().animate('talk', 20, -1);        	                            
	            this.speak( this.getSentence() );							
			})		
			.bind("ClickToBoard", function(e){						
				this.nextMessage = null;
			})	
			.bind("ChoiceSelected", function( data ){												
				this.speak( this.findSentenceById( this.dialog, data.id ));
			});
	    }, 
	    
	    /**
	     * Constructor
	     * 
	     * @param {Array} dialog	Example:[ {id:1, type:"text", text:"Hello", next:2}, {id:2, type:"text", text:"Goodbye"} ]
	     */
	    talkable:function( dialog ){
	    	this.dialog = dialog;    	
	    	return this;
	    },  
	    
	    /**
	     * Redirects data to an appropriate view 
	     * 
	     * @param {Object} sentence		Example:{id:1, type:"text", text:"Hello", next:2}   
	     */
	    speak:function( sentence ){    	        	    	    	    	    	   
	    	switch( sentence.type ){
	    		case 'text':    			
	    			// method from TalkableViews component
	    			this.textView( sentence );
	    			this.setNextMessage( sentence );
	    			break;
				case 'choice':
					// method from TalkableViews component
					this.choiseView( sentence );			
				  	break;			
				default:			
					console.log('do nothing');
			}      	    	   
	    },  
	    
	    /**
	     * Finds a data for the current speech  
	     * 
	     * @return {Object} sentence	Example:{id:1, type:"text", text:"Hello", next:2} 
	     */
	    getSentence: function(){
	    	return this.nextMessage ? 
	    			this.nextMessage : 
	    				this.getStartSentence();	
	    },
	    
	    /**
	     * Finds a data for the start of the conversation 
	     * 
	     * @return {Object} sentence	Example:{id:1, type:"text", text:"Hello", next:2} 
	     */
	    getStartSentence: function(){    	    	  
	    	// start new conversation
	    	var sentence = this.findSentenceById( this.dialog, this.NEW_CONVERSATION_ID );
	    	
	    	// player did exercise and had success
	    	if( this.isExerciseSuccessful === true ){
	    		sentence = this.findSentenceById( this.dialog, this.EXERCISE_IS_TRUE_CONVERSATION_ID );	
	    	}
	    	
	    	// player did exercise and had not success
	    	if( this.isExerciseSuccessful === false ){
	    		sentence = this.findSentenceById( this.dialog, this.EXERCISE_IS_FALSE_CONVERSATION_ID );
	    	}
	    	
	    	return sentence;    	
	    }, 
	                         
	    /**
	     * Set a data for next conversation
	     * 
	     * @param {Object} sentence    Example:{id:1, type:"text", text:"Hello", next:2}   
	     */
	    setNextMessage: function( sentence ) {	
	    	if ( !sentence.next ){
	    		this.nextMessage = {};    		
	    	}else{    				
	    		this.nextMessage = this.findSentenceById( this.dialog, sentence.next );    		
	    	}    				
		},
		
		/**
	     * Finds Object by id
	     * 
	     * @param {Integer} id   
	     * @return {Object} sentence 	Example:{id:1, type:"text", text:"Hello", next:2}	   
	     */
		findSentenceById: function(list, id){					
			for(var i=0; i < list.length; i++){
			    		
	    		if(list[i].id == id){
	    			return list[i];    		
	    		} 
	    		
	    		if(list[i].texts){
	    			var result = this.findSentenceById( list[i].texts, id);
	    			if(result){
	    				return result;
	    			}    					
	    		}    		
	    	}     
	    },	      
	});

	/**
	* Views for Talkable component.
	* 
	* It depend on jQuery library.
	*  
	* @author Tomas Jurman (tomasjurman@gmail.com) 
	*/
	Crafty.c("TalkableViews", {
		 CURTAIN_DELAY:500, //ms
		 
		 chatContainer: $('#chat'),
		 curtainContainer: $('#curtain'),	 
		 init: function() {
			 this.bind("ChatScrolling", function(){			
				 this.chatContainer.animate({"scrollTop": this.chatContainer[0].scrollHeight}, "slow");
			 });		 		
		 },
		 
		 /**
	     * Show Text.
	     * 
	     * @param {Object} sentence 	Example:{id:1, type:"text", text:"Hello", next:2}
	     * @trigger ChatScrolling		If it insert a new text message a and chat container is scrolling.        
	     */
		textView: function( sentence ){		
			$('<p>' + sentence.text  + '</p>')
			.addClass(sentence.actor)
			.attr( 'data-audio', sentence.audio )
			.appendTo( this.chatContainer );
			 Crafty.trigger("ChatScrolling");		
	    }, 
	    
	    /**
	     * Show Choice.
	     * 
	     * @param {Object} choice 	Example:{id:1, type:"choice", texts:[{},{}]}
	     * @trigger ChoiceSelected	If player select a choice. 	        
	     */
	    choiseView: function( choice ){    	    	
	    	this.curtainContainer.empty();
	    	for(var index=0; index < choice.texts.length; index++){    		
	    		var self = this;    		
	    		$('<p>' +  choice.texts[index].text + '</p>')
	    		.attr( 'data-id', choice.texts[index].id)
	    		.click(function( e ){    		
	    			Crafty.trigger("ChoiceSelected", {id: $(this).attr('data-id')});    			    			    			    			    			   
	    			self.curtainContainer.animate({ top: -self.curtainContainer.height() }, this.CURTAIN_DELAY );    			
	    		})
	    		.appendTo( this.curtainContainer );	    		
	    	}    	
	    	this.curtainContainer.animate({top:0}, this.CURTAIN_DELAY);
	    }, 	    	  
	});

});




