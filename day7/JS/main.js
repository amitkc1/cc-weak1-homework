//element variable
var selectedCharElem= null;
var chooseCection = document.getElementById('chooseSection');
var marioElem = document.getElementById('marioElem');
var turtleElem = document.getElementById('turtleElem');
var playerInputName = document.getElementById('playerNameInput');
var startGameButton = document.getElementById('startGameButton');

startGameButton.addEventListener('click',function(){
    var name=playerInputName.value;
    if(name==null||!selectedCharElem){
        alert("Select a char or enter a name..!");
    }
});

marioElem.addEventListener('click',function(){
    selectedCharElem=marioElem;
    selectedCharElem.className = "Well charselected";
    turtleElem.className = "well";
});

turtleElemElem.addEventListener('click',function(){
    selectedCharElem=turtleElem;
    marioElem.className = "well";
});