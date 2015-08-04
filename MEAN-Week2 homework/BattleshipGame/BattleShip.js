var readlineSync = require("readline-sync");
//var fs = require("fs");
//var xCoordinate = 0;
//var yCoordinate = 0;
var coordinates = [];
var grid = [];
var rows = 10;
var columns = 10;
var hitCounter=0;
var counter =0;
//printShip();
createGrid();
printGrid();
getUserInput();


function getUserInput(){
    if(hitCounter<3){
        var xCoordinate = readlineSync.question("Look at the grid. Tell me what line you wanna hit..! Range is 0 to 9: ");
        var yCoordinate = readlineSync.question("Now, tell me what column you wanna hit..! Range is 0 to 9: ");
        
        if(xCoordinate>9||yCoordinate>9||!xCoordinate||!yCoordinate||xCoordinate<0||yCoordinate<0){
            console.log("Coordinates are supposed to be between 0 and 9. Please re-enter the coordinates.");
            getUserInput();
        }
        
        debugger;
        var obj = {x:xCoordinate,y:yCoordinate}
        if(containsObject(obj)) {//containsObject(obj)){  
            console.log("These coordinates have been entered previously. Please enter other coordinates.");
            getUserInput();
        }
        
        else {
            coordinates.push({x:xCoordinate,y:yCoordinate}); 
        }
        
        counter++;
    }
    else if (hitCounter==3){
        console.log("You have won the game...! Resetting the grid...");
        counter=0;
        coordinates.splice(0,coordinates.length);
        hitCounter=0;
        createGrid();
        printGrid();
        getUserInput();
    }
    
    if(counter>0){
        hitOrMiss(xCoordinate, yCoordinate);
    }
    
    
    
}

function containsObject(obj) {
    console.log("Coords:", coordinates);
    return coordinates.reduce(function(prev, curr) {
        return prev || (curr.x == obj.x && curr.y == obj.y);
    }, false);
}

function hitOrMiss(x,y){
    if (typeof x !== "undefined" && typeof y !== "undefined") {
        if(grid[x][y].ship==true){
            console.log("\n\033[0;32m\033[1mBravo, that was a hit..!\033[0m\033[0m");
            grid[x][y].hit = true;
            grid[x][y].visualStatus = "\033[1mX\033[0m  ";
            hitCounter++;
            counter++;
            printGrid();
        }

        else{
            console.log("\n\033[0;31m\033[1mOops..! That was a miss..!\033[0m\033[0m");
            grid[x][y].visualStatus = "\033[1mM\033[0m  ";
            counter++;
            printGrid();
        }
    }
    
    getUserInput();
    
}

    
function generateRandomNumber(min,max){
    if(Math.floor(Math.random()*(max-min))+min===4){
        return true;
    }
    else{
        return false;
    }
}

function location(){
     this.ship = generateRandomNumber(0,5);
     this.hit = "";
    this.visualStatus= "O  ";
    
}


function createGrid(){
    for(var rowNumber=0;rowNumber<rows;rowNumber++){
        grid.push([]);
     
        for(var colNumber=0;colNumber<columns;colNumber++){
            grid[rowNumber][colNumber]= new location();
        }
        
    }
    if(counter>0){
        hitOrMiss();
    }    
    
};

function printGrid(){
       for(var rowNumber=0;rowNumber<rows;rowNumber++){
         console.log("\n");
        for(var colNumber=0;colNumber<columns;colNumber++){
            process.stdout.write(grid[rowNumber][colNumber].visualStatus);
        }
        
    }
      console.log("\n");
}

//function containsObject(obj){
//    for(var number=0;number<coordinates.length;number++){
//        if(coordinates[number].x==obj.x&&coordinates[number].y==obj.y)
//            console.log("Object: "+obj.toString()+" exists at "+number);
//         return true;
//    }
//    console.log("Returning false from containsObject");
//    return false;
//}
//function printShip(){
//    fs.readFile('battleship.txt', 'utf8', function(err, data) {
//    if (err) throw err;
//    console.log(data)
//});
//}

