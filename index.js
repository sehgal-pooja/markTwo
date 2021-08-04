var readlineSync = require("readline-sync")

var score = 0

console.log("Hey! Welcome to 'The Harry Potter' quiz")
console.log("Here you go...........")

function areYouPotterHead(question, answer){
   var userAnswer = readlineSync.question(question);

   if(userAnswer.toUpperCase() === answer.toUpperCase()){
     console.log("That's correct you Potter Head :)")
     score = score + 10;
     console.log("Score:",score)
     console.log("           ")
   }
   else{
     console.log("Oops!! That's wrong :(")
     score = score - 10;  
     console.log("Score:",score)
     console.log("           ")
   }
}

var questions = [
  {
    question : "What are the names of Harry Potter's two best friends? ",
    answer : "Ron and Hermione"
  },{
    question : "Which wizarding school does Harry attend? ",
    answer : "Hogwarts"
  },{
    question : "What Hogwarts House is Harry in? ",
    answer : "Gryffindor"
  },{
    question : "What item do wizards play Quidditch on? " ,
    answer : "Brooms"
  },{
    question : "What is the British word for nonmagical people? ",
    answer : "Muggle"
  },{
    question : "Which animal is associated with Slytherin? ",
    answer : "Snake"
  }
]
 
for( var i = 0; i < questions.length ; i++){
  areYouPotterHead(questions[i].question, questions[i].answer)
} 

function displayScores(){
  console.log("Your final score is:", score)
  if(score > 30){
    console.log("You did a great job!!!")
  }
  else{ 
    console.log("Ahh, that's okay. Better luck next time!!!")
  }
  console.log("    ")
  console.log("Here's the list of people with the highest scores:");
  highScores.map(score => console.log(score.name,":",score.score))
}

var highScores = [
  {
    name: "Pooja",
    score : 60
  },
  {
    name: "Harry",
    score: 50
  }
]

displayScores();

