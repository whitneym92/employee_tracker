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
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        start();
    })

};

function viewDepartments(){
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        start();
    })

};

function viewRoles(){
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        start();
    })

};

function addDepartment(){
    var query = "INSERT INTO department (name) VALUES (?)"
    inquirer
    .prompt([{
        name: "department",
        type: "input",
        message: "What's the name of your new department?"
    }]).then(function (res) {
        const departmentName = [res.department]
        connection.query(query, departmentName, function (err, res) {
            console.log("Department has been submitted.");
            start();
        })
    })

};

function addEmployee(){
    var query = "INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)"
    inquirer
    .prompt([{
        name: "firstName",
        type: "input",
        message: "What is the employee's first name?"
    },
    {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?"

    },
    {
        name: "role",
        type: "input",
        message: "What is the employee's Role ID?"

    }]).then(function (res) {
        var employee = [res.firstName, res.lastName, res.role];
        connection.query(query, employee, function(err, res){
            if (err) throw err;
            console.log("New employee submitted.");
            start();
        })
    })

};

function addRoles(){

};

function updateRole(){

};

start();