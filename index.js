const fs = require("fs");
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let team = [];

// Manager should enter their own information first.
// Depending on selection manager is taken to appropriate function
const determineRole = () => {
return inquirer.prompt([
    {
    type: "list",
    name: "role",
    message: "Select a role",
    choices: ["Manager", "Engineer", "Intern"]
    },
])
 .then(function (data) {
     switch (data.role) {
        case "Manager":
            generateManager();
            break;
        case "Engineer":
           generateEngineer();
           break;
        case "Intern":
           generateIntern();
           break;
     }
 });
}

// Manager profile builder. At the end it will loop back to employee role selection
const generateManager = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is your name?",
        },
        {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
        },
        {
        type: "input",
        name: 'email',
        message: "Enter your email address",
        },
        {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        }
    ])
    .then((answers) => {
        const teammate = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(teammate)
        determineRole();
    });
    
};

// Engineer profile builder. At the end manager will be asked if want to add another employee
function generateEngineer() {
    return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
        },
        {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID?",
        },
        {
        type: "input",
        name: "email",
        message: "What is the Engineer's email",
        },
        {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?",
        }
    ])
    .then((answers) => {
        const teammate = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(teammate)
        promptEmployee();
    })
}

// Intern profile builder. At the end manager will be asked if want to add another employee
function generateIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
          },
          {
          type: "input",
          name: "id",
          message: "What is the Intern's ID?",
          },
          {
            type: "input",
            name: "email",
            message: "What is the Intern's email?"
          },    
        {
            type: "input",
            name: "school",
            message: "What school did the Intern attend?",
        }
    ])
    .then((answers) => {
        const teammate = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(teammate)
        promptEmployee();
    })
}

//Asks manager if wants to add another employee. If so, will return to determineRole. If not, will generate team array
function promptEmployee() {
    inquirer.prompt([
        {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another employee?",
        },
    ])
    .then((answer) => {
        if (answer.confirmAddEmployee) {
        determineRole();
      } else {
        teamRoster(team);
      }
    });
};

function teamRoster(team){
    const html = generateHTML(team);
    console.log(team);
    fs.writeFile("./dist/index.html", html, "utf8", (err) => {
        if (err) {
           return console.log(err);
           } else {
           console.log("Your team has been created!");
           console.log(html);
        }
    })
}


// Prompts manager to enter their information
function init() {
    console.log("Welcome Manager! Let's enter your information first");
    determineRole();
}

// initializes app
init();






