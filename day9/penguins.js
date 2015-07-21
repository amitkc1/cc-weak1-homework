var attackloss = 0;
var flipCoinOverride = 1;
var Party = function(population,name) {
    this.population =population;
    this.name = name;
};

var penguins = new Party(10000000,'antarticans');
var communists = new Party(10000000,'communists');




var successfulAttack = function(partyToBeAttacked){
    if(partyToBeAttacked.name=='antarticans'){
        console.log(partyToBeAttacked.name+" lost "+attackloss+" antarticans");
        penguins.population -=attackloss;
        if(penguins.population>0){
            setTimeout(attackParty(1),2500);
        }
        else{
            console.log("Game Over....!");
        }
        
    }
    else{
        console.log(partyToBeAttacked.name+" suffered "+attackloss+" communists");
        communists.population -=attackloss;
        if(communists.population>0){
            setTimeout(attackParty(1),2500);
        }else{
            console.log("Game Over....!");
        }
        
    }
    
};

var failedAttack = function(partyToBeAttacked){
    if(partyToBeAttacked.name=='antarticans'){
        console.log('Penguins nuke missed the Communists and instead landed in the ocean');
        setTimeout(attackParty(1),2500);
    }
    else{
        console.log(partyToBeAttacked.name+" missed the attack");
        setTimeout(attackParty(2),2500);
    }
    
};


function sendNuke(party, onHit, onMiss){
    var attackResult = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    if(attackResult<5){
        onMiss(party);
    }
    else{
        attackloss = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
        onHit(party);
    }
}
    
var attackParty = function(flipCoinOverride){
   if(flipCoinOverride==0){
     flipCoin = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
   }
   
    flipCoin = flipCoinOverride;
    
    if(flipCoinOverride==2){
        sendNuke(penguins,successfulAttack,failedAttack);
    }
    else{
        sendNuke(communists,successfulAttack,failedAttack);
    }
};

attackParty();