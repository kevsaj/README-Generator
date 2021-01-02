
const questions = [
    {
        type: 'input',
        name: 'test',
        message: 'Yo Wat-up dawg?'
    },
    {
        type: "input",
        name: "username",
        message: "Give me your Github username, yo"
    },
    {
        type: "input",
        name: "title",
        message: "Name your app, yo"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your app, yo"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this app, yo"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this app, yo"
    },
    {
        type: "input",
        name: "credits",
        message: "Who helped you make this app, yo"
    },
    {
        type: "input",
        name: "tests",
        message: "Tell us how to test your app, yo"
    },
    {
        type: "list",
        name: "license",
        message: "Pick a License yo",
        choices: [
            "GNU",
            "MIT",
            "Mozilla",
        ]
    },
    {
        type: "input",
        name: "contacts",
        message: "Give me your contacts yo?"
    }

];

module.exports = questions;