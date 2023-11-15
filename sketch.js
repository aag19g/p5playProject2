let button;

function setup(){
    new Canvas(600, 600);
    background('black');
    textSize(70)
    fill('palegreen');
    textFont('Courier New')
    text('Welcome', 160, 250)


    button = createButton('PLAY');
    button.position(CENTER);
    button.style('background-color', 'black');
    button.style('border', 'transparent');
    button.style('height', '50px');
    button.style('font-size', '30px');
    button.style('color', 'white');

    button.mouseClicked(startG);
}

function startG(){
location.assign("index0.html")
}
