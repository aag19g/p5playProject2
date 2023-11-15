let miniMe;
let sheetImg;
let wall, dirt, green, flowers;
let map = [
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
    ];

function preload(){
    sheetImg = loadImage("assets/Textures-16.png");
}

function setup() {
    new Canvas(300, 450, 'pixelated x2.5');
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;
    allSprites.tileSize = 16

    wall = new Group();
    wall.collider = 'n';
    wall.spriteSheet = sheetImg;
    wall.addAni({w:1, h:1, row:4, col:3})
    wall.tile = 'g';

    green = new Group();
    green.collider = 's';
    green.spriteSheet = sheetImg;
    green.addAni({w:1, h:1, row:15, col:3})
    green.tile = 'v';

    new Tiles(map, 2, 2, 1, 1,);

    miniMe = new Sprite(2, 12, 15, 14);
    miniMe.spriteSheet = 'assets/miniMe.png';
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

    if (kb.pressed('up') && isOpen(miniMe.x, miniMe.y-1)) {
        miniMe.changeAni('back');
        miniMe.y--;
	} else if (kb.pressed('down') && isOpen(miniMe.x, miniMe.y+1)) {
        miniMe.changeAni('front');
        miniMe.y++;
	} else if (kb.pressed('left') && isOpen(miniMe.x-1, miniMe.y)) {
        miniMe.changeAni('left');
        // miniMe.mirror.x = false;
        miniMe.x--;
	} else if (kb.pressed('right') && isOpen(miniMe.x+1, miniMe.y)) {
        miniMe.changeAni('right');
        // miniMe.mirror.x = true;
        miniMe.x++;
}


function isOpen(x,y){
    let i = floor(x);
    let j = floor(y);
    let tile = map[j][i];
    if (tile == 'g'){
        return true;
    } else{
        console.log('blocked');
        return false;
    }
}
}