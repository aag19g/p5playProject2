let miniMe;
let tiles, tilesGroup;

function preload(){
    miniMe = new Sprite(15, 14, 15, 14);
    miniMe.spriteSheet = 'miniMe.png';
    miniMe.anis.frameDelay = 8
    miniMe.addAnis({
        front: {row: 0, frames: 4},
        back: {row: 1, frames: 4},
        right: {row: 2, frames: 4},
        left: {row: 3, frames: 4},
    });
    miniMe.changeAni('front');
    miniMe.collider = "k"
}

function setup() {
    new Canvas(500, 500, 'pixelated x4');
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;

    tiles = new Group();
    tiles.w = 10;
    tiles.h = 10;
    tiles.tile = '=';
    tiles.collider = 's';
    tiles.color = '#5E8C61'

    tilesGroup = new Tiles([
        '================',
        '================',
        '================',
        '================',
        '================',
        '================',
        '================',
        '================',
        '================',
        '================',
        '================',
        '================',
        '================',
        ],
        50,
        40,
        tiles.w + 0,
        tiles.h + 0)
}

function draw() { 
    clear();
    
    if (kb.pressed('left')) {
        miniMe.changeAni('left');
        miniMe.mirror.x = false;
        miniMe.vel.x = -.5;
        miniMe.vel.y = 0;
    } else if (kb.pressed('up')){
        miniMe.changeAni('back');
        miniMe.vel.y = -.5;
        miniMe.vel.x = 0;
    } else if (kb.pressed('down')){
        miniMe.changeAni('front');
        miniMe.vel.y = .5;
        miniMe.vel.x = 0;
    } else if (kb.pressed('right')){
        miniMe.changeAni('left');
        miniMe.mirror.x = true;
        miniMe.vel.y = 0;
        miniMe.vel.x = .5;
    }
}
