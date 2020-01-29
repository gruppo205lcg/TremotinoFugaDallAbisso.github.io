/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/KtTPuHeS
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true; this.game.scale.refresh();
    game.load.image('back1', "../sprites/backgrounds/background_1031x9959.png");

    game.load.image('platform', "../sprites/platform1_200x80.png");
    game.load.image('platform2', "../sprites/platform2_200x80.png");
    game.load.image('platform3', "../sprites/platform3_200x80.png");
    game.load.image('base', "../sprites/base_1.png");

    game.load.spritesheet('enemy', "../sprites/nemico_56x50.png");
    game.load.spritesheet('player', "../sprites/animazione_left_right_jump.png", 75,95);
    game.load.spritesheet('gold', "../sprites/molla_gif.png", 51,50);

    game.load.image('box', "../sprites/pergamena_65x65.png");

    game.load.image('morte1', "../sprites/render/morte1.jpg");
    game.load.image('vittoria1', "../sprites/render/vittoria1.jpg");
    game.load.image('vittoria2', "../sprites/render/vittoria2.jpg");

    game.load.image('Pergamena1', "../sprites/render/Pergamena1.png");
    game.load.image('Pergamena2', "../sprites/render/Pergamena2.png");
    game.load.image('Pergamena3', "../sprites/render/Pergamena3.png");
    game.load.image('Pergamena12', "../sprites/render/Pergamena12.png");
    game.load.image('Pergamena13', "../sprites/render/Pergamena13.png");
    game.load.image('Pergamena23', "../sprites/render/Pergamena23.png");
    game.load.image('Pergamena123', "../sprites/render/Pergamena123.png");

    game.load.image('barra', "../sprites/interfaccia/BarraScorrimento.png");
    game.load.image('faccia', "../sprites/interfaccia/TestaScorrimento.png");
    game.load.image('pergamene', "../sprites/interfaccia/pergameneopache.png");
    game.load.image('pausa', "../sprites/interfaccia/BottonePausa.png");
    game.load.image('presa', "../sprites/interfaccia/PergamenaPresa.png");
    game.load.image('schermatapausa', "../sprites/interfaccia/Schermatapausa.png");
    game.load.image('play', "../sprites/interfaccia/Bottoneplay.png");
    game.load.image('ricomincia', "../sprites/interfaccia/BottoneRiprova2 .png");
    game.load.image('home', "../sprites/interfaccia/BottoneHome.png");
    game.load.image('ricominciaoro', "../sprites/interfaccia/Riprova.png");
    game.load.image('homeoro', "../sprites/interfaccia/Exit.png");

    }

var platforms;
var cursors;
var jumpButton;
var gold;
var altezza = 700;
var larghezza = 0;
var thereIsEnemy = false;
var thereIsTouchpoint2 = false;
var thereIsTouchpoint3 = false;
var flag = (Math.random()*10) % 3;
var startTime;
var label;
var counter = 10;
var splash;
var tp1;
var tp2;
var tp3;
var jump = false;
var morte = false;

const GRAVITY = 1200;

function create() {

    //sfondo
    game.world.setBounds();
    game.add.tileSprite(0,768,1024,-9959, "back1");

    //aggiungo gruppi
    tp = game.add.physicsGroup();
    platforms = game.add.physicsGroup();
    enemy = game.add.physicsGroup();
    gold = game.add.physicsGroup();

    //abilito fisica
    game.physics.arcade.enable(gold);
    game.physics.arcade.enable(tp);

    //creo piattaforma base
    plat1 = platforms.create(0, 720, 'base');
    game.physics.enable(plat1);
    plat1.body.allowGravity = false;

    //gravità su tutto il gioco
    game.physics.arcade.gravity.y = GRAVITY;

    //creo le piattaforme
    for(i=0;i<=23;i++){

        x = Math.random()*100+70;
        if(flag === 0){
          thereIsEnemy = false;
            if(Math.random() <= 0.5)
                create_platform1(x);
            else
                create_platform2(x);
        }
        else if(flag === 1){
          thereIsEnemy = false;
            if(Math.random() <= 0.5)
                create_platform(x);
            else
                create_platform2(x);
        }
        else{
            if(Math.random() <= 0.5)
                create_platform(x);
            else
                create_platform1(x);
        }

      }

      //touch1
      alt = altezza;
      larg = larghezza;
      tp1 = tp.create(larghezza+=50, altezza-=98, 'box');
      game.physics.arcade.enable(tp1);

      //(game.paused) {game.input.onDown.add(function()
      //{game.paused = false});
      //splash.destroy()};

      for(i=0;i<=23;i++){
          x = Math.random()*100+70;
          if(flag === 0){
            thereIsEnemy = false;
              if(Math.random() <= 0.5)
                  create_platform1a(x);
              else
                  create_platform2a(x);
          }
          else if(flag === 1){
            thereIsEnemy = false;
              if(Math.random() <= 0.5)
                  create_platforma(x);
              else
                  create_platform2a(x);
          }
          else{
              if(Math.random() <= 0.5)
                  create_platforma(x);
              else
                  create_platform1a(x);
          }

        }

        //touch2
        alt = altezza;
        larg = larghezza;
        tp2 = tp.create(larghezza+=50, altezza-=98, 'box');
        game.physics.arcade.enable(tp2);

        for(i=0;i<=23;i++){
            x = Math.random()*100+70;
            if(flag === 0){
              thereIsEnemy = false;
                if(Math.random() <= 0.5)
                    create_platform1b(x);
                else
                    create_platform2b(x);
            }
            else if(flag === 1){
              thereIsEnemy = false;
                if(Math.random() <= 0.5)
                    create_platformb(x);
                else
                    create_platform2b(x);
            }
            else{
                if(Math.random() <= 0.5)
                    create_platformb(x);
                else
                    create_platform1b(x);
            }

          }

          alt = altezza;
          larg = larghezza;
          molla = gold.create(larg+80, alt-50, 'gold');
          game.physics.enable(molla);
          molla.animations.add("up",[8,7,6,5,4,3,2,1]);
          molla.body.allowGravity = false;

          //touch3
          tp3 = tp.create(larghezza+50, altezza-450, 'box');
          tp3.body.allowGravity = false;
          game.physics.arcade.enable(tp3);


    platforms.setAll('body.immovable', true);
    gold.setAll('body.immovable', true);
    game.physics.arcade.gravity.y = GRAVITY;

    //comandi
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //creo player
    player = game.add.sprite(300, 650, 'player');
    game.physics.arcade.enable(player);
    player.frame = 13;
    player.anchor.set(0.5,0.5);
    player.animations.add("run dx",[14,15,16,17,18,19,20,21,22,23,24,25]);
    player.animations.add("run sx",[1,2,3,4,5,6,7,8,9,10,11,12]);
    player.animations.add("up",[30,40,40,40,40,40]);//31,32,33,34,35,36,37,38,39,40,41,42]);
    player.body.collideWorldBounds = true;
    }


    function create_platform(x){
    altezza -= x;
    larghezza = Math.random()*100;

    //valori per il nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);

    //nemico
    if(Math.random() <=0.2 && i<23){
        ene = enemy.create(larg+80, alt-98, 'enemy');
        game.physics.enable(ene);
        ene.body.velocity.y = -400
        ene.body.bounce.set(1)
        thereIsEnemy = true;
      }

    //molla
    if(thereIsEnemy === false && Math.random() <=0.3 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold');
            molla.frame = 8
            game.physics.enable(plat);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);


      }
    flag=0;
    }

   function create_platform1(x){
    altezza -= x;
    larghezza =  Math.random()*100 + 250;

    //valori nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);


    //nemico
    if(i<23 && Math.random() <=0.2){
        ene = enemy.create(larg+80, alt-98, 'enemy');
        game.physics.enable(ene);
        ene.body.velocity.y = -400
        ene.body.bounce.set(1)
        thereIsEnemy = true;
      }

    //molla
    alt = altezza;
    larg = larghezza;
    if(thereIsEnemy === false && Math.random() <=0.3 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold',8);
            molla.frame = 8;
            game.physics.enable(molla);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);
      }
    flag=1;
    }

    function create_platform2(x){
    altezza -= x;
    larghezza = Math.random()*100+500;
    //valori per il nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);

    //nemico
    if(Math.random() <=0.2 && i<23){
        ene = enemy.create(larg+80, alt-150, 'enemy');
        ene.body.velocity.y = -400
        ene.body.bounce.set(1)
        thereIsEnemy = true;
      }

    //molla
    if(thereIsEnemy === false && Math.random() <=0.3 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold',8);
            game.physics.enable(molla);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);
      }
    flag=2;
    }

    function create_platforma(x){
    altezza -= x;
    larghezza = Math.random()*100;

    //valori per il nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform2');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);

    //nemico
    if(Math.random() <=0.27 && i<23){
        ene = enemy.create(larg+80, alt-150, 'enemy');
        ene.body.velocity.y = -400
        ene.body.bounce.set(1)
        thereIsEnemy = true;
      }

    //molla
    if(thereIsEnemy === false && Math.random() <=0.3 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold');
            game.physics.enable(molla);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);

      }

    flag=0;
    }

    function create_platform1a(x){
    altezza -= x;
    larghezza =  Math.random()*100 + 250;

    //valori per il nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform2');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);

    //nemico
    if(Math.random() <=0.27 && i<23){
        ene = enemy.create(larg+80, alt-98, 'enemy');
        ene.body.velocity.y = -400
        ene.body.bounce.set(1)
        thereIsEnemy = true;
      }

    //molla
    if(thereIsEnemy === false && Math.random() <=0.3 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold');
            game.physics.enable(molla);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);
      }

    flag=1;
    }

    function create_platform2a(x){
    altezza -= x;
    larghezza = Math.random()*100+500;

    //valori per il nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform2');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);

    //nemico
    if(Math.random() <=0.27 && i<23){
        ene = enemy.create(larg+80, alt-150, 'enemy');
        ene.body.velocity.y = -400
        ene.body.bounce.set(1)
        thereIsEnemy = true;
      }

    //molla
    if( thereIsEnemy === false && Math.random() <=0.3 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold');
            game.physics.enable(molla);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);

      }

    flag=2;
    }

    function create_platformb(x){
    altezza -= x;
    larghezza = Math.random()*100;

    //valori per il nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform3');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);

    //nemico
    if(Math.random() <=0.34 && i<23){
        ene = enemy.create(larg+80, alt-150, 'enemy');
        ene.body.velocity.y = -400;
        ene.body.bounce.set(1);
        thereIsEnemy = true;
      }

    //molla
    if(thereIsEnemy === false && Math.random() <=0.1 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold');
            game.physics.enable(molla);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);
      }

    flag=0;
    }

    function create_platform1b(x){
    altezza -= x;
    larghezza =  Math.random()*100 + 250;

    //valori per il nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform3');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);

    //nemico
    if(Math.random() <=0.34 && i<23){
         ene = enemy.create(larg+80, alt-150, 'enemy');
         ene.body.velocity.y = -400
         ene.body.bounce.set(1)
         thereIsEnemy = true;
      }

    //molla
    if(thereIsEnemy === false && Math.random() <=0.1 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold');
            game.physics.enable(molla);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);
      }

    flag=1;
    }

    function create_platform2b(x){
    altezza -= x;
    larghezza = Math.random()*100+500;

    //valori per il nemico
    alt = altezza;
    larg = larghezza;

    //crea piattaforma
    plat = platforms.create(larghezza, altezza, 'platform3');
    game.physics.enable(plat);
    plat.body.allowGravity = false;
    plat.body.setSize(145, 0, 25, 0);

    //nemico
    if(Math.random() <=0.34 && i<23){
        ene = enemy.create(larg+80, alt-150, 'enemy');
        ene.body.velocity.y = -400
        ene.body.bounce.set(1)
        thereIsEnemy = true;

      }

    //molla
    if(thereIsEnemy === false && Math.random() <=0.1 && i<23){
            molla = gold.create(larg+80, alt-50, 'gold');
            game.physics.enable(molla);
            molla.body.allowGravity = false;
            molla.animations.add("up",[8,7,6,5,4,3,2,1]);
      }

    flag=2;

    //creo barra avanzamento
    barra = game.add.sprite(950, 140, 'barra')
    barra.fixedToCamera = true;

    //faccia
    faccia = game.add.sprite(960, 800, 'faccia');
    game.physics.enable(faccia);

    //faccia.body.allowGravity = false;
    faccia.anchor.set(0.5,0.5);
    faccia.scale.setTo(0.7);
    faccia.fixedToCamera = true;

    //pergameneopache
    pergamene = game.add.sprite(880, 30, 'pergamene');
    pergamene.scale.setTo(0.7);
    pergamene.fixedToCamera = true;

    //pausa
    pausa = game.add.sprite(30, 25, 'pausa');
    pausa.inputEnabled = true;
    pausa.fixedToCamera = true;
    pausa.scale.setTo(0.7);
    pausa.events.onInputDown.add(function () {
    game.paused = true;
    menupausa = game.add.sprite(game.camera.x+312,game.camera.y+284,'schermatapausa');
    play = game.add.sprite(game.camera.x+482.25, game.camera.y+355, 'play');
    play.scale.set(0.5);
    play.inputEnabled = true;
    play.events.onInputDown.add(function () {
    game.paused = false;
    menupausa.destroy();
    play.destroy();
    ricomincia.destroy();
    home.destroy();
    });
    ricomincia = game.add.sprite(game.camera.x+584.7, game.camera.y+351.2, 'ricomincia');
    ricomincia.scale.set(0.5);
    ricomincia.inputEnabled = true;
    ricomincia.events.onInputDown.add(function() {  window.location.href = "./index.html";}, this);
    home = game.add.sprite(game.camera.x+373.3, game.camera.y+351, 'home');
    home.scale.set(0.5);
    home.inputEnabled = true;
    home.events.onInputDown.add(function() {  window.location.href = "./menu.html";}, this);
    });

    }

var counter = 0;
var morte = false;
var splash;
var botto = true;
var check1 = false;
var check2 = false;
var check3 = false;


function update () {

  current_time = (counter - parseInt((game.time.time-startTime)/1000));

  //time_label.setText("Time: " + current_time);

  //morte
  if(player.y-game.camera.y>790){
  counter = 0;
  morte = false;
  game.input.enabled = true;
  cursors.right.isDown = false;
  cursors.left.isDown = false;
  if(check1==false && check2==false)
  {y=game.camera.y;
  x=game.camera.x;
  enemy.kill();
  platforms.kill();
  tp.kill();
  gold.kill();
  game.paused=true;
  splash = game.add.sprite(x,y,'morte1');
  ricomincia = game.add.sprite(game.camera.x+840, game.camera.y+670, 'ricominciaoro');
  ricomincia.scale.set(0.7);
  ricomincia.inputEnabled = true;
  ricomincia.events.onInputDown.add(function() {  window.location.href = "./index.html";}, this);
  home = game.add.sprite(game.camera.x+920, game.camera.y+670, 'homeoro');
  home.scale.set(0.7);
  home.inputEnabled = true;
  home.events.onInputDown.add(function() {  window.location.href = "./menu.html";}, this);
  }
  else if (check1 == true && check2 == false)
  {player.body.x = tp1.body.x;
  player.body.y = tp1.body.y-60;
  game.camera.y= tp1.body.y-500;
  player.body.setSize(75, 95, 0, 0);
  plat.body.setSize(145, 0, 25, 0);
  molla.body.setSize(0, 0, 0, 0);}
  else if (check2 == true)
  {player.body.x = tp2.body.x;
  player.body.y = tp2.body.y-60;
  game.camera.y= tp2.body.y-500;
  player.body.setSize(75, 95, 0, 0);
  plat.body.setSize(145, 0, 25, 0);
  molla.body.setSize(0, 0, 0, 0);}
  else if (check2 == true && check1 == true)
  {player.body.x = tp2.body.x;
  player.body.y = tp2.body.y-60;
  game.camera.y= tp2.body.y-500;
  player.body.setSize(75, 95, 0, 0);
  plat.body.setSize(145, 0, 25, 0);
  molla.body.setSize(0, 0, 0, 0);
  }

  }


    game.physics.arcade.collide(gold, platforms);
    game.physics.arcade.collide(player, gold, touch_gold);
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, tp1, touch_tp1);
    game.physics.arcade.collide(player, tp2, touch_tp2);
    game.physics.arcade.collide(player, tp3, touch_tp3);
    game.physics.arcade.collide(tp, platforms);
    game.physics.arcade.collide(tp1, platforms);
    game.physics.arcade.collide(tp2, platforms);
    game.physics.arcade.collide(tp3, platforms);
    game.physics.arcade.collide(enemy, platforms);
    game.physics.arcade.overlap(player, enemy, touch_enemy);


    player.body.velocity.x = 0;

    //comandi player
    if (cursors.left.isDown)
    {
        player.body.velocity.x = -350;
        if (player.body.onFloor() || player.body.touching.down)
        player.animations.play("run dx", 15, false);
    }
    else if (cursors.right.isUp && player.body.velocity.y>=0)
    {
        player.frame = 13;
    }

    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 350;
        if (player.body.onFloor() || player.body.touching.down)
        player.animations.play("run dx", 15, false);
        else player.animations.stop("run")
    }


    if (player.body.velocity.x < 0)
    {
        player.scale.x = -1;
    }

    if (player.body.velocity.x > 0)
    {
        player.scale.x = 1;
    }


    function touch_gold (p,g) {
    if(g.body.touching.up && morte == false)
    {p.body.velocity.y =-950;
    g.animations.play("up", 20, false);
    p.animations.play("up", 20, false)}

    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {  player.animations.play("up",10,false);
        console.log("jump");
        player.body.velocity.y = -850;
        player.body.checkCollision.up = false;
    }

    //faccia si muove
    faccia.cameraOffset.y = player.y / 18 + 610;

    //vittoria
    if(game.camera.y < tp3.y-200)
    {
    if(check1 == true && check2 == true && check3 ==true)
    {splash = game.add.sprite(game.camera.x,game.camera.y-2,'vittoria1');
    home = game.add.sprite(game.camera.x+920, game.camera.y+670, 'homeoro');
    home.scale.set(0.7);
    home.inputEnabled = true;
    home.events.onInputDown.add(function() {  window.location.href = "../../menu.html";}, this);
    game.paused = true}
    else if (check3 == false)
    {cursors.right.isDown = false;
    cursors.left.isDown = false;
    jumpButton.isDown = false;
    game.input.enabled = false;
    player.body.setSize(0, 0, 0, 0);
    //plat.body.setSize(0,0,0,0);
    molla.body.setSize(0,0,0,0);}
    else {splash = game.add.sprite(game.camera.x,game.camera.y-2,'vittoria2');
    home = game.add.sprite(game.camera.x+920, game.camera.y+670, 'homeoro');
    home.scale.set(0.7);
    home.inputEnabled = true;
    home.events.onInputDown.add(function() {  window.location.href = "./menu.html";}, this);
    game.paused = true;}
    }

    //camera parte
     if(jumpButton.isDown)
    {
      counter += 1;
      startTime = game.time.time;
    }

    //camera si muove
    if(counter >= 1)
    {
     game.camera.y -=2
    ;}
    }

    //touchpoints
    function touch_tp1(p, t) {
    t.kill();
    y=game.camera.y;
    x=game.camera.x;
    game.paused = true;
    check1 = true;
    splash = game.add.sprite(x,y,'Pergamena1');
    splash.inputEnabled = true;
    splash.events.onInputDown.add(splash_clicked);
    presa = game.add.sprite(880, 30, 'presa');
    presa.scale.setTo(0.7);
    presa.fixedToCamera = true;

    };

    function splash_clicked()
    {splash.destroy();
    game.paused = false;
    };


    function touch_tp2(p, t) {
      t.kill();
      y=game.camera.y;
      x=game.camera.x;
      game.paused = true;
      check2 = true;
      if(check1==true)
      {splash = game.add.sprite(x,y,'Pergamena12');
      splash.inputEnabled = true;
      splash.events.onInputDown.add(splash_clicked);}
      else if(check1==false)
      {splash = game.add.sprite(x,y,'Pergamena2');
      splash.inputEnabled = true;
      splash.events.onInputDown.add(splash_clicked);}
      presa = game.add.sprite(909, 30, 'presa');
      presa.scale.setTo(0.7);
      presa.fixedToCamera = true;
    }

    function touch_tp3(p, t) {
      t.kill();
      y=game.camera.y;
      x=game.camera.x;
      check3 = true;
      if(check1==false && check2==true)
      {splash = game.add.sprite(x,y,'Pergamena23');
      splash.inputEnabled = true;
      splash.events.onInputDown.add(splash_clicked);}
      else if(check1==true && check2==false)
      {splash = game.add.sprite(x,y,'Pergamena13');
      splash.inputEnabled = true;
      splash.events.onInputDown.add(splash_clicked);}
      else if(check1==true && check2==true)
      {splash = game.add.sprite(x,y,'Pergamena123');
      splash.inputEnabled = true;
      splash.events.onInputDown.add(splash_clicked);}
      else if(check1==false && check2==false)
      {splash = game.add.sprite(x,y,'Pergamena3');
      splash.inputEnabled = true;
      splash.events.onInputDown.add(splash_clicked);}
      game.paused = true;
      presa = game.add.sprite(940, 30, 'presa');
      presa.scale.setTo(0.7);
      presa.fixedToCamera = true;
      player.body.allowGravity = false;
    }

    function touch_enemy(p,e) {
      counter = 0;
      if(morte==false)
      {e.body.velocity.x=0;
      e.body.velocity.y=0;
      cursors.right.isDown = false;
      cursors.left.isDown = false;
      jumpButton.isDown = false;
      game.input.enabled = false;
      p.body.velocity.y =-300;
      player.body.setSize(0, 0, 0, 0);
      //molla.body.setSize(0,0,0,0);
      //plat.body.setSize(0,0,0,0);
      plat1.body.setSize(0,0,0,0);
      }
      morte = true;
      }

    function render () {
      //game.debug.cameraInfo(game.camera, 32, 600);

    }
