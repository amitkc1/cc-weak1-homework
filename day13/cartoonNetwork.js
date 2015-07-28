var app = angular.module('cartoonNetworkApp',[])
app.controller('mainController',function($scope,cnService){
    $scope.getCartoon = function (){
        cnService.getCartoon();   
    }
    
    $scope.submit = function(){
        cnService.addCartoon($scope.formData);
    }
    
    $scope.formData ={};
});



app.controller('displayCartoon',function($scope,cnService){
    $scope.getCartoons = function (){
        return cnService.getCartoons();
    }
});

app.service('cnService',function(displayService){
    
    this.getCartoons = function(){
        return displayService.cartoons;   
    }
    
    this.addCartoon = function (cartoon){
        displayService.cartoons.push(cartoon);    
    }

});