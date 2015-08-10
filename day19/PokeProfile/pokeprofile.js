var app = angular.module('pokemonApp',[])
app.controller('pokemonController',["pokemonService","$q","$scope", function(pokemonService,$q,$scope){
    
    $scope.getPokemon = function(){     pokemonService.getDataFromUrl(pokemonService.pokemonURL+$scope.pokemonNumber).then(function(data){
         $scope.pokemonName = data.name; 

    });
    
    $scope.getPokemonImage = pokemonService.getDataFromUrl(pokemonService.pokemonImageURL+$scope.pokemonNumber).then(function(data){
        console.log("http://pokeapi.co"+data.image);
        $scope.pokemonImage = "http://pokeapi.co"+data.image;
    });

    $scope.pokemonAttack= pokemonService.getDataFromUrl(pokemonService.pokemonURL+$scope.pokemonNumber).then(function(data){
         $scope.pokemonAttack = "Attack: "+data.attack; 
         $scope.pokemonAbility = "Ability: "+data.abilities[0].name;
    });                    
    
}

}]);

app.service('pokemonService',["$http", "$q", function($http, $q){
    this.pokemonURL='http://pokeapi.co/api/v1/pokemon/';
    this.pokemonImageURL = 'http://pokeapi.co/api/v1/sprite/';
    
    this.getDataFromUrl = function(url){
        console.log("URL is: "+url);
        var deferred = $q.defer();
        $http.get(url).success(function(data){
        deferred.resolve(data)}).error(function(error){
            deferred.reject(error);
        })
        
        return deferred.promise;
    }
    

}]);