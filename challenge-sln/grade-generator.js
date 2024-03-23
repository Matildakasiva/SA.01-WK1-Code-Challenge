//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
//A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.




//function - allows reusabilty and allows one or more parameters
const prompt = require('prompt-sync')()
const studentMarks = prompt('Enter student marks')

//Promptn - displays a dialog box with a message prompting for user input

function mark(){
let grade;
if (marks >= 79){
   grade = 'A'
}else if (marks >= 60){
   grade = 'B'
}else if (marks >= 49){
   grade = 'C'
}else if (marks >= 40){
   grade = 'D'
}else {
   grade = 'E'
}
}

mark(grade)


//if, else, else if, are conditionals: if checks the given condition if it is correct the operation continues, if not it goes on to the next condition which will be under else if, if condition is not met again it goes to else which is like a backup.