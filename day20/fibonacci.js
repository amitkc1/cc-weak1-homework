function generateFibonacci(){

    var i;
    var fib = []; //Initialize array!
    var sum ;
fib[0] = 0;
fib[1] = 1;
for(i=2; i<34; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
    if(i%2==0){
        sum=fib[i]+fib[i-2];
    }
}

    console.log("Sum is:"+sum);


}

generateFibonacci();
