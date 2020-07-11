const fs = require("fs");
const inquirer = require("inquirer");
const generator = require("./utils/generateMarkdown");
const util = require("util");

// askQuestions().then(({ userName, description, installInstructions, usageDetails, credits, license }) => {
    // console.log(userName, description, installInstructions, usageDetails, credits, license)});
// array of questions for user
const questions = [
    {
        message: "What is your name?",
        name: "userName"
    },
    {
        message: "What is the project name?",
        name: "title"
    },
    {
        message: "A quick description of your project",
        name: "description"
    },
    {
        message: "Any special Installation instructions?",
        name: "installInstructions"
    },
    {
        message: "How do you use the project?",
        name: "usageDetails"
    },
    {
        message: "Who helped to build it?",
        name: "credits"
    },
    {
        message: "What kind of license?",
        name: "license"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
