var app = angular.module('todoApp',[]);
app.controller('todoCtrl',function($scope,$http){
    $scope.endPoint="http://mean.codingcamp.us/todo/amitc";
    $scope.response=""; 
    $scope.itemList=[];
    $scope.strikeList = [];
    
    $scope.add = function(){
     
        if($scope.itemList.indexOf($scope.todoItem)==-1){
            $scope.itemList.push($scope.todoItem); 
            $scope.postList($scope.todoItem);             
        }
        
    }
    
    $scope.remove = function(index){
        $scope.deleteItem($scope.itemList[index]);
        $scope.listItems.splice(index,1);
        
    }

    $scope.check = function(index){
        $scope.strikeList.push($scope.itemList[index]); 
        $scope.listItems.splice(index,1);
    }
 
    
    $scope.postList = function(item){
        newlistItem ={
            title:item,
            description: item+"--abc",
            completed:true,
            price:$scope.todoItemPrice,
            imgUrl:$scope.todoItemImage
        }
        
        $http.post($scope.endPoint,newlistItem).success(success).error(error);
    }
    
    $scope.deleteItem = function(item){
        
        newlistItem ={
            title:item,
            description: item+"--abc",
            completed:true,
            price:$scope.todoItemPrice,
            imgUrl:$scope.todoItemImage
        }
        $http.delete($scope.endPoint,newlistItem).success(success).error(error);
    }
    
    $scope.getList = function(){
        $scope.response=$http.get($scope.endPoint).success(success).error(error);
     }
    
    
    var success = function(data){
        $scope.listItems=$scope.itemList;
        console.log(data);
    }
    
    var error = function(err) {

        console.log("Error is "+err);
    };

});