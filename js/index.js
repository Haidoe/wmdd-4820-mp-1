//This is a dance move application that allows for them to
// be saved in a list form

// You will need an array to save the entries to, and an event listener,
// like we went over in class, to save the entries when a button is clicked

// *** Hint: Look at the HTML IDs on how to select elements.

// //Constants
// const outputHeader = "Your Dance Move:";

// // Will Store all the Dance Moves
// let danceMoves = [];

// const displayDanceMoves = () => {
//   let output = "";

//   for (let i = 1; i <= danceMoves.length; i++) {
//     output += `<li>Dance move #${i} : ${danceMoves[i - 1]}</li>`;
//   }

//   //Adding the Wrapper List Tag
//   output = `<ul>${output}</ul>`;

//   //Adding the Main Header
//   output = `<h2>${outputHeader}</h2> ${output}`;

//   //Display to DOM
//   danceList.innerHTML = output;
// };

// const eventHandler = () => {
//   let danceInputElement = document.getElementById("danceInput");

//   let danceMove = danceInputElement.value;

//   //This is to check if the danceInput is empty
//   if (!danceMove) {
//     // End the event
//     return;
//   }

//   //Adding to the List
//   danceMoves.push(danceMove);

//   //Clearing the user dance input
//   danceInputElement.value = "";

//   displayDanceMoves();
// };

// //Create Event Listener
// submitBtn.addEventListener("click", eventHandler);

// //Counter the Event happening when using Enter Keyword
// //Added Event Handler
// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   eventHandler();
// });


// // array that contain user input
// let myList =[];
// // to submit when user mouse click submit button
// submitBtn.addEventListener ('click',()=>{
//     //add latest input to the end of array 
//     myList.push(danceInput.value);
//         // console.log(myList);
    
//     // run input to list
//     let userDanceList = `<h2>Your Dance Moves</h2><ul>`
//     for(i=0;i<myList.length;i++){
//         userDanceList += `<li>Dance move #${i+1} : ${myList[i]}</li>`;
//     }
//         // console.log (userDanceList);
//     // put the list out to output area    
//     danceList.innerHTML = userDanceList+`</ul>`
    
//     // keeping input box clear and focus for new input
//     danceInput.value = "";
//     danceInput.focus();
// })
// // to submit when user press ENTER
// form.addEventListener ('keydown',(e)=>{
//     if (e.code === "Enter") { 
//     event.preventDefault();
//     submitBtn.click();
//     }
// })

// array that contain user input
let myList =[];
// to submit when user mouse click submit button
submitBtn.addEventListener ('click',()=>{
    //add latest input to the end of array 
    myList.push(danceInput.value);
        // console.log(myList);
    
    // run input to list
    let userDanceList = `<h2>Your Dance Moves</h2><ul>`
    for(i=0;i<myList.length;i++){
        userDanceList += `<li>Dance move #${i+1} : ${myList[i]}</li>`;
    }
        // console.log (userDanceList);
    // put the list out to output area    
    danceList.innerHTML = userDanceList+`</ul>`
    
    // keeping input box clear and focus for new input
    danceInput.value = "";
    danceInput.focus();
})

// to submit when user press ENTER
form.addEventListener ('keydown',(e)=>{
    if (e.code === "Enter") { 
    e.preventDefault();
    submitBtn.click();
    }
})