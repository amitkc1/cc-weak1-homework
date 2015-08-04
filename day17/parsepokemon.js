//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//
//function parsePokemon(urlpath){
//    var request = new XMLHttpRequest();
//    request.open('GET', urlpath, false);
//    request.send();
//    if (request.status >= 200 && request.status < 400){
//        var data = JSON.parse(request.responseText);
//    }
//    
//    else{
//        console.log("An error occurred"+request.status);
//    }
//}
//
//parsePokemon('./pokemon.json');


var fs = require('fs');
fs.readFile('pokemon.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var obj = JSON.parse(data);
    for(var number =0;number<obj.objects[0].pokemon.length;number++){
        console.log(obj.objects[0].pokemon[number].name);
    }
    
});