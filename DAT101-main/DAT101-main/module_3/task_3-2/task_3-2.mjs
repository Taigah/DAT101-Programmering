"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const countUpHigh = 10
let countUpLow = 1
const countDownLow = 1
let countDownHigh = 10
for (countUpLow; countUpLow <= countUpHigh-1; countUpLow++)
{
    console.log(countUpLow.toString());
}
for (countDownHigh; countDownHigh >= countDownLow+1; countDownHigh--)
{
    console.log(countDownHigh.toString());
}
printOut(countUpLow.toString());
printOut(countDownHigh.toString());
printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number;
do {
    number = Math.floor(Math.random()*60)+1;
    // printOut(number.toString()); prøvde denne bare for å se hvordan programmet regner ut og skriver ut om alle tall blir printet :)
} while (number !== 45);
printOut(number);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const timeToFinish = Date.now();
let counter = 0
let bigNumber;
do {
    bigNumber = Math.floor(Math.random()*1000000)+1;
    counter+=1;
}
while ( bigNumber !== 45);
const timeFinished = Date.now();
printOut("The loop takes " + counter.toString() +   " number of time(s) to finish.");
printOut("Time taken for the loop to finish is " + (timeFinished - timeToFinish).toString() + " millisecond(s).");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    let divisor = 2;
    while (divisor * divisor <= n) {
        if (n % divisor === 0) {
            return false;
        }
        divisor++;
    }
    return true;
}

let primeNumbers = [];
for (let number = 1; number <= 200; number++) {
    if (isPrime(number)) {
        primeNumbers.push(number);
    }
}

console.log(primeNumbers);
    

printOut(primeNumbers);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let column = 1; column <= 9; column++) {
    let text = "";
    for (let row = 1; row <= 7; row++) {
        text += "K" + column + "R" + row + " ";
    }
    printOut(text.toString());
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let studentOne = Math.floor(Math.random()*236)+1;
let studentTwo = Math.floor(Math.random()*236)+1;
let studentThree = Math.floor(Math.random()*236)+1;
let studentFour = Math.floor(Math.random()*236)+1;
let studentFive = Math.floor(Math.random()*236)+1;

function randomGrade(percent) {
    if (percent >= 89) {
        return "A"
    }
    else if (percent >= 77) {
        return "B"
    }
    else if (percent >= 65) {
        return "C"
    }
    else if (percent >= 53) {
        return "D"
    }
    else if (percent >=41) {
        return "E"
    }
    else if (percent >= 0) {
        return "F"
    }
}

studentOne = (studentOne / 236) * 100;
studentTwo = (studentTwo / 236) * 100;
studentThree = (studentThree / 236) * 100;
studentFour = (studentFour / 236) * 100;
studentFive = (studentFive / 236) * 100;

let letterGradeOne = randomGrade(studentOne);
let letterGradeTwo = randomGrade(studentTwo);
let letterGradeThree = randomGrade(studentThree);
let letterGradeFour = randomGrade(studentFour);
let letterGradeFive = randomGrade(studentFive);

printOut("Not sorted grades");
printOut(letterGradeOne); 
printOut(letterGradeTwo); 
printOut(letterGradeThree); 
printOut(letterGradeFour);
printOut(letterGradeFive);
printOut(newLine);
for (let gradeRank = 0; gradeRank < 5; gradeRank++) {
    if (letterGradeOne > letterGradeTwo) {
        let swap = letterGradeOne
        letterGradeOne = letterGradeTwo
        letterGradeTwo = swap
    }
    if (letterGradeTwo > letterGradeThree) {
        let swap = letterGradeTwo
        letterGradeTwo = letterGradeThree
        letterGradeThree = swap
    }
    if (letterGradeThree > letterGradeFour) {
        let swap = letterGradeThree
        letterGradeThree = letterGradeFour
        letterGradeFour = swap
    }
    if (letterGradeFour > letterGradeFive) {
        let swap = letterGradeFour
        letterGradeFour = letterGradeFive
        letterGradeFive = swap
    }
}
printOut("Sorted grades");
printOut(letterGradeOne); 
printOut(letterGradeTwo); 
printOut(letterGradeThree); 
printOut(letterGradeFour);
printOut(letterGradeFive);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/* 
Made a version here that counts each dice roll after each other, but that made it harder to continue further down the assignment.
function diceRoll() {
     return Math.floor(Math.random()*6)+1
 }
let diceCounter = 0
let diceList = []
function duplicateCheck() {
    while (diceList.length < 6) {
        let attempt = diceRoll();
        diceCounter+=1;
        if (!diceList.includes(attempt)) {
            diceList.push(attempt);
        }   
        }
    return diceList;
}
printOut(duplicateCheck().toString());
printOut("It took " + diceCounter + " rolls to get a straight");
printOut(newLine); */

/* Continued but got a bit hard here, tried to ask ChatGPT but the answer didn't seem to work so got help in class and went with the way it was shown for me there.
diceCounter = 0
let dicePairsList = []
function pairsCheck() {
    while (dicePairsList.length < 3) {
        let attempt = diceRoll();
        diceCounter+=1;
        if (!dicePairsList.includes(attempt)) {
            dicePairsList.push(attempt);
        }  
    }
    let additionalRolls = [];
    for (let i = 0; i < dicePairsList.length; i++) {
        additionalRolls.push(diceRoll());
    }

    return {
        original: dicePairsList,
        additional: additionalRolls
        
    };
}
const result = pairsCheck();
printOut(result.toString());
console.log("Result: " + JSON.stringify(result));
console.log("Original Rolls: " + result.original.toString());
console.log("Additional Rolls: " + result.additional.toString()); */

const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();

printOut("diceThrow: " + diceThrow);

const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString();

printOut("diceCount: " + diceCount);

const equals1 = (diceCount.match(/1/g) || "").length;
const equals6 = (diceCount.match(/6/g) || "").length;
const equals2 = (diceCount.match(/2/g) || "").length;
const equals4 = (diceCount.match(/4/g) || "").length;
printOut("equals1: " + equals1.toString());
printOut("equals6: " + equals6.toString());
printOut("equals2: " + equals2.toString());
printOut("equals4: " + equals4.toString());

if(equals1 === 6){
    printOut("Full straight");
  }else if(equals6 === 1){
    printOut("Yatzy!!!");
  }
if(equals2 === 3){
    printOut("Three pairs");
}
if(equals4 === 1 && equals2 === 1) {
    printOut("Tower");
}