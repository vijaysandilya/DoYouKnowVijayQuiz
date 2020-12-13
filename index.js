var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
var score = 0;
console.log ("Welcome " + userName+ "! Let's play 'DO YOU KNOW VIJAY'");

function play (cquestion,canswer)
{
  var userName = readlineSync.question(cquestion);

  if (userName.toUpperCase() === canswer.toUpperCase())
  {
    console.log ("Right :)");
    score = score+1;
    console.log ("Your current score is: "+score);
  }
  else
  {
    console.log ("Nooo :(");
  }
  console.log("---------------")
}

var questions = [
  {
    question: "Where do i live? ",
    answer: "Bangalore",
  },
  {
    question: "Where do i work? ",
    answer: "Razorpay",
  },
  { 
    question: "What is my mum's name? ",
    answer: "Jyothi",
  },
  {
    question: "What is my real name? ",
    answer: "Sandilya",
  }
]

for(var i=0; i<questions.length; i++ )
{
  play(questions[i].question,questions[i].answer,);
}

console.log("Yaaayyyy!!!! Your final score is: "+score);

