var app=angular.module('portfolio.contact',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/contact',{
        controller: 'contactCtrl',
        templateUrl:'contact.tpl.html'
    
    });
});

app.controller('githubCtrl',function($scope){

});