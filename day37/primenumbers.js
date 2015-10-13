var primeNumbers=[];
var remainder =0;
function primeNumber(number){
    if(number<=1){
        console.log("Prime number is greater than 1");
    }
    
    else{
        for(var i=2;i<=number;i++){
            for(var j=2;j<i;j++){
                remainder= i%j;
                if(remainder===0){
                    console.log("Entered break clause");
                    break;
                }
                else{
                    console.log("Pushing prime");
                    primeNumbers.push(i);
                }
            }
        }
        return primeNumbers;
    }
}

var result = primeNumber(10);
console.log("Prime numbers are: "+result);
