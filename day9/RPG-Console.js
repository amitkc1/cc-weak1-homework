var readlineSync = require('readline-sync');
var enemies ={};
var randomEnemy=0;
var power=0;
var attackProbability =0;
var counter =0;
var appeared = false;

var Enemy = function(name,health){
    this.name = name;
    this.health = health;
}

var player = function(name,health){
    this.name = name;
    this.health = health;
}

var myPlayer = new player("Mario",500);
enemies[0] = new Enemy('Fierce Demon',200);
enemies[1] = new Enemy('Ugly Wargile',200);
enemies[2] = new Enemy('Weak Skeleton',200);

console.log("Welcome to nobody cares. Population: 6 billion");
initGame();

function initGame(){
generateEnemy();

var input = readlineSync.question("Do you want to attack or run ?");
if(input=='attack'){
    power = generateNumber(100,50);
    attackEnemy(power);
}

if(input=='run'){
    attackProbability = generateNumber(1,2);
    if(attackProbability===1){
        console.log("Escaping");
    }
    else if(attackProbability===2){
        console.log("Running");
        pressKey();
    }
}

function generateEnemy(){
    if(!appeared){
        randomEnemy = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        console.log(randomEnemy);
        console.log(enemies[randomEnemy].name+" has appeared");
        appeared=true;
    }
    
    else{
        counter++;
        console.log(" Keep running..!");
        if(counter>3){
            appeared=false;
            counter=0;
        }
    }
    
   
};

function generateNumber(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function attackEnemy(power){
    enemies[randomEnemy].health -= power;
    if(enemies[randomEnemy].health<0){
        console.log("Enemy "+enemies[randomEnemy].name+" killed. Mario gets additional power");
        myPlayer.health= myPlayer.health+50;
    }
    else{
        console.log("Attacked enemy "+enemies[randomEnemy].name+" with "+power);
        power = generateNumber(100,50);
        attackCharacter(power);
    }
    
}

function pressKey(){
    var answer = readlineSync.question('Press a key to walk');
    if (answer.toLocaleLowerCase()==='print'){
        console.log(myPlayer);  
    }
   generateEnemy();
}

function attackCharacter(power){
    myPlayer.health -= power;
    if(myPlayer.health>0){
        console.log("Enemy attacked player "+myPlayer.name+" with "+power);
        power= generateNumber(50,100);
        attackEnemy(power);
    }
    else{
        console.log("Man down..! Oh, well. He wasn't that good anyway..! :)");
    }
    
}
}