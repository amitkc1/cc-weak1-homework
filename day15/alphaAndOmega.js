var alphaAndOmega = [];
var rows = 10;
var cols = 10;
var omega = '\u03A9';
var alpha = '\u03B1';
var aoString="";

function alphaOmega(){
for(var rowNumber=0;rowNumber<rows;rowNumber++){
    alphaAndOmega.push([]);
    if(rowNumber!==0){
        aoString +="\n"
    }
    for(var colNumber=0;colNumber<cols;colNumber++){
        if(colNumber%2==0){
            alphaAndOmega[rowNumber][colNumber]=alpha;
            aoString+=alpha+" ";
        }
        else{
             alphaAndOmega[rowNumber][colNumber]=omega;
            aoString +=omega+" ";    
        }
        }
    }
    console.log(aoString);
    //console.log(alphaAndOmega);
}

alphaOmega();
