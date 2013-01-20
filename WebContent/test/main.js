require.config({
    paths: {     	
        crafty: '../libs/crafty/crafty',     
        game: '../game'      
    },    
});

require([   
	'crafty', 
	'game/components/talkable',
	'talkable_tests'
	], 
function() {
	return true;	
});