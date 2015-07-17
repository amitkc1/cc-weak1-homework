var Enemy = function(){
    var self = this; 
    this.type ="";
    
    var setType = function (){
        var types =['Ancient Dragon','Prowler','Mighty Grunt'];
        var number = getRandom(0,2);
        self.type =types[number];
    }
    setType();
    this.hitpoints=setHitpoints(self.type);
    this.defense=setDefense(self.hitpoints);
}



function setHitpoints(type){
    if(type==='Ancient Dragon'){
        return getRandom(80,100);
    }
    
    else if(type==='Prowler'){
        return getRandom(50,79);
    }
    
    else{
        return getRandom(20,49);
    }
}

function setDefense(hitpoints){
    return hitpoints *3;
}

function print(enemy){
    console.log("Type: "+enemy.type);
    console.log("Enemy hitpoints: "+enemyArr[objectNumber].hitpoints);
    console.log("Enemy defense: "+enemyArr[objectNumber].defense);
}

var enemyArr = [];
for(var objectNumber =1;objectNumber<=100;objectNumber++){
    enemyArr[objectNumber]= new Enemy();
    console.log("Enemy number: "+objectNumber+" is: ");
    print(enemyArr[objectNumber]);   
}

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}