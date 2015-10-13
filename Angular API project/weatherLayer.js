var app = angular.module('weather.layer',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/weatherLayer',{
        controller:'layerController',
        templateUrl:'weatherLayer.tpl.html'
    });
});

app.controller('layerController',function($scope){
    
    $scope.setMap= function(){
        var mapnik = new OpenLayers.Layer.OSM();
        var stations = new OpenLayers.Layer.Vector.OWMStations("Stations");
        var city = new OpenLayers.Layer.Vector.OWMWeather("Weather");
        map.addLayers([mapnik,stations,city]);
    }
})


//var app=angular.module('myapp', ['ngMap']);
//
//app.config(function($routeProvider){
//    $routeProvider.when('/weatherLayer',{
//        controller:'LayerDynamicMapsEngineCtrl',
//        templateUrl:'weatherLayer.tpl.html'
//    });
//});
//
//app.controller('LayerDynamicMapsEngineCtrl', function($scope) {
//  $scope.onMouseover = function(event) {
//    var fillArray = ['red', 'blue', 'yellow', 'green'];
//    var style = this.getFeatureStyle(event.featureId); 
//    style.fillColor = fillArray[event.featureId - 1];
//    style.fillOpacity = '0.8';
//  };
//  $scope.onMouseout = function(event) {
//    var style = this.getFeatureStyle(event.featureId).resetAll();
//  };
//});