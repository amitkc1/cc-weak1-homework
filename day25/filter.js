var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

Array.prototype.myFilter = function (callback) {  
  var array = this;
  var result=[];
    for(var i=0;i<this.length;i++){
        if(callback(this[i])){
            result.push(this[i]);
        }
    }
    return result;  
};

function checkElement (number){
    return number <=5;
}


var result = array.myFilter(checkElement);
console.log(result);


