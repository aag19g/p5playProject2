let miniMe;
let sheetImg;
let wall, dirt, green, flowers;

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

    green = new Group();
    green.collider = 's';
    green.spriteSheet = sheetImg;
    green.addAni({w:16, h:16, row:15, col:3})
    green.tile = 'v';

    new Tiles([
        'vvvvvvvvvvvvvvvv',
        'vggggggggggggggv',
        'vgvvvvvvvvvvvvgv',
        'vgvggggggggggvgv',
        'vgvgvvvvvvvvgvgv',
        'vgvgvggggggvgvgv',
        'vgvgvgvvvvgvgvgv',
        'vgvgvgvvvvgvgvgv',
        'vgvgvgvvvvgvgvgv',
        'ggvgvgvvvvvvgvgv',
        'vvvgvggggggggvgv',
        'vvvgvvvvvvvvvvgv',
        'vvvggggggggggggv',
        'vvvvvvvvvvvvvvvv',
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