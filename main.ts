#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";

    console.log (chalk.blue.italic("\n \t Wellcome to Currency Converter \n"));
    

// Define the list of currencies and their exchange rate
let exchange_rate: any = {
    "USD": 1,  // Base currency
    "EUR": 0.9, // European currency (EURO)
    "JYP": 113, // Japenes currency (JYP)
    "CAD": 1.3, // Canadian currency (CAD)
    "AUD": 1.65, // Australian currency (AUD)
    "PKR": 278, //  Pakistani currency (PKR)
    "INR": 83, // Indian currency (INR)
    "LKR": 301, // Srilankan currency (LKR)
    "BDT": 109, // Bangladesh currency (BDT)
};

// Prompt the users to select currencies to convert from and to
let user_answers = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the  currency to convert from",
        choices: ["USD" , "EUR" , "JYP" , "CAD" , "AUD", "PKR" , "INR" , "LKR" , "BDT"]
    },

    {
        name: "to_currency",
        type: "list",
        message: "select the  currency to convert into",
        choices: ["USD" , "EUR" , "JYP" , "CAD" , "AUD", "PKR" , "INR" , "LKR" , "BDT"]
    },

    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert"
    },
])

// Perform currency to conversation by using formaula
let from_amount = exchange_rate[user_answers.from_currency]
let to_amount = exchange_rate[user_answers.to_currency]
let amount = user_answers.amount

// Formulas of conversation
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted amount ${converted_amount.toFixed(0)}`);

console.log (chalk.blue.italic("\n \t Thank you \n"));;

 