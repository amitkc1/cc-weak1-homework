var names= ["Jon","Jacob","Jingle","Heimer","Smith"];
var alphabets=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var output=[];
function insertAlphabets(){
    for(var nameNumber=0;nameNumber<names.length;nameNumber++){
        process.stdout.write(names[nameNumber]+" :");
        output.push(names[nameNumber]+":");
        for(var alphabetNumber=0;alphabetNumber<alphabets.length;alphabetNumber++){
            process.stdout.write(alphabets[alphabetNumber]+",");
            output.push(alphabets[alphabetNumber]);
        }
    }
    console.log("Printing array: \n");
    console.log(output);
}

insertAlphabets();