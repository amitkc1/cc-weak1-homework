var app = angular.module('main',[]);
app.controller('presidentController',function($scope){
    $scope.presidents=['Thomas Jefferson','Barack Obama','Ronald Raegan'];
});

app.controller('heroController',function($scope){
    $scope.heros=['Superman','Spiderman','Hulk'];
});

app.directive('printName',function(){
    return{
        restrict:'AE',
        scope:{
            names:'=names'
        },
        template:'<h1 ng-repeat="name in names">{{name}}</h1>'
    
    }
})