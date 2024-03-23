
//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

function payee(basicSalary){
    const taxrate = [
        { min: 0, max: 24000, rate: 10},
        { min: 24001, max: 32333, rate: 25},     
        { min: 32334, max: 500000, rate: 30},
        { min: 500001, max: 800000, rate: 32.5},
        { min: 800001, max: Infinity, rate: 35},
    ]
    if(remainingSalary > rate.max ){
        payee + (rate.max - rate.min) * rate.rate / 100
    }else{
        payee + remainingSalary * rate.rate /100
    }
}

// Arrays(taxrate and nhifDeductionDeductions are arrays as it is enclosed in squarebrackets) - can multiple values in a single variable
// Objects( each element of taxrate and nhifDeductionDeductions are objects as they are enclosed in curly brackets)- container that can hold similar data
//const- used to declare variables that cannot be reassigned or redeclared

function nhifDeductionDeductions(basicSalary){
    const nhifDeductionDeductions = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: 109999, deduction: 1700 },
    ]
    if(basicSalary >= nhif.min && basicSalary <= nhif.max){
        return nhifDeduction
    }
}
//function - allows reusabilty and allows one or more parameters

function nssfDeductions(basicSalary) {
    const nssfrate = 0.06
    return basicSalary * nssfrate
}



function grossSalary(basicSalary, benefits){
    return basicSalary + benefits
}

function netSalary(basicSalary, benefits){
    const payee = ( basicSalary)
    const nhifDeduction = (basicSalary)
    const nssfDeductions = (basicSalary)
    const grossSalary = (basicSalary, benefits)
    const netSalary = (grossSalary - (payee + nhif + nssf))

    return netSalary
}

//Promptn - displays a dialog box with a message prompting for user input
const prompt = require('prompt-sync')()
const basicSalary = prompt("Enter basic salary")
const benefits = prompt("Enter benefits")

netSalary()