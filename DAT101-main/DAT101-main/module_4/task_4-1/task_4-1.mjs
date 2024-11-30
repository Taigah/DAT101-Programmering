"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const accountType = {normal:"Brukskonto", saving:"Sparekonto", credit:"Kreditkonto", pension:"Pensjonkonto"};
printOut(accountType.normal + ", " + accountType.saving + ", " + accountType.credit + ", " + accountType.pension);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class bankAccount {
    static CurrencyTypes = {
        NOK: {value: 1.0000, name: "Norske Kroner"         , denomination: "Nkr"},
        EUR: {value: 0.0985, name: "Europeiske euro"       , denomination: "€" },
        USD: {value: 0.1091, name: "United States dollar"  , denomination: "$" },
        GBP: {value: 0.0847, name: "Pound sterling"        , denomination: "£"},
        INR: {value: 7.8309, name: "Indiske rupee"         , denomination: "₹"},
        AUD: {value: 0.1581, name: "Australske dollar"     , denomination: "A$"},
        PHP: {value: 6.5189, name: "Filippinske peso"      , denomination: "₱"},
        SEK: {value: 1.0580, name: "Svenske kroner"        , denomination: "kr"},
        CAD: {value: 0.1435, name: "Canadiske dollar"      , denomination: "C$"},
        THB: {value: 3.3289, name: "Thai baht"             , denomination: "฿"}
    }
    constructor(type, balance, withdrawCount, currencyType = "NOK") {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 4;
        this.currencyType = bankAccount.CurrencyTypes[currencyType];
    }
    // print account type
    typeToString() {
         printOut("myAccount = " + this.type)
    }
    // set the account type
    setType(aType) {
        printOut("Account is changed from " + this.type + " to " + aType)
        this.type = aType;
        if (aType !== "Sparekonto") {
            this.withdrawCount = 0;  // Disable withdrawals for other account types.
        } else {
            this.withdrawCount = 4;  // Reset withdraw count if back to Sparekonto.
        }
    }
    // get the balance in the account
    getBalance() {
        printOut("My account balance is " + this.balance);
    }
    // deposit an amount into the account
    deposit(aAmount, aCurrency = this.currencyType) {
        aCurrency = {name:"NOK", value:1.0000 , denomination:"Nkr"}
        if (!aCurrency) {
            aCurrency = {name:"NOK", value:1.0000 , denomination:"Nkr"}
        }
        let currencyValue = bankAccount.CurrencyTypes[aCurrency].value
        const conversionRate = currencyValue / this.currencyType.value;
        const convertedAmount = aAmount * conversionRate;
        this.balance += convertedAmount;
        printOut("Deposit of " + aAmount + aCurrency.denomination + ", new balance is " + this.balance.toFixed(2) + this.currencyType.denomination);
    }
    // withdraw an amount from the account with certain limits to different account types
    withdraw(aAmount, aCurrency = this.currencyType) {
        if (!aCurrency) {
            aCurrency = {name:"NOK", value:1.0000 , denomination:"Nkr"}
        }
        const conversionRate = bankAccount.CurrencyTypes[aCurrency].value / this.currencyType.value;
        const convertedAmount = aAmount * conversionRate;
        switch(this.type) {
            case "Sparekonto":
                if (this.withdrawCount > 0) {
                    this.balance -= convertedAmount;  // Perform the withdrawal
                    this.withdrawCount -= 1;  // Decrease withdrawal count
                    printOut("Withdrawal of " + aAmount + aCurrency.denomination + ", new balance is " + this.balance.toFixed(2) + this.currencyType.denomination);
                } else {
                    printOut("You can't withdraw more than 3 times from a Sparekonto.");
                }
                break;
            case "Pensjonkonto":
                this.withdrawCount = 0;
                printOut("You can't withdraw from a Pensjonkonto!");
                break;
            case "Brukskonto":
                this.balance -= aAmount;
                printOut("Withdrawal of " + aAmount + aCurrency.denomination + ", new balance is " + this.balance.toFixed(2) + this.currencyType.denomination);
                break;
            case "Kreditkonto":
                this.balance -= aAmount;
                printOut("Withdrawal of " + aAmount + aCurrency.denomination + ", new balance is " + this.balanceto.toFixed(2) + this.currencyType.denomination);
                break;
        }
        if (aCurrency.name !== "NOK") {
            const convertedAmount = aAmount * this.currencyType.value
            printOut("Converted amount " + convertedAmount.toString());
        }
    }
    // change between different currencies
    setCurrencyType(aCurrency) {
        if (this.currencyType != bankAccount.CurrencyTypes[aCurrency]) {
            const conversionRate = (bankAccount.CurrencyTypes[aCurrency].value) / (this.currencyType.value);
            printOut("The account currency has changed from " + this.currencyType.name + " to " + bankAccount.CurrencyTypes[aCurrency].name);
            printOut("New balance is " + ((this.balance * conversionRate).toFixed(2)) + bankAccount.CurrencyTypes[aCurrency].denomination);
        } else {
            printOut("The account already uses this currency")
        }
    }
}
const myAccount = new bankAccount(accountType.normal,0,4);
myAccount.typeToString();
myAccount.setType(accountType.saving);
myAccount.typeToString();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(200);
myAccount.withdraw(150);
myAccount.getBalance();
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(10);
myAccount.setType(accountType.pension);
myAccount.withdraw(10);
myAccount.setType(accountType.saving);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setCurrencyType("NOK");
myAccount.setCurrencyType("SEK");
myAccount.setCurrencyType("USD");
myAccount.setCurrencyType("NOK");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(12, "USD");

printOut("Replace this with you answer!");
printOut(newLine);

// test //