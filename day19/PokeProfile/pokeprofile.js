var app = angular.module('pokemonApp',[])
app.controller('pokemonController',["pokemonService","$q","$scope", function(pokemonService,$q,$scope){
    $scope.getPokemon = function(){     pokemonService.getDataFromUrl(pokemonService.pokemonNameURL+$scope.pokemonNumber).then(function(data){
         $scope.pokemonName = "Name: "+data.name; 

});
}
//pokemonService.getDataFromUrl(pokemonService.pokemonAttackURL+$scope.pokemonNumber).then(function(data){
//         $scope.pokemonAttack = "Attack: "+data.attack; 
//});                    
//}
        

}]);

app.service('pokemonService',["$http", "$q", function($http, $q){
    this.pokemonNameURL ='http://pokeapi.co/api/v1/sprite/';
    this.prokemonAttackURL='http://pokeapi.co/api/v1/pokemon/';
    
    this.getDataFromUrl = function(url){
        var deferred = $q.defer();
        $http.get(url).success(function(data){
        deferred.resolve(data)}).error(function(error){
            deferred.reject(error);
        })
        
        return deferred.promise;
    }
    

}]);