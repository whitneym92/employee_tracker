const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employees_db"
});

connection.connect(function (err) {
  if (err) throw err;
});

function start() {
    inquirer
        .prompt({
            type: "list",
            name: "promptChoice",
            message: "What would you like to do in your employee list?",
            choices: [
                "View all employees",
                "View departments",
                "View roles",
                "Add departments",
                "Add employee",
                "Add roles",
                "Update an employee's role",
                "Exit"
            ]
        })
        .then(function(response) {
            switch (response.promptChoice) {
                case "View all employees":
                    viewEmployee();
                    break;
                case "View departments":
                    viewDepartments();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                case "Add departments":
                    addDepartment();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "Add roles":
                    addRoles();
                    break;
                case "Update an employee's role":
                    updateRole();
                    break;
                case "Exit":
                    connection.end();
            };
        });
}

function viewEmployee(){

};

function viewDepartments(){

};

function viewRoles(){

};

function addDepartment(){

};

function addEmployee(){

};

function addRoles(){

};

function updateRole(){

};

start();