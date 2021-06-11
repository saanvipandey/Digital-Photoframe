function preload()
{

}

function setup()
{
    canvas = createCanvas(500, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(450, 70, 40);

    fill(171, 3, 248);
    stroke(171, 3, 248);
    circle(451, 40, 25);

    fill(171, 3, 248);
    stroke(171, 3, 248);
    circle(451, 98, 25);

    fill(171, 3, 248);
    stroke(171, 3, 248);
    circle(480, 70, 25);

    fill(171, 3, 248);
    stroke(171, 3, 248);
    circle(421, 70, 25);

    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(50, 250, 40);

    fill(171, 3, 248);
    stroke(171, 3, 248);
    circle(51, 220, 25);

    fill(171, 3, 248);
    stroke(171, 3, 248);
    circle(51, 280, 25);

    fill(171, 3, 248);
    stroke(171, 3, 248);
    circle(80, 250, 25);

    fill(171, 3, 248);
    stroke(171, 3, 248);
    circle(23, 250, 25);
    
}

function Save()
{
    save('Digital_photo.png');
}