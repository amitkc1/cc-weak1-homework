var app = angular.module('playerKill',[]);
app.controller('mainCtrl',function($scope){
    $scope.players = [{  
        kills : [
        {
          handle:"jk400",
          rank: 14932,
          clan: ["hpburner200","sputnik","sololobo21"]
        },
        {
            handle:"jk300",
            rank:14940,
            clan:["hpburner300","appollo-1","sololobo22"]
        }
  ]
}];
    
});
    