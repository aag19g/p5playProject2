let miniMe;
let sheetImg;
let grass, dirt;

function preload(){
    sheetImg = loadImage("Textures-16.png");

}

function setup() {
    new Canvas(800, 800, 'pixelated x4');
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;

    grass = new Group();
    grass.collider = 's';
    grass.spriteSheet = sheetImg;
    grass.addAni({w:16, h:16, row:4, col:3})
    grass.tile = 'g';
    grass.size(10, 10)

    dirt = new Group();
    dirt.collider = 's';
    dirt.spriteSheet = sheetImg;
    dirt.addAni({w:16, h:16, row:6, col:0})
    dirt.tile = 'd';

    new Tiles([
        'gggggggggggggggg',
        'gddddddgdddddddg',
        'gggggdggggggggdg',
        'ddddddddddddgddg',
        'gggggggggggdgdgg',
        'gddddgddddddgddg',
        'gdgdddddggddgddg',
        'gdgdgggdggdgggdg',
        'gdggggggggdgdddg',
        'gdgddddddgdgdggg',
        'gdgdgggddgdgdddd',
        'gdgdgggggggggdgg',
        'gddddddddddddddg',
        'gggggggggggggggg',
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
