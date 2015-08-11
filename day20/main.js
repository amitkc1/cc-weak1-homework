var app = angular.module('myFavState',['ngRoute','myFavState.home','myFavState.about','myFavState.whyilove']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        redirectTo:'/home'
    
    }).otherwise({
        redirectTo:'/404'
    });
});
