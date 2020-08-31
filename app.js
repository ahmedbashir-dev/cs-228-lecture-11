// alert("Hello World");
// alert(1+5);
// alert("5" + 1); //51
// alert(1 + "6"); //1
// alert("The sum of 2 and 3 is: " + (2+3));
// console.log(5+6);
// console.log("Hello on Console");
var num1 = 10;
var num2 = 3;
var sum = num1 + num2; //+, - , *, /, %
var prod = num1 * num2;
var diff = num1 - num2;
var rem = num1 % num2;
var q = num1 / num2;


var result = num2++;
console.log("Sum = " + sum);
console.log("Remainder = " + rem);
console.log("Quotient = " + q);
console.log(result);
console.log("Updated num2 = " + num2);
var x = 5;
var y = "5";
var z = 10;
document.write(x == x);
document.write("<br>");
document.write("Equal to: " + (x == y));
document.write("<br>");
document.write("Equal type and equal value: " + (x === y));
document.write("<br>");

var marks = 30;
if (marks > 40){
    console.log("You got a better grade");
}
else if (marks === 40){
    console.log("You passed the course");
}
else{
    console.log("Sorry! Better luck next time");
}

var classParticipationMarks = [10,10,0,10,false];
//Accessing Element of an array
//arrayName[index]
//arrayName[index] = value;
console.log(classParticipationMarks[0]);
classParticipationMarks[4] = true;
console.log(classParticipationMarks[4]);
classParticipationMarks.push("Newly Added Value", -99);
console.log(classParticipationMarks);
console.log(classParticipationMarks.pop());
console.log(classParticipationMarks);
console.log("Length: " + classParticipationMarks.length);

var arr = ["Beginning Element", "mid element", "ending element"];
var beginningElement = arr.shift();
console.log("Length of Array arr: " + arr.length);
console.log(beginningElement);
arr.unshift(10, false, "JS Arrays"); //10, false, "JS Arrays", "mid element", "ending element"
console.log(arr);
