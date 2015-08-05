var app = angular.module('starwarsApp',[]);
app.controller('starwarsCtrl',function($scope,$http){
    $scope.endPoint="http://swapi.co/api/films/1/";
    $scope.response=""; 
    var success = function(data) {
         $scope.response=data;
    };
    
    var error = function(err) {

        console.log("Error is "+err);
    };
    
    $scope.downloadFilms = function(){
        $scope.response=$http.get($scope.endPoint).success(success).error(error);
     }
    
    $scope.downloadFilms();

});