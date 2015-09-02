var app = angular.module('filterApp',[]);
app.controller('filterController',function(filterService,$scope){
    $scope.myArray=["cat","dog","elephant","car","dodge"];
    $scope.text=[];
    //$scope.text= $scope.filterArray();
    
    $scope.filterArray = function (){
        console.log("function called");
        
        if($scope.inputBox==""){
            $scope.text=[];
            return;
        }
        $scope.text=[];
        for(var i = 0; i < $scope.myArray.length; i++)
        {
            if($scope.myArray[i].indexOf($scope.inputBox) != -1)
            {
                $scope.text.push($scope.myArray[i]+",");
            }
            
        }
        console.log($scope.text);
    };
});

app.service("filterService",function(filterService){
    this.myArray=["cat","dog","elephant","car","dodge"];
    this.text=[];
    this.filterArray= function(){
        
           console.log("function called");
        
        if($scope.inputBox==""){
            this.text=[];
            return;
        }
        this.text=[];
        for(var i = 0; i < this.myArray.length; i++)
        {
            if($scope.myArray[i].indexOf($scope.inputBox) != -1)
            {
                $scope.text.push($scope.myArray[i]+",");
            }
            
        }
        console.log($scope.text);
    }
});