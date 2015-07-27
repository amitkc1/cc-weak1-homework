var app = angular.module('uglyThings',[]);
app.controller('inputCtrl',function($scope){
    $scope.photos =[];
    $scope.submit = function(){
        $scope.photos.push({
            src: ($scope.URL),
            title:($scope.Title),
            caption: ($scope.description),
        });
        
    };
    
    $scope.remove = function(index){
            $scope.photos.splice(index,1);    
        
    };
    
    $scope.addComment = function(){
        $scope.photos.comments = $scope.commentInput;
        $scope.imageComment =$scope.commentInput;  
    };
    
});