var app=angular.module('myFavState.whyilove',['ngRoute']);

var images=['http://media-cdn.tripadvisor.com/media/photo-o/04/a5/d7/5a/coastline-view-of-main.jpg',
           'http://hollywood.dpethotels.com/sites/default/files/hollywood.jpg',
           'http://www.zastavki.com/pictures/1366x768/2009/Sport_Surfer_018544_.jpg',
           'http://www.twostepsfar.com/wp-content/gallery/cache/501__h=x_bigbear.jpg',
           'https://upload.wikimedia.org/wikipedia/commons/3/35/StaplesCenter051209.jpg']

app.config(function($routeProvider){
    $routeProvider.when('/whyilove',{
        controller: 'loveCtrl',
        templateUrl:'whyilove.tpl.html'
    
    });
});

app.controller('loveCtrl',function($scope){
    $scope.imageList=images;
});