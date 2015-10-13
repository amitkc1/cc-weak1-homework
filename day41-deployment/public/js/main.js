var app = angular.module('main',['ngRoute','main.home']);

app.config(function($routeProvider) {
   $routeProvider
   .when('/', {
       redirectTo: '/home'
   }).otherwise({
       redirectTo: '/home'
   });
});

app.controller('mainCtrl',function($scope) {
    $scope.setProductionUrl = function(url) {
        console.log(url);  
    };
    
    
})