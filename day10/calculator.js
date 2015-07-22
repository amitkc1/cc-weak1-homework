var app = angular.module('firstApp', []);
app.controller('mainCtrl', function($scope) {
    $scope.number1=0;
    $scope.number2=0;
    $scope.result=0;
    $scope.multiplication=0;
    $scope.sum=function() {
        $scope.result=parseInt($scope.number1, 10)+parseInt($scope.number2, 10)
    }
    $scope.product=function(){
            $scope.multiplication=parseInt($scope.number1, 10)*parseInt($scope.number2, 10)
    }
});