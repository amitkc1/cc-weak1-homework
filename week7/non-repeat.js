function nonRep(str){
    var charArray="";
    charArray=str.split("");
    for(var i=0;i<charArray.length;i++){
        if(charArray.indexOf(charArray[i])==charArray.lastIndexOf(charArray[i])){
            return charArray[i];
        }
        
    }
}

var result= nonRep("aaabb2bbxxy");
console.log("First non-repeated character: "+result);