var app = angular.module('weather',['ngRoute','weather.home','weather.map','weather.layer']);
                         
app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/" , {
    redirectTo: "/home"
  }).otherwise({
    redirectTo: "/404"
  });
}]);