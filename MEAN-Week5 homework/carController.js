var app = angular.module('MyCars',['youtube-embed']);
app.controller('carController',function(carService,managerService,$scope){
    
    $scope.prepopList = managerService.getPrepopCarList();
    $scope.favList = managerService.getFavCars();
    $scope.favVideoList =managerService.getVideoList();
    $scope.userCar={};
    $scope.userVideo={};
    
    $scope.add = function(){
        managerService.addFavCar($scope.userCar);
        $scope.userCar={};
        managerService.getFavCars();
    }
    
    $scope.addVideo = function(){
        managerService.addFavoriteVideo($scope.userVideo);
        $scope.userVideo={};
        managerService.getFavVideos();
    }
    
    
    $scope.remove = function(index){
        managerService.deleteFavCar(index);
    }
    

});


app.service('carService',function(){

     var car = function(carName,imgUrl,user){
        this.name= carName;
        this.url= imgUrl;
        if(user){
            this.user=user;
        }
    }
    
    var fav = function(carName,imgUrl,user){
        this.name = carName;
        this.url = imgUrl;
        this.user = user;
    }
    
    var favCarVideos = function(carName,videoUrl,user){
        this.name = carName;
        this.url = videoUrl;
        this.user=user;
    }
    
    
    var bugatti = new car('Bugatti',"http://www.androidguys.com/wp-content/uploads/2015/07/2011939.jpg");
    
    var lotus = new car('Lotus',"http://3.bp.blogspot.com/-ArxBsJByCfI/U-lK5fmoiCI/AAAAAAAACGM/7O2MQ0NhQG0/s1600/fancy+car+pictures+26.jpg");
    
    var maserati = new car('Maserati',"http://2.bp.blogspot.com/-T-P_Sp5EdNQ/U-lLAPTDMDI/AAAAAAAACGo/fxIdByao1Ko/s1600/fancy+car+pictures+29.jpg");
    
    
    var favCar1 = new fav("Mustang Shelby",'http://static7.bornrichimages.com/cdn2/683/384/91/c/wp-content/uploads/s3/1/2013/03/02/1362217109.jpg','abc123');
    
    var favCar2 = new fav("Techart GT Street",'http://static4.bornrichimages.com/cdn2/683/384/91/c/wp-content/uploads/s3/1/2013/03/01/1362121242.jpg','def456');
    
    var dragRacing = new favCarVideos('NFS most wanted','https://www.youtube.com/watch?v=L3ZguNkBbao','NFS');
    this.favCarVideoList = [dragRacing];
    this.favList = [favCar1,favCar2];
    this.prepopList = [bugatti,lotus,maserati];
});

app.service('managerService',function(carService,$http){
    var endPoint = "http://mean.codingcamp.us/pony/amitkc1";
    
    this.deleteFavCar = function(index){
        console.log(index);
        if(index>=0){
            ponyName = carService.favList[index].name;
            imgUrl = carService.favList[index].url;
            userName =carService.favList[index].user;
            
            var deleteItem ={
                ponyName:this.ponyName,
                imgUrl:this.imgUrl,
                userName:this.userName    
            }
            $http.delete(endPoint,deleteItem).then(function(response){
                carService.favList.splice(index,1);
            },function(response){
                console.log("Error is: "+response.statusCode+" "+response.statusText);
            });
            
            
        }
        else{
            console.log('Error occurred..!');
        }
    }
    
    this.addFavCar = function(carObj){
        console.log(carObj);
        
        var valid = this.carValidator(carObj);
        
        if(valid){
            newCarItem = {
                ponyName:carObj.name,
                imgUrl:carObj.url,
                userName:carObj.user
            };
            
            
            $http.post(endPoint,newCarItem).then(function(response){
                console.log(response.data);
                carService.favList.push(carObj);
            },function(response){
                console.log("Error: "+response.statusCode+" "+response.statusText);
            });
            
            
        }else{
            console.log("Error occurred while adding object to the favorite list");
        }
        
    }
    
    this.addFavoriteVideo = function(videoObj){
        console.log(videoObj);
        
        var valid = this.carValidator(videoObj);
        
        if(valid){
            newCarItem = {
                ponyName:videoObj.name,
                imgUrl:videoObj.url,
                userName:videoObj.user
            };
            
            
            $http.post(endPoint,newCarItem).then(function(response){
                console.log(response.data);
                carService.favCarVideoList.push(videoObj);
            },function(response){
                console.log("Error: "+response.statusCode+" "+response.statusText);
            });
            
            
        }else{
            console.log("Error occurred while adding object to the favorite list");
        }
        
    }
    
    
    this.getFavCars = function(){
        
        return carService.favList;
        console.log("From getFavCars: "+carService.favList);
    }
    
    this.getFavVideos = function(){
        return carService.favCarVideoList;
        console.log("From getFavVideos: "+carService.favList);
    }
    
    this.getPrepopCarList = function(){
        return carService.prepopList;
    }
    
    this.getVideoList = function(){
        return carService.favCarVideoList;
    }
    
    this.carValidator = function(object){
        if(!object.name||!object.url||!object.user){
            return false;
        }
        
        else if (object.name.match(/\d+/g)!=null||object.name.length<3)         {
            return false;
        }
        
        return true;
    }
   

    
    
});