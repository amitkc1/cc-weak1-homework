var readlineSync = require('readline-sync');
var dictionary={};
takeUserInput();
retriveWord();
takeUserInput();
retriveWord();


function createDictionary(word,definition){
    if(!dictionary[word]){
        dictionary[word]= definition;
    }
}

function takeUserInput(){
    var word = readlineSync.question('Enter the word you would like to save: ');
    var definition = readlineSync.question('Enter the definition of the word: ');
    createDictionary(word,definition);
}

function retriveWord(){
    console.log(dictionary);
}





