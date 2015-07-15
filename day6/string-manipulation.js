var readlineSync = require('readline-sync');

var firstName = readlineSync.question('What is your first name ?");
var lastName = readlineSync.question('your last name ?');
var age = readlineSync.question('and how old are you sir ?');
var colour = readlineSync.question('What's your favorite colour?');
var background = readlineSync.question('Tell me about yourself: ');

console.log('First name is '+firstName.toUpperCase()+'\n');
console.log('When you told me about you, you gave me '+background.length+' characters. \n');
console.log('Your name is: '+firstName+' '+lastName+'\n');

if(background.length>20){
    console.log('You mentioned about yourself that: '+background.substring((background.length/2),background.length)+'\n');
}

var substringIndex = readlineSync.question('Enter the index from which you would like me to read back to you about yourself: ');
console.log('You mentioned about yourself that: '+background.substring(substringIndex,background.length+'\n');







