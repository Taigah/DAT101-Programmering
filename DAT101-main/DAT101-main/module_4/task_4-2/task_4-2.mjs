"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ,18, 19, 20]
let i = 0
for (i in numberArray) {
    i++
    printOut(i);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const joinArray = numberArray.join(" * ");

printOut(joinArray.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const sentence = "Hei på deg, hvordan har du det";
const sentenceArray = sentence.split(" ");

for (let j = 0; j < sentenceArray.length; j++) {
    printOut("Word = " + sentenceArray[j] + " | Index = " + j + " | Word Number = " + (j+1));
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let nameArray = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

function nameArrayRemover (array, name) {
    nameArray.splice(name.indexOf(name), 1);
    printOut(nameArray.includes(name));
    console.log();
}
nameArrayRemover(nameArray, "Anne"); 
printOut(nameArray);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let boyNameArray = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]

let combinedNameArray = nameArray.concat(boyNameArray); // The name "Anne" is removed here because of what we did in the previous part.
printOut(combinedNameArray);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    constructor(aTitle, aAuthor, aISBN) {
        this.aTitle = aTitle
        this.aAuthor = aAuthor
        this.aISBN = aISBN
    }
    toString() {
        return ("Title: " + this.aTitle + " | Author: " + this.aAuthor + " | ISBN: " + this.aISBN);
    }
}
const TBookOne = new TBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", "978-0-7475-3269-9");
const TBookTwo = new TBook("A Game of Thrones", "George R. R. Martin", "0-00-224584-1");
const TBookThree = new TBook("Divergent", "Veronica Roth", "0-06-202402-7");
const bookArray = [TBookOne, TBookTwo, TBookThree];

bookArray.forEach((element)=>printOut(element));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const eWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"},
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    WorkDays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeisdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"}
};

let text = "";
Object.keys(eWeekDays).forEach(key => {
    let day = eWeekDays[key]; // Get the object for each key
    printOut(`Name: ${day.name}, Value: ${day.value}`);
});

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomNumberArray = [];
for (let o = 0; o < 35; o++) { 
    randomNumberArray.push(Math.floor(Math.random() * 20)+1)
}

printOut("Ascending: " + randomNumberArray.sort(function(a, b){return a - b}));
printOut("Descending: " + randomNumberArray.sort(function(a, b){return b - a}));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Dette funket jo tydelig ikke, men tror jeg var inne på noe. Tror jeg fant ut på nettet at man kunne gjøre dette på flere forskjellige måter, men klarte ikke helt å få det til på denne måten

// function numberFrequency(array) {
//     const frequency = {};
//     array.forEach(item => {
//         frequency[item] = (frequency[item] || 0) +1;
//     });
//     return frequency;
// }

const freq = {};
for(let i = 0; i < randomNumberArray.length; i++){
  const value = randomNumberArray[i];
  if(freq[value]){
    freq[value]++;
  }else{
    freq[value] = 1;
  }
}

let freqKeys = Object.keys(freq);
freqKeys.sort(sortFreq);

function sortFreq(aValue1, aValue2){
  const freq1 = freq[aValue1];
  const freq2 = freq[aValue2];
  return freq2 - freq1;
}

text = ""; 
for(let i = 0; i < freqKeys.length; i++){
  const freqKey = freqKeys[i]; 
  const freqValue = freq[freqKey];
  text += freqKey + ": " + freqValue + ", ";
}
printOut(text);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const myTable = [];
for(let row = 0; row < 5; row++){
  const columns = [];
  for(let column = 0; column < 9; column++){
    const cell = + row + "," + column;
    columns.push(cell);
  }
  myTable.push(columns);
}

text = ""; 
for(let row = 0; row < myTable.length; row++){
  const columns = myTable[row];
  for(let column = 0; column < columns.length; column++){
    const cell = columns[column]; 
    text += "[" + cell + "]"; 
  }
  printOut(text);
  text = ""; 
}

printOut(newLine);
