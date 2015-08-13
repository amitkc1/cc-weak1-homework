var checkers=[[]];
var rows=8;
var columns=8;
var checkerString='\u25A0'+"  ";


function displayCheckers(){
    for(var rowNumber=0;rowNumber<rows;rowNumber++){
        
        for(var columnNumber=0;columnNumber<columns;columnNumber++){
                    process.stdout.write(checkers[rowNumber][columnNumber].visualStatus);
            }
            console.log("\n----------------------");
        }
        
}



var player1Piece = function(){
    this.pieceExists = true;
    this.visualStatus = "0 ";
}

var player2Piece = function(){
    this.pieceExists = true;
    this.visualStatus = "x ";
}

var emptyLocation = function(){
    this.pieceExists = false;
    this.visualStatus='\u25A0'+"  "
}

function createCheckers(){
    for(var rowNumber=0;rowNumber<rows;rowNumber++){
        checkers.push([]);
            for(var columnNumber=0;columnNumber<columns;columnNumber++){
                if(rowNumber<=2){
                    checkers[rowNumber][columnNumber]= new player1Piece();
                }
                
                else if(rowNumber>=5){
                    checkers[rowNumber][columnNumber]= new player2Piece();
                }
                
                else{
                    checkers[rowNumber][columnNumber]= new emptyLocation();
                }
                
            }
    }
}

createCheckers();
displayCheckers();