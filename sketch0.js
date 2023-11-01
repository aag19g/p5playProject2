let miniMe;
let sheetImg;
let wall, dirt, green, flowers;
let mail, flam, key;

function preload(){
    sheetImg = loadImage("Textures-16.png");
}

function setup() {
    new Canvas(800, 800, 'pixelated x3');
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;

    wall = new Group();
    wall.collider = 's';
    wall.spriteSheet = sheetImg;
    wall.addAni({w:16, h:16, row:4, col:3})
    wall.tile = 'g';

    dirt = new Group();
    dirt.collider = 's';
    dirt.spriteSheet = sheetImg;
    dirt.addAni({w:16, h:16, row:6, col:0})
    dirt.tile = 'd';

    green = new Group();
    green.collider = 's';
    green.spriteSheet = sheetImg;
    green.addAni({w:16, h:16, row:15, col:3})
    green.tile = 'v';

    flowers = new Group();
    flowers.collider = 's';
    flowers.spriteSheet = sheetImg;
    flowers.addAni({w:16, h:16, row:15, col:3})
    flowers.tile = 'f';

    new Tiles([
        'ggggggggggggggggvvvvvvvvvvvvvvvv',
        'dddddddgdddddddgvggggggggggggggv',
        'gggggdggggggggdgvgvvvvvvvvvvvvgv',
        'gdddddddddddgddgvgvggggggggggvgv',
        'gggggggggggdgdggvgvgvvvvvvvvgvgv',
        'gddddgddddddgddgvgvgvggggggvgvgv',
        'gdgdddddggddgddgvgvgvgvvvvgvgvgv',
        'gdgdgggdggdgggdgvgvgvgvvvvgvgvgv',
        'gdggggggggdgdddgvgvgvgvvvvgvgvgv',
        'gdgddddddgdgdgggggvgvgvvvvvvgvgv',
        'gdgdgggddgdgddddvvvgvggggggggvgv',
        'gdgdgggggggggdggvvvgvvvvvvvvvvgv',
        'gddddddddddddddgvvvggggggggggggv',
        'ggggggggggggggggvvvvvvvvvvvvvvvv',
        ],
        1, 2,
        16, 16,);

        mail = new Sprite(20, 48);
        mail.spriteSheet = 'icons.png';
        mail.addAni({w:32, h:32, row:6, col:8})
        mail.collider = 'n'

        flam = new Sprite(130, 20); // x, y
        flam.spriteSheet = 'icons.png';
        flam.addAni({w:32, h:32, row:28, col:7})
        flam.collider = 'n'

        key = new Sprite(220, 200); // x, y
        key.spriteSheet = 'icons.png';
        key.addAni({w:32, h:32, row:25, col:12})
        key.collider = 'n'

        miniMe = new Sprite(15, 14, 15, 14);
        miniMe.spriteSheet = 'miniMe.png';
        miniMe.anis.frameDelay = 7
        miniMe.addAnis({
            front: {row: 0, frames: 4},
            back: {row: 1, frames: 4},
            right: {row: 2, frames: 4},
            left: {row: 3, frames: 4},
        });
        miniMe.changeAni('front');
        miniMe.collider = "k"

        miniMe.overlaps(mail, collect);
}

function collect(miniMe, mail){
    mail.remove();
}

function draw() { 
    clear();

    miniMe.speed = 1;
	
	if (kb.pressing('up')) {
        miniMe.changeAni('back');
		miniMe.direction = -90;
	} else if (kb.pressing('down')) {
        miniMe.changeAni('front');
		miniMe.direction = 90;
	} else if (kb.pressing('left')) {
        miniMe.changeAni('left');
        miniMe.mirror.x = false;
		miniMe.direction = 180;
	} else if (kb.pressing('right')) {
        miniMe.changeAni('left');
        miniMe.mirror.x = true;
		miniMe.direction = 0;
	} else {
	  miniMe.speed = 0;
	} 
    
    // if (miniMe.overlap(mail)){
    //     mail.remove();
    // }
}