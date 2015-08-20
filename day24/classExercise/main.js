var app = angular.module('main',[]);

app.controller('heroesCtrl',function($scope) {
    $scope.heroes = ["Spiderman","Captain Marvel","Venom", "Ant Man","Cage"];
    $scope.actionFigures = [
        {
            name: "Spiderman",
            price: 23.45
        },
        {
            name: "Captain Marvel",
            price: 12.22
        },
        {
            name: "Venom",
            price: 30.23
        },
        {
            name: "Ant Man",
            price: 28.25
        }
    ];
});

app.controller('presidentsCtrl', function($scope) {
    $scope.presidents = ["Thomas Jefferson", "George Bush", "Bill Clinton", "Barack Obama"];
    $scope.captainplanet = ["Wind","Water","Earth","Fire","Heart"];

     $scope.cars = [
        {
            name: "Ferrari",
            price: 110000
        },
        {
            name: "Bugatti",
            price: 380000
        },
        {
            name: "Volvo",
            price: 23000
        },
        {
            name: "Astin Martin",
            price: 121000
        }
    ];
});

app.directive('printName', function() {
    return {
        restrict:'AE',
        scope: {
            names: '='
        },
        template:'<h1 ng-repeat="name in names">{{name}}</h1>'
    }
});

app.directive('printItems', function() {
    var aController = function($scope) {
        $scope.getTotal = function() {
            var total = 0;

            for (var x = 0; x < $scope.items.length; x++) {
                var item = $scope.items[x];
                total += item.price;
            }

            return total;
        };
    };

    return {
        restrict:'AE',
        scope: { //isolate scope
            items:'='
        },
        templateUrl: 'printitems.tpl.html',
        controller: aController
    }
});