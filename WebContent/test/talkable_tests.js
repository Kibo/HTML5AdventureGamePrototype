define([    
    'crafty'
], function( Crafty ) {
		
	Crafty.init(500,500);
	
	var dialog = [{id:1, type:"text", text:"abc", next: 2}, 
	              {id:2, type:"text", text:"cde"}, 
	              {id:3, type:"choice", texts:[
	                                 			{id:4, type:"text", text:"efg", next:300 }, 
	                                 			{id:5, type:"text", text:"ghi"}
	                                 		] },
	              {id:100, type:"text", text:"jkl"}, 
	        	  {id:200, type:"text", text:"mno"},
	        	  {id:300, type:"text", text:"pqr"},				        	  
	              ];

	var talk = Crafty.e("2D, DOM, Talkable").talkable( dialog );	

	test("ConstructorTest", function() {				
		equal( talk.dialog.length, dialog.length, "Object equal dialog.");					
	});

	test("GetSentenceTest", function() {
		talk.nextMessage = null;
		equal( talk.getSentence().id, talk.NEW_CONVERSATION_ID, "Start new conversation.");
		
		talk.nextMessage = dialog[5];
		equal( talk.getSentence().id, dialog[5].id, "Is next sentence");
							
	});

	test("StartSentenceTest", function() {				
		equal( talk.getStartSentence().id, talk.NEW_CONVERSATION_ID, "Start new conversation.");
		
		talk.isExerciseSuccessful = true;
		equal( talk.getStartSentence().id, talk.EXERCISE_IS_TRUE_CONVERSATION_ID, "Exercise is true.");
		
		talk.isExerciseSuccessful = false;
		equal( talk.getStartSentence().id, talk.EXERCISE_IS_FALSE_CONVERSATION_ID, "Exercise is false.");
	});

	test("FindSentenceByIdTest", function() {	
							
		equal( talk.findSentenceById(dialog, 100).id, 100, "ID_100.");	
		equal( talk.findSentenceById(dialog, 200).id, 200, "ID_200.");
		equal( talk.findSentenceById(dialog, 300).id, 300, "ID_300.");
		
		equal( talk.findSentenceById(dialog, 4).id, 4, "Choice text ID_4.");
		equal( talk.findSentenceById(dialog, 5).id, 5, "Choice text ID_5");													
	});		

	test("SetNextMessageTest", function() {														
		talk.setNextMessage({});										
		ok(talk.nextMessage, "Has not property next.");
		
		talk.setNextMessage({next:1});	
		console.log( talk.nextMessage );
		equal(talk.nextMessage.id, 1, "Has next");	
	});				
	
});
	