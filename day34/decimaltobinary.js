//var readline = require('readline-sync');
//
//var number = readline.question("Enter your number: ");
//var convertTo = readline.question("What would you like your number converted to ? Options: B/H/O: ");
////console.log("ConvertTo is: "+convertTo);
////console.log("Number is: "+number);
//
//function dectobho(num,str){
//    if(str=='B'){
//        //console.log("Entered B");
//        //console.log("ConvertTo is: "+str);
//        //console.log("Number is: "+num);
//        console.log("Result is: "+num.toString(2))
//        return num.toString(2);
//    }
//    
//    else if(str=='H'){
//         console.log("Entered H");
//        console.log("Result is: "+num.toString(16));
//        return num.toString(16);
//    }
//    
//    else if(str=='O'){
//        console.log("Entered O");
//         console.log("Result is: "+num.toString(8));
//        return num.toString(8);
//    }
//    else{
//        return "entered invalid option";
//    }
//}
//
//var result =dectobho(number,convertTo);
//console.log("Result is: "+result);

function dectobho(num,str){
    if(num<0){
      return "Enter a positive number";
    }
  
    if(str=='B'){
        return num.toString(2);
    }
    
    else if(str=='H'){
        return num.toString(16);
    }
    
    else if(str=='O'){
        return num.toString(8);
    }
    
    else{
        return "entered invalid+ option";
    }
}

var result=dectobho(32,'B');

console.log("Result is: "+result);