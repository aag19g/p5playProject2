let miniMe;
let sheetImg;
let grass, dirt, green, flowers;

function preload(){
    sheetImg = loadImage("Textures-16.png");
}

function setup() {
    new Canvas(800, 800, 'pixelated x3');
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;

    grass = new Group();
    grass.collider = 's';
    grass.spriteSheet = sheetImg;
    grass.addAni({w:16, h:16, row:4, col:3})
    grass.tile = 'g';

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
}
