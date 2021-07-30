module.exports = {
  initialPrompt: {
    type: "list",
    name: "task",
    message: "What would you like to do?",
    choices: [
      /* THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role */
      /* ------ VIEW -------- */
      "View Employees", // viewEmployee();
      "View Departments", // viewDepartments();
      "View Roles", // viewRoles();
      /* -------- ADD -------- */
      "Add Employee", // addEmployee();
      "Add Department", // addDepartment();
      "Add Role", // addRole();
      /* ------- UPDATE -------- */
      "Update Employee Role", // updateEmployeeRole();
      /* -------- REMOVE --------- */
      "Remove Employee", // removeEmployees();
      "Remove Department", // removeDepartment();
      "Remove Role", // removeRole();
      /* ------- EXIT --------- */
      "Exit",
    ],
  },
  /* ----- Prompt --*/
};
