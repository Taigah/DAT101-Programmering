"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const taskOneOriginal = 2 + 3 * 2 - 4 * 6;
const taskOneParenthesis = 2 + (3 * 2) - (4 * 6);

printOut("2 + 3 * 2 - 4 * 6 = " + taskOneOriginal.toString());
printOut("2 + (3 * 2) - (4 * 6) = " + taskOneParenthesis.toString())
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const centimeters = (25 * 100) + 34;
const inches = centimeters / 2.54;
const inchesRounded = parseFloat(inches.toFixed(2));

printOut("25 meters and 34 centimeters = " +  inchesRounded.toString() + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const daysToMinutes = (3 * 24 * 60);
const hoursToMinutes = (12 * 60);
const justMinutes = 14;
const secondsToMinutes = (45 / 60);
const totalMinutes = daysToMinutes + hoursToMinutes + justMinutes + secondsToMinutes;

printOut("3 days, 12 hours, 14 minutes and 45 seconds = " + totalMinutes.toString() + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const minutes = 6322.52;
const minutesToDays = (minutes / 60 ) / 24;
const minutesToHours = (minutesToDays - Math.floor(minutesToDays)) * 24;
const minutesToMinutes = (minutesToHours - Math.floor(minutesToHours)) * 60;
const minutesToSeconds = (minutesToMinutes - Math.floor(minutesToMinutes)) * 60;

printOut("6,322.52 minutes = " + Math.floor(minutesToDays) + " Days, " + Math.floor(minutesToHours) + " hours, " + Math.floor(minutesToMinutes) + " minutes and " + Math.floor(minutesToSeconds) + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const exchangeRate = 76 / 8.6;
const usdToNok = 54 * exchangeRate;

printOut("54 USD = " + Math.floor(usdToNok) + " NOK");
printOut(Math.floor(usdToNok) + " NOK = 54 USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const partSixText = "There is much between heaven and earth that we do not understand.";
const textLength = partSixText.length;
const textChar = partSixText.at(18); // Assuming that the first letter is 0
const textCutOut = partSixText.slice(34, 42);
const textWord = partSixText.indexOf("earth");

printOut("The number of characters in the text is: " + textLength);
printOut("The character at position 19 in the text is: " + textChar);
printOut("The characters from position 34 and 8 characters forward are: " + textCutOut);
printOut("The index at which the word earth starts in the text is: " + textWord);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const comparisonOne = 5 > 3;
const comparisonTwo = 7 >= 7;
const comparisonThree = "a" > "b";
const comparisonFour = "1" < "a";
const comparisonFive = "2500" > "acbd";
const comparisonSix = "arne" != "thomas";
const comparisonSeven = 2 == 5;
const comparisonEight = "abcd" > "bcd";

printOut("5 > 3 = " + comparisonOne.toString());
printOut("7 >= 7 = " + comparisonTwo.toString());
printOut("a > b = " + comparisonThree.toString());
printOut("1 < a = " + comparisonFour.toString()); // this statement shows as true when in reality it would not be true. This is only because of the unicode value 1 and a have.
printOut("2500 > abcd = " + comparisonFive.toString());
printOut("arne != thomas = " + comparisonSix.toString());
printOut("2 == 5 = " + comparisonSeven.toString());
printOut("abcd > bcd = " + comparisonEight.toString());
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const textToNumberOne = "254";
const textToNumberTwo = "57.23";
const textToNumberThree = "25 kroner";

printOut(Number(textToNumberOne));
printOut(Number(textToNumberTwo));
printOut(Number(textToNumberThree));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random()*361)+1;
printOut(r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const days = 131
const daysToWeeks = days / 7
const DaysLeftOver = days % 7

printOut("131 days is equal to " + Math.floor(daysToWeeks) + " weeks and " + DaysLeftOver.toString() + " days.");
printOut(newLine);