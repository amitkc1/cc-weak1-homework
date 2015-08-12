function generateFibonacci(limit){

    var i;
    var fib = []; //Initialize array!
    var sum =0;
fib[0] = 0;
fib[1] = 1;
for(i=2;i<100; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
    
    if(fib[i]>=limit){
        break;
    }
    
    if(fib[i]%2==0){
        sum+=fib[i];
    }
    
}

    console.log("Sum is:"+sum);


}

generateFibonacci(4000000);
