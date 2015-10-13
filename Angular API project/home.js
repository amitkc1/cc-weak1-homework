var app =angular.module('weather.home',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/home',{
        controller:'weatherCtrl',
        templateUrl:'home.tpl.html'
    });
});

app.controller('weatherCtrl',function($scope,weatherService){
    $scope.minTemp =0;
    $scope.minTempZipCode=0;
    
    $scope.getWeather= function(){
        
       $scope.weather = weatherService.weather($scope.cityName);
        $scope.city=$scope.cityName;
        $scope.minTemp = weatherService.getMinTemp($scope.cityName);
        $scope.maxTemp = weatherService.getMaxTemp($scope.cityName);
    }
    
    $scope.getWeatherByZipCode = function (){
        $scope.weatherByZip = weatherService.getWeatherByZipCode($scope.zipCode);
        $scope.minTempZipCode = weatherService.getMinTempForZipCode($scope.zipCode);
        $scope.maxTempZipCode = weatherService.getMaxTempForZipCode($scope.zipCode);
    }
         
});

app.service('weatherService',function($http,$q){
    
    this.weather = function(cityName){
        
        var deferred = $q.defer(); 
        
        $http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&mode=json").then(function(response){
            deferred.resolve(response.data);},
         function(error){
            deferred.reject(error);
        });
        return deferred.promise;     
    };
    
     this.getWeatherByZipCode = function(zipcode){
        
        var deferred = $q.defer(); 
        
        $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&mode=json").then(function(response){
            deferred.resolve(response.data);},
         function(error){
            deferred.reject(error);
        });
        return deferred.promise;     
    };
    
    
    
    this.getMinTemp = function(cityName){
        var deferred = $q.defer();
        
        $http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&mode=json").then(function(response){
            
            deferred.resolve(((response.data.main.temp_min - 273.15)* 1.80 +32).toFixed(2));},
         function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    }
    
    this.getMinTempForZipCode = function(zipcode){
        var deferred = $q.defer();
        
        $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&mode=json").then(function(response){
            console.log(JSON.stringify(response));
            deferred.resolve(((response.data.main.temp_min - 273.15)* 1.80 +32).toFixed(2));},
         function(error){
            deferred.reject(error);
        });
        return deferred.promise;
        
    }
    
    this.getMaxTemp = function(cityName){
        var deferred = $q.defer();
        
        $http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&mode=json").then(function(response){
            deferred.resolve(((response.data.main.temp_max - 273.15)* 1.80 +32).toFixed(2));},
         function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    }
    
    this.getMaxTempForZipCode = function(zipcode){
        var deferred = $q.defer();
        
        $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&mode=json").then(function(response){
            deferred.resolve(((response.data.main.temp_max - 273.15)* 1.80 +32).toFixed(2));},
         function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    }
    

        
    
    }
);