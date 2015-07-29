var app = angular.module('clickerApp',[]);
app.controller("clickController",function($scope,blueService,redService){

    $scope.blueButton = function(){
       if(blueClickCounter==0){
            blueService.resetBlue();
       }
        blueService.incrementBlueLabel();
   };
   
   $scope.redButton = function(){
       if(redClickCounter==0){
            redService.resetRed();
       } 
       redService.incrementBlueLabel();    
   };
   
   $scope.getBlueLabel = function (){
        return blueService.getBlueLabel();
    };
   
    $scope.getRedLabel = function(){
        return redService.getRedLabel();
    };
     
});


app.service('blueService',function(redService){
    var blueClickCounter=100;
    
    this.getBlueLabel = function(){
        return blueClickCounter;   
    }
    
    this.incrementBlueLabel = function (){
        blueClickCounter++;
        redService.decrementRedLabel();    
    }
    
    this.decrementBlueLabel = function(){
        blueClickCounter--;
    }
    
    this.resetBlue = function(){
        blueClickCounter=0;
    }

});

app.service('redService',function(blueService){
    var redClickCounter = 100;
    
    this.getRedLabel = function(){
        return redClickCounter;   
    }
    
    this.incrementRedLabel = function (){
        redClickCounter++;
        blueService.decrementBlueLabel();
    }
    
    this.decrementRedLabel = function(){
        redClickCounter--;
        
    }
    this.resetRed = function(){
        redClickCounter=0;
    }

});

