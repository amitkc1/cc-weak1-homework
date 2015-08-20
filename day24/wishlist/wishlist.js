var app=angular.module('main.wishList',['ngRoute']);

app.config(function($routeProvider){
   $routeProvider.when('/wishlist2',{
        controller: 'wishListCtrl',
        templateUrl:'wishlist.tpl.html' 
   }) 
});

app.controller('wishListCtrl',function($scope){
    $scope.cities=['http://uppsalainternationalweek.com/wp-content/uploads/2015/04/tokyo.jpg','http://travelnoire.com/wp-content/uploads/2014/02/Eiffel-Tower-Paris-France.jpg']

});


app.directive('printWishlist',function(){
    return{
        restrict: 'AE',
        scope: { //isolate scope
            cities:'='
        },
        templateUrl:'wishlist.tpl.html'
    }
});
