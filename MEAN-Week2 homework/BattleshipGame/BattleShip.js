var grid = []
var rows = 10;
var columns = 10;

function createGrid(){
    for(var rowNumber=0;rowNumber<rows;rowNumber++){
        grid.push([]);
        for(var colNumber=0;colNumber<columns;colNumber++){
            grid[rowNumber][colNumber]=rowNumber+","+colNumber;
        }
    }    
    console.log(grid);
}

var location = function(shipExists,hitOrMiss){
    this.ship=generateRandomNumber(0,10);
    this.hit=hitOrMiss;
}

var generateRandomNumber = function(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
createGrid();