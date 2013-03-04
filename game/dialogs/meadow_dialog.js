//--DIALOG-----------------
DIALOGS_MEADOW_SCENE = [					
		
        // new conversation           
		{id:100, type:"text", actor:"gnome", text:"Hi drummer.",		audio:"testa.mp3",	next:110 },
		{id:110, type:"text", actor:"drummer", text:"Hi gnome.",		audio:"testa.mp3",	next:120 },
		{id:120, type:"text", actor:"gnome", text:"How are you?",		audio:"testa.mp3",	next:130 },
		{id:130, type:"text", actor:"drummer", text:"Can you help my?",	audio:"testa.mp3",	next:140 },
				
		{id:140, type:"choice", texts:[
			                          {id:142, actor:"gnome", type:"text", text:"Yes.", audio:"testa.mp3", next:150 }, 
			                          {id:144, actor:"gnome", type:"text", text:"No.",	audio:"testa.mp3"}
			                          ] 
		},
						
		{id:150, type:"text", actor:"drummer", text:"Thanks you.", 		audio:"testa.mp3",	next:160 },
		{id:160, type:"text", actor:"gnome", text:"You're welcome.", 	audio:"testa.mp3" },
		
		
		// exercises had success		
		{id:200, type:"text", actor:"gnome", text:"Hi drummer, exercises is done.",	audio:"testa.mp3", next:210 },
		{id:210, type:"text", actor:"drummer", text:"Well done. Go to castle.", 	audio:"testa.mp3",	next:220 },
		{id:220, type:"text", actor:"gnome", text:"See you.", 						audio:"testa.mp3" },
				
		// exercises had not success
		{id:300, type:"text", actor:"gnome", text:"Hi drummer. I am sorry.",			audio:"testa.mp3",	next:310 },
		{id:310, type:"text", actor:"drummer", text:"I will not help you. Go away.", 	audio:"testa.mp3", next:320 },
		{id:320, type:"text", actor:"gnome", text:"Ooops.",				 				audio:"testa.mp3",}
										              			      													    				  					      												     
] //dialog
