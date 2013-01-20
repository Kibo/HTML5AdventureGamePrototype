require.config({
    paths: {     
	underscore: 'underscore/underscore-min',
        crafty: 'crafty/crafty',     
        game: '../game'      
    },
    shim: {
        underscore: { exports: '_' },      
        crafty: { exports: "Crafty" },      
    }
});

require(['game/main', 'game/components'], function(Game) { Game.initialize(); });
