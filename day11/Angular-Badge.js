var app = angular.module('badgeApp',[]);
app.controller('inputCtrl', function($scope) {
   $scope.submit = function(){
        $scope.firstNameResult=$scope.firstName;
        $scope.lastNameResult=$scope.lastName;
        $scope.emailResult=$scope.email;
         $scope.placeOfBirthResult = $scope.placeOfBirth;
         $scope.phoneResult = $scope.phone;
        $scope.favoritefoodResult = $scope.favoritefood;
         $scope.userinfoResult = $scope.userinfo;
    }
});

