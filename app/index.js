import cTable from "console.table";
import prompt from "inquirer";
import connection from "./config/connection.js";
import prompts from "./config/prompts.js";

// Setup my import variables so they dont delete.
// THIS IS TEMPORARY
console.log(connection);
console.log(prompts);
console.log(prompt);
console.log(cTable);
// END TEMP SECTION

// START APPLICATION
console.log("Employee Manager Application");

// launch app
firstPrompt();

function firstPrompt() {}
