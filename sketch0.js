let miniMe, targets;
let sheetImg, sheetImg2;
let wall, dirt, green;
let targetEmojis = ['mail', 'flam', 'key'];

let lives = 5;
let points = 0;
let targetPointValue = 1;

function preload(){
    sheetImg = loadImage("Textures-16.png");
    sheetImg2 = loadImage("icons.png")
}

function setup() {
    new Canvas(800, 800, 'pixelated x3');
    rectMode(CENTER);
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;
    textSize(48);

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
        16, 16,);

        targets = new Group();
        for (let i = 0; i < 10; i++) {
            let target = new targets.Sprite(
                random(width),
                random(200,height),
                48, 48, 'k'
            );
            let randomEmoji = targetEmojis[floor(random(targetEmojis.length))];
            target.emoji = randomEmoji;
            target.draw = () => {
                text(randomEmoji,0,0);
            }  

        mail = new Sprite(20, 48);
        mail.collider = 'k'
        mail.spriteSheet = sheetImg2;
        mail.addAni({w:32, h:32, row:6, col:8})
        mail.ani.scale = 0.9

        flam = new Sprite(130, 20); // x, y
        flam.collider = 'k'
        flam.spriteSheet = sheetImg2;
        flam.addAni({w:32, h:32, row:28, col:7})
        flam.ani.scale = 0.5

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

        miniMe.overlaps(targets, collect);
       
        button = createButton('level2');
        button.position(690, 480);
        button.mouseClicked(startG);
}
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