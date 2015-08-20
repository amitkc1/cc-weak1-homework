

function passwordGenerator(passwordLength){
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var numbers="0123456789"
    var space =" ";
    var text = "";
    for( var i=0; i < passwordLength-3; i++ ){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
//    console.log("Text after for loop: "+text);
    text=text.concat(numbers.charAt(Math.floor(Math.random() * numbers.length)));
    text[0].toLocaleLowerCase();
    text[1].toLocaleUpperCase();
    text=space.concat(text);
return text;
}

for(var j=0;j<50;j++){
    var result =passwordGenerator(8);
    console.log(result+"\n");
}
