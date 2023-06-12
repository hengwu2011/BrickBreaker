/*TO DO/*
Has a paddle
has a ball
goal to break all of the bricks
score



*/


//let baller = new Ball(49,57,99)
let paddle = new Paddle(350,600)

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
//baller.physics()
//baller.display()
}
function draw(){
background(0);
paddle.show()
//baller.physics()
//baller.display()
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
       paddle.move(-5)
       console.log("MOVING LEFT")
      } else if (keyCode === RIGHT_ARROW) {
        paddle.move(5)
      console.log("MOVING RIGHT")
      
}
}


