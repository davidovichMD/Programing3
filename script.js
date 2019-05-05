var side = 25;
var xotArr = []; 
var eatArr = []; 
var gishatichArr = [];
var dinoArr = [];
var dino2Arr = [];
var matrix = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,4,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,5,],
]


function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side); 
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            }
            else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                var norG = new Gishatich(x, y);
                gishatichArr.push(norG);
            }
            else if (matrix[y][x] == 4) {
                var a = new Dino(x,y);
                dinoArr.push(a);
            }
            else if (matrix[y][x] == 5) {
                var b = new Dino2(x,y);
                dino2Arr.push(b);
            }
        }
    }
}


function draw() {

    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if(matrix[i][j]== 3){
                fill("red")
                rect(j * side, i * side, side, side )
            }
            else if(matrix[i][j]== 4){
                fill("purple")
                rect(j * side, i * side, side, side )
            }
            else if(matrix[i][j]== 5){
                fill("blue")
                rect(j * side, i * side, side, side )
            }
        }
        
    }


    for (var i in xotArr) {
        xotArr[i].mul();
    }
    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for(var i in gishatichArr){
        gishatichArr[i].eat();
    }
    for (var i in dinoArr) {
        dinoArr[i].eat(); 
    }
    for (var i in dino2Arr) {
        dino2Arr[i].eat(); 
    }
}