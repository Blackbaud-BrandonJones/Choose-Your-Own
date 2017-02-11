var answer = prompt("Are you ready for an adventure?");
if(answer === 'yes') {
  console.log("lets get this adventure rolling");
  answer = prompt("well then lets go!  sea or desert?");
  if(answer === 'sea') {
    console.log("get aboard the pirate ship and lets go!");
  } else if(answer === "desert" ){
    console.log("desert")
  } else {
    console.log("game ends")
  }
} else {
  console.log("good bye! play next time");
}
