for (i=1; i<=100; i++) {                                        //start, stop, increment
    if (i % 15 === 0){                                          //for numbers that are divisable by 3 & 5, output FizzBuzz, all numbers divisable by both 3 and 5 are also divisable by 15
        console.log("FizzBuzz");
    }
    else if (i % 5 === 0) {                                     //for numbers divisable by 5, output Buzz
        console.log("Buzz");
    }
    else if(i % 3 === 0)  {                                     //for numbers divisable by 3, output Fizz
        console.log("Fizz");
    } 
    
   else {                                                       //if numbers not divisable by 3 or 5, output as normal
       console.log(i);
   }
}
