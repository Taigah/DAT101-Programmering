"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function dateToday() {
    const date = new Date();
    return (date.toLocaleString("no-NB"));
}
printOut(dateToday());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function releaseDate() {
    const release = new Date(2025, 4, 14).getTime();
    const date = new Date().getTime();
    var countdown = release - date;
    var days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    return "It is " + days + " days until 2XKO releases.";
}
printOut("Todays date is " + dateToday() + ".")
printOut(releaseDate());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function circle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * (radius * radius);
    return "diameter = " + diameter + " | circumference = " + circumference + " | area = " + area;
}
printOut(circle(5));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rectangle(rectangleHeight, rectangleWidth) {
    const rectangleCircumference = rectangleHeight + rectangleHeight + rectangleWidth + rectangleWidth;
    const rectangleArea = rectangleHeight * rectangleWidth;
    return "Circumference = " + rectangleCircumference + " Area = " + rectangleArea;
}
printOut(rectangle(10,4));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const temperatureType = { celsius: 1, fahrenheit: 2, kelvin: 3};

function temperatureConversion(temperature, type) {
    let fahrenheit = 0;
    let celsius = 0;
    let kelvin = 0;
    switch (type) {
        case temperatureType.celsius:
            printOut("Convert from celsius");
            celsius = temperature;
            fahrenheit = (celsius * 9) / 5 + 32;
            kelvin = celsius + 273.15;
            break;
        case temperatureType.fahrenheit:
            printOut("Convert from fahrenheit");
            fahrenheit = temperature;
            celsius = (fahrenheit - 32) * (5/9);
            kelvin = (fahrenheit - 32) * (5/9) + 273.15 
            break;  
        case temperatureType.kelvin:
            kelvin = temperature;
            celsius = kelvin - 273.15;
            fahrenheit = (kelvin -273.15) * (9/5) +32 
            printOut("Convert from kelvin");
            break;
  }
    printOut("celsius = " + celsius.toFixed(0));
    printOut("fahrenheit = " + fahrenheit.toFixed(0));
    printOut("kelvin = " + kelvin.toFixed(0));
    }

temperatureConversion(37.5, temperatureType.celsius);
temperatureConversion(32, temperatureType.fahrenheit);
temperatureConversion(100, temperatureType.kelvin);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateNetPrice(aPrice, aTaxGroup) {
    let net = NaN;
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;
  
    printOut("taxGroup = " + taxGroup);
  
    switch (taxGroup) {
      case "NORMAL":
        vat = 25;
        break;
      case "FOOD":
        vat = 15;
        break;
      case "HOTEL" && "TRANSPORT" && "CINEMA":
        vat = 10;
        break;

    }
  
    if (!Number.isNaN(vat)) {
      net = (100 * aPrice) / (vat + 100);
      console.log("calc " + aPrice +  " " +vat )
    }
  
    return net;
  }
  
  const netPrice1 = calculateNetPrice(100, "NORMAL");
  if (Number.isNaN(netPrice1)) {
    printOut("Unknown VAT group!");
  } else {
    printOut("netPrice1 = " + netPrice1.toFixed(2));
  }
  
  const netPrice2 = calculateNetPrice(100, "goblins");
  if (Number.isNaN(netPrice2)) {
    printOut("Unknown VAT group!");
  } else {
    printOut("netPrice2 = " + netPrice2.toFixed(2));
  }

  const netPrice3 = calculateNetPrice(100, "food");
  if (Number.isNaN(netPrice3)) {
    printOut("Unknown VAT group!");
  } else {
    printOut("netPrice3 = " + netPrice3.toFixed(2));
  }

  const netPrice4 = calculateNetPrice(100, "cinema");
  if (Number.isNaN(netPrice4)) {
    printOut("Unknown VAT group!");
  } else {
    printOut("netPrice4 = " + netPrice4.toFixed(2));
  }

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let speed = null;
let distance = null;
let time = null;

function threeArguments(speed, distance, time) {
    

    if (speed === null && distance != null && time != null) {
        speed = distance / time;
        return speed;
    } else if (distance === null && speed != null && time != null) {
        distance = speed * time
        return distance;
    } else if (time === null && speed != null && distance != null) {
        time = distance / speed;
        return time;
    } else if (!Number.isNaN(speed && distance)) {
        return NaN;
    } else if (!Number.isNaN(speed && time)) {
        return NaN;
    } else if (!Number.isNaN(distance && time)) {
        return NaN;
    }

}

const findSpeed = threeArguments(speed, 100, 20);
printOut("findSpeed = " + findSpeed);

const findDistance = threeArguments(5, distance, 15);
printOut("findDistance = " + findDistance);

const findTime = threeArguments(12, 600, time);
printOut("findTime = " + findTime);

const missingTwoArguments = threeArguments(speed, distance, 20);
printOut("missingTwoArguments = " + missingTwoArguments);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function fourArguments(textString, textSize, textCharacter, textCheck) {

    if (textString.length < textSize) {
        const missingCharacter = textSize - textString.length;
        const repeatCharacter = textCharacter.repeat(missingCharacter)
        if (textCheck) {
            textString += repeatCharacter
        } else {
            textString = repeatCharacter + textString
        }
    }

    return textString;
}

printOut(fourArguments("hallo", 10, "a", true));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testIfMathIsFun() {
    let op = 1;
    let line = 1;
    // Left side
    let ok = false;
    do {
      let sumLeft = 0;
      for (let left = 0; left < line + 1; left++) {
        sumLeft += op;
        op++;
      }
    // Right Side
      let sumRight = 0;
      for (let right = 0; right < line; right++) {
        sumRight += op;
        op++;
      }
  
      if (sumLeft !== sumRight) {
        ok = false;
        printOut("Error in line " + line.toString());
      }else{
        ok = true;
      }
      line++;
  
      if(line > 200){
        printOut("Math is Fun!");
        break;
      }
    } while (ok);
  }
  
testIfMathIsFun();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(number) {
    if (number === 1 || number === 0) {
        return 1;
    } else {
        return number * factorial(number-1);
    }
}

printOut(factorial(10).toString());
printOut(newLine);
