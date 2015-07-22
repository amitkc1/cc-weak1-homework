var names = ['Sherlock','John','Jack','Lee','Phoebe','Chandler','Rachel','Monica','Ross','Joey'];

for(var x=0;x<names.length;x++){
    console.log("Name is: "+names[x]);
    attemptCall(names[x],dontcall,call,sendText);
}

function attemptCall(name,dontcall,call,sendText){
    console.log(name);
    if(name.replace(/[^a]/g, "").length>1){
        console.log("sending text to: "+name);
        setTimeout(function(){
            sendText()},2000);
    }
    
    else if(name.length%2!=0){
        console.log("Not calling to: "+name);
        setTimeout(dontcall(),2000);
    }
    else if(name.length%2==0){
        console.log("Calling to: "+name);
        setTimeout(call(),2000);
    }
    
    
};


function dontcall(){
    console.log("Dontcall invoked");
    
}

function call(){
    console.log("call invoked");
}

function sendText(){
    console.log("sendText invoked");
}