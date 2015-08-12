function runSprinklers(currentdayofWeek,currentHour){
    console.log('day is: '+currentdayofWeek);
    console.log('Hour is: '+currentHour);

    if(currentdayofWeek=='Thursday'){
        console.log("Sprinklers are not allowed on Thursdays");
    }
    
    else if(currentdayofWeek!=='Sunday'&&currentdayofWeek!=='Saturday'){
        if(currentHour>=6&&currentHour<=8){
            console.log("Weekday.Sprinklers are running");
        }
        else{
            console.log('It is weekday.Sorry.Falls out of schedule. Sprinklers not running');
        }
    }
    
    else if(currentdayofWeek==='Sunday'||currentdayofWeek==='Saturday'){
        
        if(currentHour>=9&&currentHour<=11){
            console.log('Weekend.Sprinkers are running');
        }
        
        else{
            console.log("Weekend. Sorry.Falls out of schedule. Sprinklers are not running");
        }
    }

    
    
    
}

var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var d = new Date();
var currentdayOfWeek = days[d.getDay()];
var currentHour = d.getHours();
runSprinklers('Monday','6');
runSprinklers('Thursday', '7');
runSprinklers('Saturday', '7');
runSprinklers('Wednesday', '7');
runSprinklers('Saturday', '10')
