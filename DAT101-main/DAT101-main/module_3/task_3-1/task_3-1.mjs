"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 7;
if (wakeUpTime == 7) {
  printOut("If I wake up at exactly 7 o'clock then I can catch the bus to school.");
} 
else if (wakeUpTime == 8) {
  printOut("Otherwise if I wake up exactly at 8 o'clock, I can take the train to school");
}
else {
  printOut("Otherwise I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let variable = -5
if (variable > 0) {
  printOut("Positive");
}
else if (variable < 0) {
  printOut("Negative");
}
else {
  printOut("Zero");
}
printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let pictureSize = Math.floor(Math.random()*8)+1; // Math.floor runder opp tall til hele tall. Ganger med 8 for å få opp til tallet man vil ha. Math.random for tilfeldig tall.
if (pictureSize >= 6) {
  printOut("Image is too large");
}
else if (pictureSize >= 4) {
  printOut("Thank you.");
}
else {
  printOut("The image is too small");
}
printOut(pictureSize);
printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
const noOfDays =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
const monthIndex = monthList.indexOf(monthName);
const daysInMonth = noOfDays[monthIndex];
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
}
else {
  printOut("You do not need to take vitamin D");
}
printOut("Month: " + monthName);
printOut("Number of days: " + daysInMonth);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/ //efef
if ((monthIndex == 2) || (monthIndex == 4)) {
  printOut("The art gallery is closed.");
}
else if (monthIndex == 3) {
  printOut("The art gallery is closed, but we have temporary premises in the building next door.");
}
else {
  printOut("The art gallery is open.")
}
printOut(monthName);
printOut(newLine);