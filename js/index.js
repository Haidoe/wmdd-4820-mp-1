//This is a dance move application that allows for them to
// be saved in a list form

// You will need an array to save the entries to, and an event listener,
// like we went over in class, to save the entries when a button is clicked

// *** Hint: Look at the HTML IDs on how to select elements.

//Constants
const outputHeader = "Your Dance Move:";

// Will Store all the Dance Moves
let danceMoves = [];

const displayDanceMoves = () => {
  let output = "";

  for (let i = 1; i <= danceMoves.length; i++) {
    output += `<li>Dance move #${i} : ${danceMoves[i - 1]}</li>`;
  }

  //Adding the Wrapper List Tag
  output = `<ul>${output}</ul>`;

  //Adding the Main Header
  output = `<h2>${outputHeader}</h2> ${output}`;

  //Display to DOM
  danceList.innerHTML = output;
};

const eventHandler = () => {
  let danceInputElement = document.getElementById("danceInput");

  let danceMove = danceInputElement.value;

  //This is to check if the danceInput is empty
  if (!danceMove) {
    // End the event
    return;
  }

  //Adding to the List
  danceMoves.push(danceMove);

  //Clearing the user dance input
  danceInputElement.value = "";

  displayDanceMoves();
};

//Create Event Listener
submitBtn.addEventListener("click", eventHandler);

//Counter the Event happening when using Enter Keyword
//Added Event Handler
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  eventHandler();
});
