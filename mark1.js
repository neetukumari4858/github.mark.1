var readlineSync = require('readline-sync');
var userName = readlineSync.question('Enter your Name:-');
var forWelcome = "Welcome"+" "+userName+" "+"do you know me? ";
console.log(forWelcome);

score=0;
function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer ===answer){
    console.log("you are right!");
    score=score+1;
  }else{
    console.log("you are wrong!")
  }
 
  console.log("your score is :",score);
  console.log("-----------")
}
play("where do I live? ","punjab")
play("Do you know my favourite game? ","Badminton")
play("do you know my favourite singer? ","Ammi virk")
play("from where i did my school study? ","punjab")
play("do you know my hobby? ","Reading book")
console.log("your final score is!",score)
if (score===5){
  console.log("congratulation! you are the winner")
  }else{
    console.log("you are the looser !")
}

 






