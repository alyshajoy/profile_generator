const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {

  rl.question("What are you most passionate about?", (answer2) => {

    rl.question("What do you like to do for fun?", (answer3) => {

      rl.question("What music do you like to listen to?", (answer4) => {

        rl.question("What's your favourite food?", (answer5) => {

          rl.question("What is your superpower?", (answer6) => {
            console.log(`Hello, my name is ${answer1}. I am most passionate about ${answer2}. I love to ${answer3}. My favourite type of music is ${answer4}. My favourite food is ${answer5}. ${answer6} is my superpower.`)
            rl.close();
          })
        })
      })
    })
  })

});