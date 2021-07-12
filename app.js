// Chapter # 21 to 25

// Q # 1..... Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

//Ans..... 
// var firstName = ["Laila"]
// var lastName = ["Ahmed"]
// for(i = 0; i<firstName.length; i++){
//     for(j = 0; j<lastName.length; j++){
//         console.log(firstName[i] + " " + lastName[j])
//     }
// }

// Q # 2..... Write a program to take a user input about his favorite mobile 
// phone model. Find and display the length of user input in your browser?

//Ans.....
// var a = ["Qmobile" , "Vivo" , "iPhone" , "Samsung Galaxy S6 Edge Plus"]
// for(var i = 0; i<a.length; i++){
//     if("Samsung Galaxy S6 Edge Plus" == a[i]){
//         console.log(a[i])
//     }
// }

// Q # 3..... Write a program to find the index of letter “n” in the word
//  “Pakistani” and display the result in your browser .

// Ans.....
// var a = ["Pakistani"]
// var wordIndex = a.indexOf("n")
//      console.log(wordIndex)

// Q # 4..... Write a program to find the last index of letter “l” in 
// the word “Hello World” and display the result in your browser.

// Ans.....
// var a = ["Hello World"]
// var wordIndex = a.indexOf("l")
// console.log(wordIndex)
    
// Q # 5..... Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// Ans.....
// var a = ["Pakistani"]
// var b = a.chartAt(3)
// console.log(b)

// Q # 6..... Repeat Q1 using string concat() method.

// Ans.....
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName + lastName
// console.log(fullName)

// Q # 7..... Write a program to replace the “Hyder” to “Islam” in the word
//  “Hyderabad” and display the result in your browser.

// Ans.....
// var a = "Hyderabad"
// var newWord = a.replace("Hyder" , "Islam")
// console.log(newWord)

// Q # 8..... Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. 
// They play cricket and football together.”;

// Ans.....
// var msg = "Ali and Sami are best friends. Theyplay cricket and football together."
// var newText = msg.replace(/and/g , "&");
// console.log(newText)

// Q # 9..... Write a program that converts a string “472” to a number 472. 
// Display the values & types in your browser.

// Ans.....
// a = "472"
// var b = Number()
// console.log(typeof(Number(b)))

// Q # 10...... Write a program that takes user input. Convert and show the 
// input in capital letters.

// Ans.....
// var a = prompt("Enter your city")
// var b = a.toUpperCase()
// console.log(b)

// Q # 11..... Write a program that takes user input. Convert and show the 
// input in title case.

// Ans.....
// var a = prompt("Enter your name")
// var a1 = a.slice(0,1)
// a1 = a1.toUpperCase()
// var a2 = a.slice(1)
// a2 = a2.toLowerCase()
// console.log(a1+a2)

// Q # 12..... Write a program that converts the variable num to string. 
// var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// Ans.....
// var num = 35.36 ;
// num = num.toString()
// console.log(typeof(num))

// Q # 13..... Write a program to take user input and store username in a 
// variable. If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username. For character codes of [@ .

// Ans.....












// Chapter # 26 to 30

// Q # 1..... Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Ans.....
// a...
// var a = 3.45214
// console.log(a)

// // b...
// var a = 3.45214
// console.log(Math.round(a))

// // c...

// var a = 3.45214
// console.log(Math.floor(a))

// // d...

// var a = 3.45214
// console.log(Math.ceil(a))

// Q # 2..... Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Ans.....
// a...
// var a = -3.45214
// console.log(a)

// // b...
// var a = -3.45214
// console.log(Math.round(a))

// // c...

// var a = -3.45214
// console.log(Math.floor(a))

// // d...

// var a = -3.45214
// console.log(Math.ceil(a))

// Q # 3..... Write a program that displays the absolute value of a number.
//  E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// Ans.....
// var num = prompt()
// var value = Math.abs(num);
// document.write(value)

// Q # 4..... Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your browser.:

// Ans.....
// var a = Math.random()
// var diceValue = a*6
// console.log(Math.ceil(diceValue))

// Q # 5..... Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your browser

// Ans.....
// var a = Math.random()
// var diceValue = a*2
// if(Math.ceil(diceValue)==1){
//     console.log(head)
// } else{ console.log(tail)}

// Q # 6.....Write a program that
//  shows a random number between 1 and 100 in your browser.

// Ans.....
// var a = Math.random()*100
// document.write(a)



// Q # 7..... Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// Ans.....
// var a = prompt ("Enter weight")
// console.log(a)

// Q # 8..... Write a program that stores a random secret number from 1 to 10 
// in a variable. Ask the user to input a number between 1 and 10. If the user
// input equals the secret number, congratulate the user.

// Ans.....
//  const num = Math.ceil(Math.random() * 10);
// console.log(num);
// const gnum = prompt('Guess the number between 1 and 10 inclusive');
// if (gnum == num)
//   console.log('Matched');
//  else
//   console.log('Not matched, the number was '+gnum);


// chapter 31 to 34

// 1..... Write a program that displays current date and time in
// your browser.
// Ans.....
// var date = new Date()
// console.log(date)

// 2..... Write a program that alerts the current month in words.
// For example December.

// Ans.....
// var date = new Date()
// var sDate = date.toString()
// var month = sDate.slice(4,7)
// console.log(month)


// 3..... Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// Ans.....
// var date = new Date()
// var sDate = date.toString()
// var day = sDate.slice(0,4)
// console.log(day)


// 4..... Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// Ans.....
// switch (new Date().getDay()){
//     case 5:
//     day = "Sunday"
//     alert("Its Fun Day");
//     break;
//     case 6:
//     day = "Saturday"
//     alert("Its Fun Day")
// }

// 5...... Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// Ans.....
// var date = new Date()
// var month =date.getDate()
// var sMonth = month.toString()
// for(var i = 0; i < sMonth.length; i++){
// if (i<=15){
//     alert("First 15 days of the month")
//     break
// }else{
//     alert("Last days of the month”.")
// }
// }

// 6..... Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// Ans.....
// var date = new Date()
// var milliSeconds = date.getTime()
// var minutes = milliSeconds/60
// console.log(minutes)

// 7..... Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// Ans.....
// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// 8..... Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// Ans.....
// var today = new Date()
// var laterDate = new Date("December 30,2020")
// console.log(laterDate)

// 9..... Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// Answer.....
// var today = new Date()
// var firstRamadan = new Date("June 18,2015")
// var daysPast = (today - firstRamadan)
// var change = daysPast/(1000*60*60*24*365)
// var next = Math.floor(change)
// console.log(next)


// 10..... Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// Ans.....
// var date = new Date ()
// var milliSeconds = date.getTime()
// var beginning = new Date("january 1,2015")
// var millibeg = beginning.getTime()
// var diff = milliSeconds - millibeg
// console.log(diff)

// 11..... Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// Ans.....
// var date = new Date ()
// date.setHours(1);
// console.log(date)

// 12..... Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// Ans.....
// var date = new Date()
// date.setFullYear(1921);
// console.log(date)

// 13..... Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// Ans.....
// var a = new Date ()
// var DoB = new Date (" February 20,1996")
// var diff = a - DoB
// var age = diff / (1000*60*60*24*365)
// var round = Math.floor(age)
// console.log("My age is "+ round)
// console.log("My date of birth is " + DoB)


// 14..... Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// Ans.....
// var cus  = "Customer Name : ABC Customer \n"
// var month = "Month : February  \n"
// var units = "Number of Units : 410 \n"
// var  charges = "Charger Per Unit is : 16 \n"
// var net = "Net Amount Payable (within Due Date): 6560\n"
// var late = "Late Payment Surcharge : 350 \n"
// var gross = "Gross Amount Payable (after Due Date) : 6910 \n"
// console.log(cus,month,units,charges,net,late,gross)


// Chapter 35 to 38

// 1. Write a function that displays current date & time in your
// browser.

// Ans.....
// function date(){
//     var today = new Date()
//     alert(today)
// }
// date()


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// Ans.....
//  var firstName = prompt("First Name")
//  var lastName = prompt("Last Name")
//  function name(firstName,lastName){
//      alert(firstName + lastName)
//  }
// name(firstName,lastName)

// 3...... Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// Ans.....
// var firstNum = +prompt("First Num")
// var secondNum = +prompt("Second Num")
// function sum(firstNum,secondNum){
//     alert(firstNum+secondNum)
// }
// sum(firstNum,secondNum)

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// Answer:
// var Num1 = +prompt("First Num")
// var oper = prompt("Enter operator")
// var Num2 = +prompt("Second Num")

// function calc(Num1,oper,Num2){
//     if(oper === "+"){
//         alert (Num1 + Num2)
//     }
//     else if (oper === "-"){
//         alert ( Num1 - Num2)
//     }else if (oper === "*"){
//         alert (Num1 * Num2)
//     }else {
//         alert ("Can't do this")
//     }
// }
// calc(Num1,oper,Num2)


// 5..... Write a function that squares its argument

// Ans.....
// var num1 = +prompt("Enter Number")
// var num2 = num1
// function squares(num1,num2){
//     alert(num1 * num2)
// }
// squares(num1,num2)

// 6..... Write a function that computes factorial of a number.

// Ans.....
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);


// 7...... Write a function that take start and end number as inputs
// & display counting in your browser.

// Ans.....
// var firstCount =prompt("Enter Number From which you start Counting")
// // var lastCount = prompt("Enter last Counting number") 
// function count(firstCount){
//     for(i = 0; i >firstCount.length;i++){
//         console.log(firstCount)
//     }
// }
// count(firstCount)


// 8..... Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// Ans.....
//   function hypotenuse(a, b) {
//     function square(x) { return x*x; }
//     return Math.sqrt(square(a) + square(b));
//  }
//  function secondFunction(){
//     var result;
//     result = hypotenuse(3,4);
//     document.write ( result );
//  }

// 9..... Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// Ans.....
// i)Its for Arguments------
// function area(a,b){
// alert(a*b)
// }
// area(3,4)

// ii)Its for Variable-------
// var a = prompt("Enter first number")
// var b = prompt("Enter second number")
// function area(a,b){
//     alert(a*b)
//     }
//     area(a,b)


// 10..... Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// Ans.....
// var word = prompt("Enter your word")
// var check = "";
// for(var i = word.length - 1; i >=0; i--){
// check +=word[i]
// }
// if (word === check){
//     console.log(word + " is palindrom word")
// }else {
//     console.log(word + " is not palindrom word")
// }


// 11..... Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// Ans.....
// var a = prompt("Enter name")
// var a1 = a.slice(0,1)
// a1 = a1.toUpperCase()
// var a2 =  a.slice(1)
// a2 = a2.toLowerCase()
// console.log(a1+a2)


// 12..... Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// Ans.....
// function findLongestWordLength(str) {
//     var words = str.split(' ');
//     var  maxLength = 0;

//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       }
//     }
//     return maxLength;
//   }

//   findLongestWordLength("Web Development Tutorial'");


// 13..... Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// Ans.....




// 14..... The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// Ans.....


// Chapter 38 to 42........................

// 1..... Write a custom function power ( a, b ), 
// to calculate the value of a raised to b.

// Ans.....
// var  number = prompt("Enter Number")
// var exponent = prompt("Enter Exponent")

// //using the exponent operator
// console.log( number ** exponent);
// // using the Math library 
// console.log( Math.pow(number, exponent));

// 2..... Any year is entered through the keyboard. 
// Write a function to determine whether the year is a 
// leap year or not.

// Ans.....
// function check_leapyear(){
//define variables
// var year;

//get the entered year from text box 
// year = document.getElementById("year").value;

//three conditions to find out the leap year
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }


// 3..... If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// Ans......
// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var perimeter = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(area);

// 4..... Write a function that receives marks received by a 
// student in 3 subjects and returns the average and 
// percentage of these
// marks. there should be 3 functions one is the 
// mainFunction and other are for average and percentage. 
// Call those functions from mainFunction and display
//  result in mainFunction.

// Ans.....
// var students = [['Sahil', 80], ['Adil', 77], ['Abdal', 88], ['Ahmed', 95], ['Bilal', 68]];

// var Avgmarks = 0;

// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks / students.length);
// }

// console.log("Average grade: " + (Avgmarks) / students.length);

// if (avg < 60) {
//     console.log("Grade : F");
// }
// else if (avg < 70) {
//     console.log("Grade : D");
// }
// else if (avg < 80) {
//     console.log("Grade : C");
// } else if (avg < 90) {
//     console.log("Grade : B");
// } else if (avg < 100) {
//     console.log("Grade : A");
// }


// 5..... You have learned the function indexOf. Code your own 
// custom function that will perform the same functionality.
//  You can code for single character as of now.

// Ans.....
// function sampleFunction() {
//     var sampleStr = "Hi, Mark!";
//     var n = sampleStr.indexOf("M");
//    console.log(n)
//    }
// sampleFunction()

// 6..... Write a function to delete all vowels from a sentence. 
// Assume that the sentence is not more than 25 characters 
// long.

// Ans.....
// var string = "heelloo world";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for (i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for (j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// console.log(string);


// 7..... Write a function with switch statement to count the 
// number of occurrences of any two vowels in succession in 
// a line of text. For example, in the sentence

// const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// function countVowels(sentence) {
//   let counts = 0;
//   for(let i = 0; i < vowels.length; i++) {
//     if(vowels.includes(sentence[i])) {
//       counts++;
//     }
//   }
//   return console.log(counts);
// }

// countVowels('Hello World');
// countVowels('AaEeIiOoUu');
// countVowels('aaaaa');



// 8..... The distance between two cities (in km.) is input
//  through the keyboard. Write four functions to convert
//   and print this distance in meters, feet, inches and
//    centimeters.

// Ans.....



// 9..... Write a program to calculate overtime pay of employees.
//  Overtime is paid at the rate of Rs. 12.00 per hour for
//   every hour worked above 40 hours. Assume that employees
//    do not work for fractional part of an hour.

// Ans.....


// 10...... A cashier has currency notes of denominations 10, 50 
// and 100. If the amount to be withdrawn is input through 
// the keyboard in hundreds, find the total number of 
// currency notes of each denomination the cashier will
// have to give to the withdrawer.

// Ans.....
