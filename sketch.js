let button;

function setup(){
    new Canvas(600, 600);
    background('black');
    textSize(70)
    fill('palegreen');
    textFont('Courier New')
    text('Welcome', 160, 250)

    button = createButton('PLAY');
    button.position(280, 350);
    button.mouseClicked(startG);
}

function startG(){
location.assign("index0.html")
}
