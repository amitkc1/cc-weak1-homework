var app=angular.module('portfolio.about',['ngRoute','portfolio.project']);
app.config(function($routeProvider){
    $routeProvider.when('/about',{
        controller: 'aboutCtrl',
        templateUrl:'about.tpl.html'
    
    });
});

app.controller('aboutCtrl',function($scope){
    $scope.goToProjects = function(){
         var divPosition = $('#projectListing').offset();
        $('html, body').animate({scrollTop: divPosition.top}, "slow");
    }
});