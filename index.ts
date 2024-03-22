#! /usr/bin/env node

import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing game
// 3) Campare user input with computer generated number and show result


const randomnumber = Math.floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
    {name: "userguessnumber",
    type: "number",
    message: "Please guess a number between 1 to 6:",},
])

if(answer.userguessnumber === randomnumber){
    console.log("Congratulations! you gussed an absolutely right number")
} else{ 
    console.log("Please try again, you guessed wrong number")
}