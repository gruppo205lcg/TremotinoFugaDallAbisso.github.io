function preload() {

    game.load.image('back1', "../sprites/render/copertina.jpg");
    }

    function create() {

        //sfondo
        game.world.setBounds(0);
        game.add.tileSprite("back1");
        }
