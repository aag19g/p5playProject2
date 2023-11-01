let button;

function setup(){
    new Canvas(600, 600);
    background('black');
    textSize(70)
    fill('palegreen');
    text('WELCOME', 120, 250)

    button = createButton('PLAY');
    button.position(380, 340);
    button.mouseClicked(startG);

}

function startG(){
location.assign("index0.html")}
