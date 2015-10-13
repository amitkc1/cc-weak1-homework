var list = [10,5,2,9,100,20,15,3];
var helperList =[];
function mergeSort(low,high){
    if(low<high){
        var middle = low +(high-low)/2;
        mergeSort(low,middle);
        mergeSort(middle+1,high);
        merge(low,middle,high);
    }
}

function sort(list){
 mergeSort(0,list.length-1);   
}

function merge(low,middle+1,high){
    for(var i=low;i<=high;i++){
        helperList[i]=list[i];
    }
    
    var i=low;
    var j=middle+1;
    var k =low;
    
    while(i<=middle&&j){
    
    }
}