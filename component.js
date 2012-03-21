//feed
Crafty.c("feed", {
  init: function(){
    this.addComponent("2D, Canvas, Tween");
  },
  makeFeed: function(type){
    var max = {x: Crafty.viewport.width - 40, y: Crafty.viewport.height - 40};
    var randX = Crafty.math.randomInt(40, max.x);
    var randY = Crafty.math.randomInt(40, max.y);
    this.attr({x: randX, y: randY, w: 20, h: 20, type: type})
        .addComponent(type);
    return this;
  },

  fadeOut: function(){
    this.tween({alpha: 0.0}, 10);
  },

  fadeDestroy: function(){
    this.fadeOut();
    // Guess the time it is invisible, no callback possible right now.
    // There is an event, though: TweenEnd.
    var that = this;
    window.setTimeout(function(){
      that.destroy();
    }, 1000);
  }
});
