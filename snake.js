window.onload = function(){
    BLOCKSIZE = 20;
    WIDTH = 44 * BLOCKSIZE;
    HEIGHT = 28 * BLOCKSIZE;
  //init Crafty
    Crafty.init(WIDTH, HEIGHT);
    //loading
    //feed
    Crafty.sprite(40, "img/kaninchen.png", {
      rabbit: [0, 0]
    });
    Crafty.sprite(20, "img/steak.png", {
      steak: [0, 0]
    });
      Crafty.scene("load", function(){
        Crafty.load(["img/sssssnakeleton.png","img/snakeleton.png", "img/kaninchen.png", "img/steak.png", "img/herz.png", "img/herz_sw.png"], function() {
          Crafty.scene("main");
        });
        Crafty.background("#000");
        Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 150, y: 120 })
              .text("Loading")
              .css({ "text-align": "center" });
         
      });
    
    Crafty.scene("load");


  //Initialize Timer
    var Timer = Crafty.e("Timer").resume(); 

    var regenerateFeed = function() {
      var feeds = ["rabbit", "steak"];
      var rand = Math.floor(Math.random() * 2);
      var feed = Crafty.e('feed').makeFeed(feeds[rand]);
      var randTime = Math.random() * 500;

      window.setTimeout(function() {
        feed.fadeDestroy();
        regenerateFeed();
      }, 5000 + randTime);
      
    };

    var regenerateFeeds = function(number) {
      for(var i = 0; i < number; i++){
        regenerateFeed();
      }
    };
  
  //main scene
    Crafty.scene("main", function(){
      Crafty.background("black");
      start();
    });
    var start = function(){
      regenerateFeeds(5);
    };
                  
  };      
