var princess={
    
    name:"Elizabeth",
    totalCoins:10,
    status:['Big','Small','Powered Up','Dead'],
    star:true,
    
    setName: function(namePicked){
        if(namePicked.contains('Mar')){
            this.name="Mario";
        }
        else{
            this.name="Luigi";
        }
    },
    gotHit: function(hit){
        this.status=hit;
    },
   gameActive: true,
   gotPowerup:function(){
        princess.status="Powered Up";
    },
    addCoin:function(coins){
        this.totalCoins +=coins;
    },
    print:function(){
        console.log(this.name+'\n');
        console.log(this.totalCoins+'\n');
        console.log(this.status+'\n');
        console.log(this.star+'\n');
    }
};

var randomRange =
    function(min,max){
      console.log("Generating number:");
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomResult = randomRange(0,2);

if(randomResult===0){
 princess.gotHit();
 princess.print();
}

else if(randomResult==1){
    princess.gotPowerup();
    princess.print();
}

else if(randomResult==2){
    princess.addCoin(5);
    princess.print();
}

