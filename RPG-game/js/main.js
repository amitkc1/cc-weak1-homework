//Game variables
var selectedCharElem = null;
var player = null;
var enemy = null;
var enemyName = null;
var enemyNames= ['Weak Skeleton', 'Fierce Demon', 'Ugly Wargile'];
var game = null;
var playerAttackCount = 0;
var enemyAttackCount = 0;
var randomNumberCache =[];

//Element variables
var chooseSection = document.getElementById("chooseSection");
var battleSection = document.getElementById("battleSection");
var characterElem = document.getElementById("characterElem");
var enemyElem = document.getElementById("enemyElem");
var playerNameInput = document.getElementById("playerNameInput");
var startGameBtn = document.getElementById("startGameBtn");
var charHP = document.getElementById("characterHealth");
var enemyHP = document.getElementById("enemyHealth");
var attackBtn = document.getElementById("attackBtn");
var yesBtn = document.getElementById("yesBtn");
var battleStatus = document.getElementById("battleStatus");

function abc(){
   startGameBtn.disabled=true;
};



var initGame = function () {
    battleSection.style.display = "none";
};

var startGame = function (enemyName) {

    var playerHealth = null;
    
   playerHealth = charHP;
   

    player = new Player(playerHealth);
    enemy = new Enemy(enemyName);
    game = new Game(player, enemy);
    chooseSection.style.display = "none";
    battleSection.style.display = "block";
    attackBtn.disabled = false;
};

var setCharacters = function(){
    var charImage =null;
    var enemyImage = null;
    
    if(enemyElem.getElementsByTagName('img').length >= 1){
     characterElem.removeChild(characterElem.firstElementChild);
     enemyElem.removeChild(enemyElem.firstElementChild);
    }
    
    if(selectedCharElem==aldrenElem){
        charImage = document.createElement('img');
        charImage.setAttribute('src','../img/aldren.png');
        charImage.setAttribute('style','max-width:200px');    
        characterElem.appendChild(charImage);
    }
    
    else if(selectedCharElem==badukElem){
        charImage = document.createElement('img')
        charImage.setAttribute('src','../img/Baduk.png');
        charImage.setAttribute('style','max-width:200px');    
        characterElem.appendChild(charImage);
    }
    
    else if(selectedCharElem==connellElem){
        charImage = document.createElement('img');
        charImage.setAttribute('src','../img/Connell.png');
        charImage.setAttribute('style','max-width:200px');    
        characterElem.appendChild(charImage);
    }
    enemyName = generateRandomEnemy();
    
    if(enemyName=='Weak Skeleton'){
        enemyImage = document.createElement('img');
        enemyImage.setAttribute('src','../img/enemy1.png');
        charImage.setAttribute('style','max-width:200px'); 
        enemyElem.appendChild(enemyImage);
    }
    
    else if(enemyName=='Fierce Demon'){
        enemyImage = document.createElement('img');
        enemyImage.setAttribute('src','../img/enemy2.png');
        charImage.setAttribute('style','max-width:200px'); 
        enemyElem.appendChild(enemyImage);
    }
    
    else if(enemyName=='Ugly Wargile'){
        enemyImage = document.createElement('img');
        enemyImage.setAttribute('src','../img/enemy3.png');
        charImage.setAttribute('style','max-width:200px'); 
        enemyElem.appendChild(enemyImage);
    }
    startGame(enemyName);
}

var Game = function (player, enemy) {
    var self = this;
    this.player = player;
    this.enemy = enemy;

    var gameActive = true;

    this.checkGameStatus = function () {
        if (self.player.hp <= 0 || self.enemy.hp <= 0) {
            gameActive = false;
        }
        
        if (!gameActive) {
            if(self.enemy.hp<=0){
                battleStatus.innerHTML = player.name +" killed "+enemy.name;
                if(randomNumberCache.length<3){
                    setCharacters();
                }
                
                else{
                    battleStatus.innerHTML = "GAME OVER..! \n"+player.name+" won the game.";
                    attackBtn.disabled = true;
                    self.restartGame();
                }
                
            }
            else{
                battleStatus.innerHTML = "GAME OVER";
                attackBtn.disabled = true;
                this.restartGame();
            }
            
        }
        if(gameActive){
            //attackBtn.disabled=false;
        }
        return gameActive;
    };
    
    this.restartGame = function(){
        setTimeout(function(){
                        battleStatus.innerHTML ="Do you want to play again ?";
                        attackBtn.style.display= 'none';
                        yesBtn.style.display='block';
                        randomNumberCache =0;
                        
                    },3000);
    };

    this.processAttack = function (attacker, victim,counter) {
        if(counter<3){
            var attPwr = attacker.getAttackPwr();
            victim.getAttacked(attPwr);
            console.log(attacker.name);
            battleStatus.innerHTML = attacker.name + " attacked " + victim.name + " for " + attPwr + " damage";
            return self.checkGameStatus()
        }else if(attacker==player){
            playerAttackCount=0;
           attackBtn.disabled=false;
            battleStatus.innerHTML = attacker.name + " attempted attack against " + victim.name + " but missed";
        }else{
            enemyAttackCount=0;
            attackBtn.disabled=false;
            battleStatus.innerHTML = attacker.name + " attempted attack against " + victim.name + " but missed";
        }
        
    };
};


var generateRandomEnemy = function(){
    
    function getRandomNumber(max,min){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
   
    
    randomNumber = getRandomNumber(-1,3);
    
    if(randomNumberCache.indexOf(randomNumber)<0||randomNumberCache.length==0){
        randomNumberCache.push(randomNumber);
    }
    else{
        generateRandomEnemy();
    }
    return enemyNames[randomNumber];
    
}



var Player = function (hpElem) {
    var self = this;
    if(randomNumberCache.length%2!=0){
        this.hp = 150;
    }else{
        this.hp=hpElem.innerHTML.match(/\d+/)[0];
    }
    
    this.name = playerNameInput.value;
    this.playerHPElem = hpElem;
    
    var displayHealth = function() {
        self.playerHPElem.innerHTML = "Health: "+self.hp + ", "+self.name;
    };
    
    this.getAttacked = function (pointsToLose) {
        self.hp -= pointsToLose;
        displayHealth();
    };
    
    this.getAttackPwr = function () {
        var min = 10;
        var max = 35;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    displayHealth();

};

var Enemy = function (enemyName) {
    var self = this;
    this.hp = 100;
    this.name = enemyName;
    this.enemyHPElem = enemyHP;
    
    var displayHealth = function() {
        self.enemyHPElem.innerHTML = "Health: "+self.hp +","+self.name;  
    };
    
    this.getAttacked = function (pointsToLose) {
        self.hp -= pointsToLose;
        displayHealth();
    };
    this.getAttackPwr = function () {
        var min = 10;
        var max = 35;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    
    displayHealth();

};


startGameBtn.addEventListener('click', function () {
    var name = playerNameInput.value;
    setCharacters();

});

function enableStartButton(){
    if(selectedCharElem && playerNameInput.value.length>0){
        startGameBtn.disabled=false;
    }
    else if(selectedCharElem && playerNameInput.value.length==0){
        startGameBtn.disabled=true;
    }
    
    else if(!selectedCharElem && playerNameInput.value.length==0){
        startGameBtn.disabled=true;
    }
    
    else if(!selectedCharElem && playerNameInput.value.length > 0){
        startGameBtn.disabled=true;
    }
};

playerNameInput.addEventListener('keyup',function(){
    enableStartButton();
});


aldrenElem.addEventListener('click', function () {
    selectedCharElem = aldrenElem;
    selectedCharElem.className = "well charSelected";
    badukElem.className = "well";
    connellElem.className = "well";
    enableStartButton();
});

badukElem.addEventListener('click', function () {
    selectedCharElem = badukElem;
    selectedCharElem.className = "well charSelected";
    aldrenElem.className = "well";
    connellElem.className ="well";
    enableStartButton();
});

connellElem.addEventListener('click', function () {
    selectedCharElem = connellElem;
    selectedCharElem.className = "well charSelected";
    aldrenElem.className = "well";
    badukElem.className = "well";
    enableStartButton();
});



attackBtn.addEventListener('click', function () {
    playerAttackCount  = playerAttackCount+1;
    attackBtn.disabled =true;          
    if (game.processAttack(game.player, game.enemy,playerAttackCount)) {
        
        setTimeout(function() {
            attackBtn.disabled =false;
            enemyAttackCount = enemyAttackCount +1;
            game.processAttack(game.enemy, game.player,enemyAttackCount);
        }, 2500);
        
    }  
});

yesBtn.addEventListener('click',function(){
    location.reload();
});

initGame();
abc();