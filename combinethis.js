
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
const chalk = require("chalk");


var firstPresident = new BasicCard(
    "Who was the first president of the United States?",
     "George Washington");

     console.log("========================================================================");
     console.log(chalk.blue.bold(firstPresident.front)); 


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", 
    "George Washington");

    console.log(chalk.red.bold("Answer: " + firstPresidentCloze.cloze)); 

// " ... was the first president of the United States.
    console.log(chalk.green.bold(firstPresidentCloze.partial)); 
    console.log("========================================================================");


// "George Washington was the first president of the United States.
   
    console.log(chalk.black.bold(firstPresidentCloze.full));
     console.log("========================================================================");


