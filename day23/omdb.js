var app= angular.module('omdb',[]);
app.controller('omdbController',function($scope,$http){
        

    $scope.getDetailsByTitle = function(){
            if(!$scope.year){
                $scope.year="";
            }
            $http.get("http://www.omdbapi.com/?t="+$scope.title+"&y="+$scope.year+"&plot=short&r=json").then(function(data){
                $scope.responseByTitle = data;
            },function(data){
                console.log(data.error);
            })
        
    }
    
    
    $scope.getDetailsById = function(){
             if(!$scope.year){
                $scope.year="";
            }
        
            $http.get("http://www.omdbapi.com/?i="+$scope.id+"&y="+$scope.year+"&plot=short&r=json").then(function(data){
                $scope.responseById = data;
            },function(data){
                console.log(data.error);
            })
        
    }

});