let miniMe;
let sheetImg, sheetImg4;
let walls, dirt, green;
let map = [
    'gggggggggggggggg',
    'dddddddgdddddddg',
    'ggggdggggggggddg',
    'gdddddddddddgddg',
    'gggggggggggdgdgg',
    'gddddgddddddgddg',
    'gdgdddddggddgddg',
    'gdgdgggdggdgggdg',
    'gdggggggggdgdddg',
    'gdgddddddgdgdggg',
    'gdgdgggddgdgdddd',
    'gdgdgggggggggdgg',
    'gddddddddddddddg',
    'gggggggggggggggg'
    ];

function preload(){
    sheetImg = loadImage("assets/Textures-16.png");
}

function setup() {
    new Canvas(300, 450, 'pixelated x2.5');
    world.gravity.y = 10;
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;
    allSprites.tileSize = 16;

    walls = new Group();
    walls.spriteSheet = sheetImg;
    walls.addAni({w:1, h:1, row:4, col:3})
    walls.collider = 'n';
    walls.tile = 'g';

    dirt = new Group();
    dirt.collider = 'n';
    dirt.spriteSheet = sheetImg;
    dirt.addAni({w:1, h:1, row:6, col:0})
    dirt.tile = 'd';

new Tiles(map, 0, 0, 1, 1);

    miniMe = new Sprite(2, 3, 16, 16);
    miniMe.spriteSheet = 'assets/miniMe.png';
    miniMe.anis.frameDelay = 19
    miniMe.addAnis({
            front: {row: 0, frames: 4},
            back: {row: 1, frames: 4},
            right: {row: 2, frames: 4},
            left: {row: 3, frames: 4}
    });
    miniMe.changeAni('front');
    miniMe.collider = "k"
       
    button = createButton('level2');
    button.position(690, 480);
    button.mouseClicked(startG);
}

function startG(){
    location.assign("index1.html")
}

function draw() { 
    clear();

	if (kb.pressed('up') && isOpen(miniMe.x, miniMe.y-1)) {
        miniMe.changeAni('back');
        miniMe.y--;
	} else if (kb.pressed('down') && isOpen(miniMe.x, miniMe.y+1)) {
        miniMe.changeAni('front');
        miniMe.y++;
	} else if (kb.pressed('left') && isOpen(miniMe.x-1, miniMe.y)) {
        miniMe.changeAni('left');
        miniMe.mirror.x = false;
        miniMe.x--;
	} else if (kb.pressed('right') && isOpen(miniMe.x+1, miniMe.y)) {
        miniMe.changeAni('left');
        miniMe.mirror.x = true;
        miniMe.x++;
    }
}


function isOpen(x,y){
    let i = floor(x);
    let j = floor(y);
    let tile = map[j][i];
    if (tile == 'd'){
        return true;
    } else{
        console.log('blocked');
        return false;
    }
}
