var result = gcd4(5,10,15,25);
console.log("Result is: "+result);

function gcd(a,b){
        if ( ! b) {
            return a;
        }

        return gcd(b, a % b);
}

function gcd3(a,b,c){
     result = gcd(a,gcd(b,c));
    return result;
    //console.log("Result is: "+result);
}

function gcd4(a,b,c,d){
    result = gcd(a,gcd3(b,c,d));
    return result;
    //console.log("Result is: "+result);
}


