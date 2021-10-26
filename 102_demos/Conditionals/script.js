console.log('hello I am Alive');

document.write("<h1>Conditionals Demo</h1>");

if(10 < 5){
  console.log('You are correct 10 is less than 5!')
}
else{
  console.log('you are not correct 10 is not less than 5!')
};

var myNumb = prompt('Choose a number between 1 and 10');

if(myNumb < 5){
  console.log('your number is less than 5');
}
else if(myNumb > 5){
  console.log('Your number is greater than 5')
}
else{
  console.log('Your number is equal to 5')
};

var numb = prompt('choose a random number between 1 and 20');

if(numb < 15 && numb > 5){
   alert('Your number is between 5 and 15. Am I close?');
}
else if(numb > 15){
  alert('You chose a larger number didnt you?');
}
else if(numb < 5){
  alert('Your number is a small number isnt it?');
}

document.write("<h2>Your number is<h2>");
document.write(numb);