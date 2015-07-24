var app = angular.module('shoppingList',[]);

var controller = app.controller('listCtrl', function($scope) {
  $scope.shoppingList=[];
    $scope.add = function(){                              
    if($scope.shoppingList.indexOf($scope.shoppingItem)==-1){
       $scope.shoppingList.push($scope.shoppingItem);
        $scope.listItems=$scope.shoppingList;
    }
              
    
    }
    $scope.remove = function(index){
        $scope.shoppingList.splice(index,1);
    }
});