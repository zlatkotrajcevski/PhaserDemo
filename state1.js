demo.state1 = function(){};

var cursors, vel = 500;

demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.images('gressTiles', 'assets/tilemaps/grassTiles.png');
        game.load.images('rockTiles', 'assets/tilemaps/rockTiles.png');
        game.load.image('adam', 'assets/sprites/adam.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.ARCADE);
        game.state.backgroundColor='#DDDDDD';
        addChangeStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');
        
        gress = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        
        map.setCollisionBetween(1, 9, true, 'rocks');
        map.setCollision(11, true, 'grass');
        
        adam = game.add.sprite(200, 200, 'adam');
        adam.scale.setTo(0.2, 0.2);
        game.physics.enable(adam);
        
        cursors = game.input.keybord.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(adam, rocks, function(){ console.log('hitting rocks!'); });
        game.physics.arcade.collide(adam, grass, function(){ console.log('hitting grass!'); });
        if(cursors.up.isDown){
            adam.body.velacity.y = -vel;
        }
        else if(cursors.down.isDown){
            adam.body.velacity.y = vel;
        }
        else{
            adam.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            adam.body.velacity.x = -vel;
        }
        else if(cursors.right.isDown){
            adam.body.velacity.x = vel;
        }
        else{
            adam.body.velocity.x = 0;
        }
    }
};