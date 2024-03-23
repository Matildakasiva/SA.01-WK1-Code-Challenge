//Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

//Promptn - displays a dialog box with a message prompting for user input
const prompt = require('prompt-sync')()
const speed = prompt("Enter the speed of the car in km/hr")
  
//const - used to declare variables that do not need to be changed

const speedLimit = 70
const demeritPoints = Math.floor((speed - speedLimit)/5)

//function - allows reusabilty and allows one or more parameters


function checkSpeed(){
    if(speed <= speedLimit){
        console.log('ok')
    }else if (speed > speedLimit){
        console.log(`Points, $(demeritpoints)`)
    }else if(demeritPoints >= 12){
        console.log("License suspended")
    }
}
checkSpeed(speed, demeritPoints)


//if, else, else if, are conditionals: if checks the given condition if it is correct the operation continues, if not it goes on to the next condition which will be under else if, if condition is not met again it goes to else which is like a backup.