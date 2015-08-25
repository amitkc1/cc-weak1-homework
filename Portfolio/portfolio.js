var app =angular.module('portfolio',['ngRoute','portfolio.about','portfolio.project','portfolio.contact']);
app.config(function($routeProvider){
    $routeProvider.when('/',{
       redirectTo:'/home'    
    }).otherwise({
        redirectTo:'/404'
    });
});

app.controller('portfolioCtrl',function($scope){
    $scope.goToAboutMe = function(){
         var divPosition = $('#aboutMe').offset();
        $('html, body').animate({scrollTop: divPosition.top}, "slow");
    }
})