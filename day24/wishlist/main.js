var app=angular.module('main',['ngRoute','main.wishList'])

app.controller('mainCtrl',function($scope){
    $scope.countries=['italy.jpg','japan.jpg'];
});

app.directive('printCountry',function(){
    return{
        restrict:'AE',
        scope: { //isolate scope
            country:'='
        },
        template:'<div ng-repeat="image in country"><div class="well"><img ng-src="{{image}}" style="height:400px;width:400px;margin-right:auto;margin-left:auto;display:block"></div></div>'
    }
});
