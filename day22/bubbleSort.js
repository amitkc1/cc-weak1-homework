function bubbleSort(arrayToSort){
    for(var i=1;i<=arrayToSort.length;i++){
        for(var j=0;j<=arrayToSort.length-1;j++){
            var temp=0;
            if(arrayToSort[j]>arrayToSort[j+1]){
                temp = arrayToSort[j+1];
                arrayToSort[j+1]=arrayToSort[j];
                arrayToSort[j]=temp;
            }
            
        }
        console.log('Iteration no.'+i+" and the array is: "+arrayToSort);
    }
    console.log("The new array is: "+arrayToSort);
}

var arrayToSort = [34, 203, 3, 746, 200, 984, 198, 764, 9];
bubbleSort(arrayToSort);
