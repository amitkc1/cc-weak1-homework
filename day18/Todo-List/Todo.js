var app = angular.module('todoApp',[]);
app.controller('todoCtrl',function($scope,$http){
    $scope.endPoint="http://mean.codingcamp.us/todo/amitc";
    $scope.response=""; 
    $scope.itemList=[];
    
    $scope.add = function(){
     
        if($scope.itemList.indexOf($scope.todoItem)==-1){
            $scope.itemList.push($scope.todoItem); 
            $scope.postList($scope.todoItem);
             
        }
        
    $scope.check = function(){
            
        
        }
    }
 
    
    $scope.postList = function(item){
        
        newlistItem ={
            title:item,
            description: item+"--abc",
            completed:true
        }
        
        $http.post($scope.endPoint,newlistItem).success(postSucess).error(error);
    }
    
    $scope.getList = function(){
        $scope.response=$http.get($scope.endPoint).success(getSuccess).error(error);
     }
    
     var getSuccess = function(data) {
         $scope.response=data;
    };
    
    var postSucess = function(data){
        $scope.listItems=$scope.itemList;
        console.log(data);
    }
    
    var error = function(err) {

        console.log("Error is "+err);
    };

});