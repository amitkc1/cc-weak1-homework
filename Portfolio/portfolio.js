var app =angular.module('portfolio',['ngRoute','portfolio.home','portfolio.about','portfolio.project','portfolio.contact']);
app.config(function($routeProvider){
    $routeProvider.when('/',{
       redirectTo:'/home'    
    }).otherwise({
        redirectTo:'/404'
    });
});