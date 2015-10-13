var app =angular.module('rockthevote',[]);
app.controller('rockthevoteController',function($scope,rockthevoteService){
$scope.votes=0;
    $scope.getIssues = function(){
            rockthevoteService.getData().then(function(data){
                $scope.issues = data.data;
                console.log($scope.issues[0].votes);
            })
    }
    
    $scope.upvote = function(index){
        rockthevoteService.upvote($scope.issues[index].id,$scope.issues[index].votes,$scope.issues[index].title,$scope.issues[index].description).then(function(data){
            $scope.issues[index].votes = JSON.stringify(data.data[index].votes);
            console.log($scope.issues[index].votes);
        })
    }
    
    $scope.downvote = function(index){
rockthevoteService.downvote($scope.issues[index].id,$scope.issues[index].votes,$scope.issues[index].title,$scope.issues[index].description).then(function(data){
        $scope.issues[index].votes = JSON.stringify(data.data[index].votes);
        console.log($scope.issues[index].votes);
    })
    }
})

app.service('rockthevoteService',function($http,$q){
    
    this.endpoint = "http://127.0.0.1:8080/votelist";
    
    this.getData = function(){
        console.log("Endpoint is: "+this.endpoint)
        var deferred= $q.defer();
        $http.get(this.endpoint).then(function(response){
            console.log(JSON.stringify(response));
            deferred.resolve(response);
        },function(error){
            deferred.reject(error);
        })
        
        return deferred.promise;
    };
    
    this.upvote = function(id,votes,title,description){
        var deferred = $q.defer();
        $http.put(this.endpoint,{
            "id":id,
            "votes":parseInt(votes)+1,
            "title":title,
            "description":description
        }).then(function(response){
            deferred.resolve(response);
        },function(error){
            deferred.reject(error);
        })
        return deferred.promise;
    }
    
    this.downvote = function (id,votes,title,description){
        var deferred = $q.defer();
        $http.put(this.endpoint,{
            "id":id,
            "votes":parseInt(votes)-1,
            "title":title,
            "description":description
        }).then(function(response){
            deferred.resolve(response);
        },function(error){
            deferred.reject(error);
        })
        
        return deferred.promise;
    }
    
//    this.postVote = function(){
//        $http.post("http://127.0.0.1/votelist").then(function(response))
//    }
});