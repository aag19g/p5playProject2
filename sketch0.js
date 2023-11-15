let miniMe;
// let flowers;
// let score = 0
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

new Tiles(map, 2, 2, 1, 1);

    miniMe = new Sprite(2, 3, 15, 15);
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

    // flowers = new Group();
    // for (let i = 0; i < 10; i++){
    //     let c = createSprite(
    //         random(100, width-100),
    //         random(100, height-100),
    //         10, 10);
    //         c.shapeColor = color(255, 255, 0);
    //         flowers.add(c)
    // }
       
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
        miniMe.changeAni('right');
        miniMe.mirror.x = false;
        miniMe.x--;
	} else if (kb.pressed('right') && isOpen(miniMe.x+1, miniMe.y)) {
        miniMe.changeAni('right');
        miniMe.mirror.x = true;
        miniMe.x++;
    }

    // miniMe.overlap(flowers, collect);
    // fill(255)
    // noStroke();
    // textSize(72);
    // textAlign(CENTER, CENTER);
    // if  (flowers.length > 0) {
    //     text(score, width/2, height/2);
    // }
    // else {
    //     text("you win!", width/2, height/2);
    // }
}

// function collect(player, flowers) {
//  flowers.remove();
//     score += 1;
//   }


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
