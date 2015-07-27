var app = angular.module('uglyThings',[]);
app.controller('inputCtrl',function($scope){
    $scope.photos =[];
    $scope.counter =0;
    $scope.submit = function(){
        $scope.photos.push({
            src: ($scope.URL),
            title:($scope.Title),
            caption: ($scope.description),
            comments:[]
        });
        
        $scope.counter++;
            
    };
    
    $scope.remove = function(index){
            $scope.photos.splice(index,1);    
        
    };
    
    $scope.removeComment = function(index,commentIndex){
        $scope.photos[index].comments.splice(commentIndex,1);
    }
    
    $scope.checkCounter = function(){
            return $scope.counter>0;
    };
    
    $scope.addComment = function(index,commentInput){
        $scope.photos[index].comments.push(commentInput);
    };
    
});