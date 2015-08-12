var checkers=[[]];
var rows=8;
var columns=8;
var checkerString='\u25A0'+"  ";
function displayCheckers(){
    for(var rowNumber=0;rowNumber<rows;rowNumber++){
        
        for(var columnNumber=0;columnNumber<columns;columnNumber++){
//            if(rowNumber%2==0){
//                if(columnNumber%2==0){
//                  process.stdout.write('\033[0;31m');
//                    
//                }
//            }
            
                process.stdout.write(checkerString);
        
            
        }
        console.log("\n----------------------");
    }
}

displayCheckers();