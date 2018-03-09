var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/960px-Blank_Go_board.png");
ASSET_MANAGER.queueDownload("./img/black.png");
ASSET_MANAGER.queueDownload("./img/white.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');


    var gameEngine = new GameEngine();

        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                var circle = new Circle(gameEngine, 0, i, j)
                circleArray[i][j] = circle;
                gameEngine.addEntity(circle);
            }
        }


    for (var i = 0; i < 5; i++) {
        circle = new Circle(gameEngine, 1, Math.floor(Math.random() * (((circleArray.length-1) - 0))), Math.floor(Math.random() * (((circleArray.length - 1) - 0))));
        gameEngine.addEntity(circle);
    }
    gameEngine.init(ctx);
    gameEngine.start();
});
