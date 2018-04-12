var text;

WebFontConfig = {
  google: { families: [ 'Candal', 'Montserrat' ] }
};

demo.state8 = function(){};
demo.state8.prototype = {
  preload: function(){
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
  },
  create: function(){
    game.stage.backgroundColor = '#99e6e6';
    addChangeStateEventListeners();
        
        text = 'Phaser is a JavaScript framework for game development on desktop and mobile platforms. If the device is capable then it uses WebGL for rendering, but otherwise it reverts to Canvas. Ita"s just plain JavaScript, and doesn"t use any faux OO-style practises internally. There"s no massive inheritance chain or component system, and you don"t have to force your objects into any fixed class structure, either. It"s a simple straight-forward prototype chain, the way JavaScript was meant to be used.';


    this.spellOutText(100, 100, 1000, text, 30, 40, '#fff', 'Candal');
    this.spellOutText(100, 600, 1000, text, 30, 20, '#000', 'Montserrat');
  },
  spellOutText: function(x, y, width, text, fontSize, speed, fill,  font){
    var sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font});
    var currentLine = game.add.text(10, 10, '', {fontSize: fontSize + 'px', font: font});
    currentLine.alpha = 0;
    var loop = game.time.events.loop(speed, addChar);

    var index = 0;

    function addChar() {
      sentence.text += text[index];
      currentLine.text += text[index];

      if (currentLine.width > width && text[index] == ' ') {
        sentence.text += '\n';
        currentLine.text = '';
      }
      if (index >= text.length - 1) {
        game.time.events.remove(loop);
        console.log('stop');
      }
      index++;
    }
  }
};