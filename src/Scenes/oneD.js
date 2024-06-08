class oneD extends Phaser.Scene {


    constructor(){
        super("oneD");
        this.my = {sprite: {}}; 

        this.playerX = 700;
        this.playerY = 400;
        this.bulletTime = false;
    }

    preload(){
        // Assets from Kenny Assets pack "Shape Characters"
        // https://kenney.nl/assets/shape-characters
        this.load.setPath("./assets/Cars");
        this.load.image("player", "taxi.png");
        this.load.image("enemy1", "scooter.png");
        this.load.image("enemy2", "buggy.png");
        this.load.image("enemy3", "truck.png");

        this.load.setPath("./assets");
        this.load.image("bullet", "dice_small_1.png");

        this.load.setPath("./assets");
        this.load.audio("song", ["'Beat Mekanik - Swing Party.mp3'"]);

    }

    create(){

        let my = this.my;

        // Create the player sprite
        my.sprite.player = this.add.sprite(this.playerX, this.playerY, "player");
        //my.sprite.player.setCollideWorldBounds(true);

        my.sprite.song = this.add.sprite


        // Create the two sprites, one for each type of smile
        my.sprite.bullet = this.add.sprite(this.bulletX, this.bulletY, "bullet");

        my.sprite.bullet.visible = false;

        this.w_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.s_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.space_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
    }
    
    update(){

        let my = this.my;
        

        if (Phaser.Input.Keyboard.JustDown(this.space_key))
        {
            my.sprite.bullet.visible = true;
            my.sprite.bullet.x = my.sprite.player.x;
            my.sprite.bullet.y = my.sprite.player.y;
            this.bulletTime = true;
        }

        if (this.bulletTime)
        {
            my.sprite.bullet.x -= 15;
        }

        if (this.w_key.isDown && my.sprite.player.y >= 400)
        {
            my.sprite.player.y -= 10;
        }

        if (this.s_key.isDown && my.sprite.player.y <= 580)
        {
            my.sprite.player.y += 10;
        }

        //d_key.on("down", event => {
        //    my.sprite.playerX += 10;
        //});

    }


}