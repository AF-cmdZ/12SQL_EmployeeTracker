const inquirer = require("inquirer");
const cTable = require("console.table");
import connection from "./config/connection.js";
require("console.table");
const prompt = require("./config/prompts.js");

// Setup my import variables so they dont delete.
// THIS IS TEMPORARY
console.log(connection);
console.log(prompt);
console.log(inquirer);
console.log(cTable);
// END TEMP SECTION

// START APPLICATION
console.log("Employee Manager Application");

// launch app
firstPrompt();

function firstPrompt() {}
