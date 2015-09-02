var app = angular.module('weather',[]);
//                         
//app.config(["$routeProvider", function($routeProvider) {
//  $routeProvider.when("/" , {
//    redirectTo: "/home"
//  })
//  .otherwise({
//    redirectTo: "/404"
//  });
//}]);

app.controller('weatherCtrl',function($scope,$http,weatherService){
    $scope.getWeather= function(){
        
       $scope.weather = weatherService.weather($scope.cityName);
        $scope.city=$scope.cityName;
        $scope.minTemp = weatherService.getminTemp();
        $scope.maxTemp = weatherService.getMaxTemp();
    }
         
});

app.service('weatherService',function($http){
   
    var weatherString;
    
    this.weather = function(cityName,callback){
        
        this.w=$http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&mode=json").then(function(response){
            weatherString = JSON.parse(JSON.stringify(response));
            console.log(weatherString.data.main.temp_min);
            return response.data},
         function(error){return error});
        return this.w;     
    };
    
    
    this.getminTemp = function(){
        console.log(weatherString.data.main.temp_min);
        var minTemp = ((weatherString.data.main.temp_min - 273.15)* 1.8000 + 32.00).toString();
        return minTemp;
    }
    
    this.getMaxTemp = function(){
        //console.log(weatherString.data.main.temp_max);
        var maxTemp = ((weatherString.data.main.temp_max - 273.15)* 1.8000 + 32.00).toString();
        return maxTemp;
    }
    
        
    
    }
);