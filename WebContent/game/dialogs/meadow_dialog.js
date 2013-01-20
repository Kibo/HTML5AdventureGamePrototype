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
						              			      													    				  					      												       
] //dialog
