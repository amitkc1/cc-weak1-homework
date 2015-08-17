var app=angular.module('portfolio.github',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/project',{
        controller: 'projectCtrl',
        templateUrl:'project.tpl.html'
    
    });
});

app.controller('projectCtrl',function($scope){

});