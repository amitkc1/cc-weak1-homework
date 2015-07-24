var readline = require('readline-sync');
var answer = readline.question("Enter your string:");
splosion(answer);

function splosion(answer){
    var newAnswer="";
    while(answer.length>=1){
        newAnswer=answer.concat(newAnswer);
        answer = answer.substring(0,answer.length-1);
    }
    console.log("Your stringsplosion is: "+newAnswer);
    return newAnswer;
}