const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userProfile = {};
let currentQuestion = 0;

function askQuestion(question) {
  rl.question(question, (answer) => {
    userProfile[currentQuestion] = answer;
    currentQuestion++;
    askNextQuestion();
  });
}

function askNextQuestion() {
  const questions = [
    "What's your name? Nicknames are also acceptable :) ",
    "What's an activity you like doing? ",
    "What do you listen to while doing that? ",
    "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
    "What's your favourite thing to eat for that meal? ",
    "Which sport is your absolute favourite? ",
    "What is your superpower? In a few words, tell us what you are amazing at! "
  ];

  if (currentQuestion < questions.length) {
    askQuestion(questions[currentQuestion]);
  } else {
    // All questions answered, generate and display the profile
    generateProfile();
  }
}

function generateProfile() {
  console.log("\n--- Your Online Profile ---");
  console.log(`Name: ${userProfile[0]}`);
  console.log(`Activity: ${userProfile[1]}`);
  console.log(`Music: ${userProfile[2]}`);
  console.log(`Favorite Meal: ${userProfile[3]}`);
  console.log(`Favorite Food: ${userProfile[4]}`);
  console.log(`Favorite Sport: ${userProfile[5]}`);
  console.log(`Superpower: ${userProfile[6]}`);
  console.log("\nThank you for sharing your information!");

  rl.close();
}

askNextQuestion();
