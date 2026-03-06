//Selecting Elements
var inputBox = document.getElementById("inputBox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var noonguess = 3

//Generate Random Number from 1 to 5
var randomnumber = Math.floor(Math.random()*10)+1 //1 to 10
if(randomnymber>5)
{
    randomnumber=randomnumber-5
}

//Event Handler Function
function checkthenumber()
 {
   if(inputBox.value == randomnumber)
    {
        alert("You got it. Congratulation")
    }
    else{
        noofguess=noofguess-1
       if(noofguess==0)
       {
        alert("You Lost, Genetated Random Number is: "+randomnumber)
       }
    }
   
}