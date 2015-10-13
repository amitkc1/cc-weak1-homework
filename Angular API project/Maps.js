var app = angular.module('weather.map',['ngRoute','weather.home','myapp'])
app.config(function($routeProvider){
    $routeProvider.when('/maps',{
        controller:'mapCtrl',
        templateUrl:'map.tpl.html'
    });
});

app.controller('mapCtrl',function($scope,$sce,weatherService){
    $scope.map =$sce.trustAsResourceUrl("http://www.mapq.st/embed?le=t&q=country:US&maptype=map&vs=embed");
  
    $scope.getMapByZip = function(cityZip){
      $scope.zip = cityZip;
      $scope.map = $sce.trustAsResourceUrl("http://www.mapq.st/embed?le=t&q=postalCode:"+cityZip+"country:US&maptype=map&vs=embed");
      console.log("src is: "+$scope.zip);
      $scope.weatherByZip = weatherService.getWeatherByZipCode($scope.zip);
      console.log($scope.weatherByZip);
    }
    

});

app.service('mapService',function($http,$q){
    this.getMapLocation = function(cityZip){
        var deferred=$q.defer();
        $http.get("http://www.mapq.st/embed?le=t&q=postalCode:"+cityZip+"country:US&maptype=map&vs=embed").then(function(response){
            console.log(response);
            deferred.resolve(response);},
         function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    }

});