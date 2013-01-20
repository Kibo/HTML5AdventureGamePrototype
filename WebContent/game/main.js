define([
    'crafty',
    'game/viewport',
    'game/scenes'
], function(Crafty, viewport) {

    var initialize = function() {
        Crafty.init(viewport.width, viewport.height);
        Crafty.scene("Load");     
    };

    return {
        initialize: initialize
    };
});
