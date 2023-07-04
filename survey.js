const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateProfile = async () => {
  const questions = [
    "What's your name? Nicknames are also acceptable :) ",
    "What's an activity you like doing? ",
    "What do you listen to while doing that? ",
    "Which meal is your favorite (eg: dinner, brunch, etc.)? ",
    "What's your favorite thing to eat for that meal? ",
    "Which sport is your absolute favorite? ",
    "What is your superpower? In a few words, tell us what you are amazing at! "
  ];

  const answers = [];

  const askQuestion = (question) => {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  };

  for (const question of questions) {
    const answer = await askQuestion(question);
    answers.push(answer);
  }

  const profile = answers.join('\n');
  console.log(profile);

  rl.close();
};

generateProfile();
