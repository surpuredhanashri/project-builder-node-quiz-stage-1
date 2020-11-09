const fs = require("fs")
const question = require('./questions')

//
fs.writeFileSync("questions.json", JSON.stringify({ questions: [] }))

// 
const questionsJson = JSON.parse(fs.readFileSync("questions.json"))

// calling qustion() which retuns object of question, options and answer and is appended to questions array 
questionsJson.questions.push(question())

// updating the json file after adding new question into array
fs.writeFileSync("questions.json", JSON.stringify(questionsJson))
