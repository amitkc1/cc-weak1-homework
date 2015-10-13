var app = angular.module('main.home',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/home',{
            controller:'homeCtrl',
            templateUrl:'/views/home/home.tpl.html'
        });
});

app.controller('homeCtrl',function($scope){

});