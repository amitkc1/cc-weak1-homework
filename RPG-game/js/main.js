//Game variables
var selectedCharElem = null;
var player = null;
var enemy = null;
var game = null;

//Element variables
var chooseSection = document.getElementById("chooseSection");
var battleSection = document.getElementById("battleSection");
var marioElem = document.getElementById("aldrenElem");
var turtleElem = document.getElementById("BadukElem");
var connellElem = document.getElementById("connellElem");
var playerNameInput = document.getElementById("playerNameInput");
var startGameBtn = document.getElementById("startGameBtn");
var marioHP = document.getElementById("marioHP");
var turtleHP = document.getElementById("turtleHP");
var attackBtn = document.getElementById("attackBtn");
var battleStatus = document.getElementById("battleStatus");

function abc(){
   startGameBtn.disabled=true;
};



var initGame = function () {
    battleSection.style.display = "none";
};

var startGame = function (playerName) {

    var playerHp = null;
    var enemyHp = null;

    if (selectedCharElem === marioElem) {
        playerHp = marioHP;
        enemyHp = turtleHP
    } else {
        playerHp = turtleHP;
        enemyHp = marioHP;
    }

    player = new Player(playerName, playerHp);
    enemy = new Enemy(enemyHp);
    game = new Game(player, enemy);
    chooseSection.style.display = "none";
    battleSection.style.display = "block";

};

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
            battleStatus.innerHTML = "GAME OVER";
        }

        return gameActive;
    };

    this.processAttack = function (attacker, victim) {
        var attPwr = attacker.getAttackPwr();
        victim.getAttacked(attPwr);
        console.log(attacker.name);
        battleStatus.innerHTML = attacker.name + " attacked " + victim.name + " for " + attPwr + " attack power";
        return self.checkGameStatus()
    };
};

var Player = function (name, hpElem) {
    var self = this;
    this.hp = 100;
    this.name = name;
    this.playerHPElem = hpElem;
    
    var displayHealth = function() {
        self.playerHPElem.innerHTML = self.hp + " (Player)";
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

var Enemy = function (hpElem) {
    var self = this;
    this.hp = 100;
    this.name = "Turtle Dude";
    this.enemyHPElem = hpElem;
    
    var displayHealth = function() {
        self.enemyHPElem.innerHTML = self.hp + " (Enemy)";  
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

    if (!name || !selectedCharElem) {
        alert("You must select a character and enter a name dummy!");
    } else {
        startGame(name);
    }
});

function enableStartButton(){
    if(selectedCharElem && playerNameInput.value.length>0){
        startGameBtn.disabled=false;
    }
    else if(playerNameInput.value.length==0){
        startGameBtn.disabled=true;
    }
};

playerNameInput.addEventListener('keypress',function(){
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
    if (game.processAttack(game.player, game.enemy)) {
        
        setTimeout(function() {
            game.processAttack(game.enemy, game.player);
        }, 2500);
        
    }
    
    
    
});

initGame();
abc();