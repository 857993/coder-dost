//let x = null;
//console.log(x);

/**var myname = "vikash"**/
//console.log(myname);
/*data type in js */
//var myName = "vikash kumar";
//console.log(myName);

// typeof operator 
//console.log(typeof(myName));

/*var myAge = 85;
console.log(typeof(myAge));

var myVikash = true;
console.log(typeof(myVikash));*/

/*var x= 10 +"20";
console.log(x);
var x = 9 - "5"; bug 
console.log(x);

var x = "java" + "script";
console.log(x);
 var x = " " + " ";
 console.log(x);

 var x = " "  + "0";
  console.log (x);

  var x = "vinod" - "thapa";
  console.log(x);

   var x= true + true ;
   console.log(x);
   var x = true + false;
   console.log(x);
   var x = false + true;
   console.log(x);
   var x = false - true;
   console.log(x);*/

    // interview question 1
    //diff bw null vs undefined

     var x =  null;
     console.log(x);
     console.log(typeof(x));
     //2nd js bug

     var iAmStandBy;
     console.log(iAmStandBy);
     console.log(typeof(iAmStandBy));

     // interview question 2nd 
     //what is NaN

     //NaN is the property of the global object.
     //in others word , it is a variable  in global scope.
     //the initial value of NaN is Not-A- number

     /*let myPhoneNumber = 8579938850;
     console.log(myPhoneNumber);

     let myname = "vikash";
     console.log(myname);
     console.log(isNaN(myPhoneNumber));
     console.log(isNaN(myname));*/

     //Nan practice
      var x = 5;
      var  y= 5;
      console.log("is both the x and y value are equal or not" + x == y);
//this is the paart of ecmascript6
//console.log(`is both the x and y are equal:${x == y}`); 
//increment and decrement operator
//operator x++ or ++x or x-- or --x
//if used postfix , with operator after operand(forexample, x++),
var num  = 15 ;
//var newNum = num++;
console.log(num);
//console.log(newNum);


//comparison operator: a comparisobnn operator  its operands
//and return a logical vlue based on wheither the compsrison  is true

var a= 30;
var b= 20;
// equals(==)
//console.log(a==b);

//not equals(!=)

console.log(a!=b);
//greater than(>lll)

var  a = 50;
var b= 60;
//outpput a =60;
//b= 50;

var c= b;
 b= a;
 a = c;
 console.log("the value of a is " + a);
 console.log("the value of b is " + b);

 //conditional statement

 var tomr = "rain";

 if(tomr=="rain"){
      console.log("take a raincoat");
 }
      else{
            console.log("no need to take a raincoat");
      }

// while loop statement
//the while loop statement create a loop that executes a 
// as long as the test condition evaluates to true

//var num = 0;
//block scope ,
//while(num<= 10){
     // console.log(num);//infinite loop
      //num++
//}


//for loop

/*for(var num =0; num<=0; num++){
      debugger;
      console.log(num);
}*/

//output of tbale = 8*1=8

for(var num =1; num<=10; num++){
      var tableOf = 8;
      console.log(tableOf + " * " + num + " = " + tableOf * num);
}

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

  







