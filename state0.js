var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.state.backgroundColor = '#80ff80';
        console.log('state0');
        game.input.keybord.addKey(Phaser.Keybord.ONE).onDown.add(changeState, null, null, 1);
        
        game.input.keybord.addKey(Phaser.Keybord.ZERO).onDown.add(changeState, null, null, 0);
    },
    update: function(){}    
};

function changeState(i, stateNum){
    console.log(i);
    game.state.start('state' + stateNum);
}