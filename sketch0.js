let miniMe;
let sheetImg, sheetImg2;
let walls, dirt, green;
let key

let lives = 5;
let points = 0;
let targetPointValue = 1;

function preload(){
    sheetImg = loadImage("Textures-16.png");
    sheetImg2 = loadImage("icons.png")
}

function setup() {
    new Canvas(300, 450, 'pixelated x3');
    world.gravity.y = 10;
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;
    allSprites.tileSize = 16
    textSize(48);

    walls = new Group();
    walls.collider = 'n';
    walls.spriteSheet = sheetImg;
    walls.addAni({w:1, h:1, row:4, col:3})
    walls.tile = 'g';

    dirt = new Group();
    dirt.collider = 's';
    dirt.spriteSheet = sheetImg;
    dirt.addAni({w:1, h:1, row:6, col:0})
    dirt.tile = 'd';

    new Tiles([
        'gggggggggggggggg',
        'dddddddgdddddddg',
        'gggggdggggggggdg',
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
        'gggggggggggggggg',
        ],
        1, 2,
        1, 1,);

        key = new Sprite(220, 200); // x, y
        key.collider = 'k'
        key.spriteSheet = sheetImg2;
        key.addAni({w:32, h:32, row:25, col:12})
        key.ani.scale = 0.5

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
       
        button = createButton('level2');
        button.position(690, 480);
        button.mouseClicked(startG);
}

function collect(p,t) {
    t.remove();
    points += targetPointValue;
    if (!muted) tootSound.play();
}

function startG(){
    location.assign("index1.html")
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


function numberToEmoji(number) {
    const emojiArray = ['0','1️','2️','3️','4️','5️','6️','7️','8️','9️'];
    const numberString = number.toString();
    const emojiString = numberString.split('').map(digit => emojiArray[parseInt(digit,10)]).join('');
    return emojiString;
}

}