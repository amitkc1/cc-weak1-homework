var readlineSync = require('readline-sync');
var number1 = parseInt(readlineSync.question('Enter your first number:'));
var number2 = parseInt(readlineSync.question("Enter your second number:"));
var operation = readlineSync.question("Please enter the opeation to perform : add/sub/mul/div: ");
var result;
    
function calculation(){
        
        if(operation==="add"){
        
            add(number1,number2);
            
            function add(num1,num2){
                result = num1+num2;
                return result;
        
            }
        }
    
        else if(operation==="sub"){
            
            sub(number1,number2);
            
            function sub (number1,num2){
                result = num1-num2;
                return result;
            }
        }
        
        else if(operation==="mul"){
            
            mul(number1,number2);
            
            function mul(num1,num2){
                result = num1*num2;
                return result;
            }
        }
        
        else if(operation==="div"){
            
            div(number1,number2);
            
            function div(num1,num2){
                result = num1/num2;
                return result;
            }   
        }
    console.log("The Result is: "+result);
}

result = calculation();


