var app=angular.module('myFavState.home',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/home',{
        controller: 'homeCtrl',
        templateUrl:'home.tpl.html'
    
    });
});

app.controller('homeCtrl',function($scope){

});