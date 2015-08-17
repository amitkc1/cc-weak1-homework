var app=angular.module('portfolio.project',['ngRoute']);
var images=[{
            image:'images/image1.png',
            label:'Upload images and videos'},
            
            {image:'images/image2.png',
             label:'RPG game start'},
            
            {image:'images/image3.png',
             label:'RPG game battlefield'},
            
            {image:'images/image4.png',
             label:'Godfather\'s hitlist'},
            
            {image:'images/image5.png',
             label:'Pokemon'},
            
            {image:'images/image6.png',
             label:'Why I love California..!'},
            
             {image:'images/image7.png',
             label:'California again...!'}
            
            ];
app.config(function($routeProvider){
    $routeProvider.when('/project',{
        controller: 'projectCtrl',
        templateUrl:'project.tpl.html'
    
    });
});

app.controller('projectCtrl',function($scope){
    $scope.images=images;
});