var readlineSync = require('readline-sync');
var enemies =['Fierce Demon','Ugly Wargile','Weak skeleton'];
var enemy = function(name,health){
    this.name = name;
    this.health = health;
}

var fierceDemon = new Enemy('Fierce Demon',100);
var uglyWargile = new Enemy('Ugly Wargile',100);
var weakSkeleton = new Enemy('Weak Skeleton',100);

console.log("Welcome to nobody cares. Population:6 billion");
readlineSync.question('Press a key to walk');
generateEnemy();

var input = readlineSync.question("Do you want to attack or run ?");
if(input=='attack'){
    var power = generateNumber(100,50);
}

if(input=='run'){
    var attackProbability = generateNumber(1,2);
    if(attackProbability===1){
        console.log("Escaping");
    }
    else if(attackProbability===2){
        console.log("Running");
    }
}
function generateEnemy(){
    var randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(randomEnemy+" has appeared");
};

function generateNumber(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function attackEnemy(){
    
}