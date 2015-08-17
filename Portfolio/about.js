var app=angular.module('portfolio.about',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/about',{
        controller: 'aboutCtrl',
        templateUrl:'about.tpl.html'
    
    });
});

app.controller('aboutCtrl',function($scope){

});