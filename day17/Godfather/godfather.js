var app = angular.module('godfatherApp',[]);
app.controller('godfatherCtrl',function($scope,$http,godfatherService){
    $scope.characters = [];
    
    var success = function(data) {
         $scope.characters = data;
    };
    
    var error = function(err) {

        console.log("Error is "+err);
    };
    
    $scope.downloadChars = function(){
        $scope.characters=godfatherService.getCharacters(success,error);
    }
    
    
    $scope.downloadChars();
});

app.service('godfatherService',function($http){

    var url = 'http://mean.codingcamp.us:6543/hitlist.json';
    
    this.getCharacters = function(onSuccess,onError){
        $http.get(url).success(onSuccess).error(onError);
    }
});