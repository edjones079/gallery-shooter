class oneD extends Phaser.Scene {


    constructor(){
        super("oneD");
        this.my = {sprite: {}}; 

        this.playerX = 400;
        this.playerY = 400;
        this.bulletTime = false;
    }

    preload(){
        // Assets from Kenny Assets pack "Shape Characters"
        // https://kenney.nl/assets/shape-characters
        this.load.setPath("./assets/");

        this.load.image("player", "card_clubs_A.png");
        this.load.image("bullet", "dice_small_1.png");

    }

    create(){

        let my = this.my;

        // Create the player sprite
        my.sprite.player = this.add.sprite(this.playerX, this.playerY, "player");
        //my.sprite.player.setCollideWorldBounds(true);


        // Create the two sprites, one for each type of smile
        my.sprite.bullet = this.add.sprite(this.bulletX, this.bulletY, "bullet");

        my.sprite.bullet.visible = false;

        this.a_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.d_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
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
            my.sprite.bullet.y -= 15;
        }

        if (this.a_key.isDown && my.sprite.player.x >= 20)
        {
            my.sprite.player.x -= 10;
        }

        if (this.d_key.isDown && my.sprite.player.x <= 780)
        {
            my.sprite.player.x += 10;
        }

        //d_key.on("down", event => {
        //    my.sprite.playerX += 10;
        //});

    }


}