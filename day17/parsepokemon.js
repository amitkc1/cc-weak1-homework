var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function parsePokemon(urlpath){
    var request = new XMLHttpRequest();
    request.open('GET', urlpath, false);
    request.send();
    if (request.status >= 200 && request.status < 400){
        var data = JSON.parse(request.responseText);
    }
    
    else{
        console.log("An error occurred"+request.status);
    }
}

parsePokemon('./pokemon.json');
