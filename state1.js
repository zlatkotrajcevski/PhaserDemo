demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.state.backgroundColor='#DDDDDD';
        console.log('state1');
        
        game.input.keybord.addKey(Phaser.Keybord.ONE).onDown.add(changeState, null, null, 1);
        
        game.input.keybord.addKey(Phaser.Keybord.ZERO).onDown.add(changeState, null, null, 0);
    },
    update: function(){}    
};