var romanDictionary={
    1:"I",
    2:"II",
    3:"III",
    4:"IV",
    5:"V",
    6:"VI",
    7:"VII",
    8:"VIII",
    9:"IX",
    10:"X"
}

var result = integerToRoman(11);
console.log("Result is: "+result);

function integerToRoman(num){
    if(num>0){
        num = num.toString();
        var length = num.length;
        for(var i =0 ;i<length;i++){
            digit = num % 10;
            division = num/10;
            console.log("Digit is: "+digit);
            console.log("Number is: "+num);
        }
        
    }
    return romanDictionary[num];
}