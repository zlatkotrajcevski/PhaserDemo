var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.state.backgroundColor = '#80ff80';
        console.log('state0');
        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.scaleMenager.SHOW_ALL;
   
    },
    update: function(){}    
};

function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}
function addKeyCallback(key, fn, args){
    game.input.keybord.addKey(key).omDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keybord.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keybord.ONE, changeState, 1);
    addKeyCallback(Phaser.Keybord.TWO, changeState, 2);
    addKeyCallback(Phaser.Keybord.THREE, changeState, 3);
    addKeyCallback(Phaser.Keybord.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keybord.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keybord.SIX, changeState, 6);
    addKeyCallback(Phaser.Keybord.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keybord.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keybord.NINE, changeState, 9);
    
}