//get inputs
const hoursInput = document.getElementById("hoursInput");
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");

//get outputs
const hoursOutput = document.getElementById("hoursOutput");
const minutesOutput = document.getElementById("minutesOutput");
const secondsOutput = document.getElementById("secondsOutput");

//get start button
const startbutt = document.getElementById("startTimer");

//set global variables
let targetTime;
let timerInterval;

//

const updateTimer = () =>{
    if(targetTime){ //if the targer time exist //targetTime - datenow  is basically our inputs but since datenow is always movving forward but our target time remains the same. the outputs decrease correspondingly
        const diffinSeconds = Math.floor(targetTime - Date.now()) / 1000; //date now returns the number elapsed since midnight in ms so dividing by 1000 changes everything to seconds
        if (diffinSeconds<1){
            clearInterval(timerInterval);
        }

        const hours =Math.floor(diffinSeconds/3600); // changes to hours

        const minutes = Math.floor(diffinSeconds/ 60) % 60 // changes to minutes mod 60;

        const seconds = Math.floor(diffinSeconds % 60) // stores in seconds using modulus;

        hoursOutput.textContent = `${hours} hours`;
        minutesOutput.textContent = `${minutes} minutes`;
        secondsOutput.textContent = `${seconds} seconds`;

    }
};

//here is where we define our targettime and what we're gonna do with our inputs

startbutt.addEventListener('click', ()=>{
    const futureHours= parseInt(hoursInput.value) ; //get the values of integers in the html doc
    const futureMinutes= parseInt(minutesInput.value) ; 
    const futureSeconds= parseInt(secondsInput.value) ;

    const date = new Date();

    const currentHours = date.getHours(); //gets the hours, minutes, seconds since midnight of the current date respectively
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    date.setHours(currentHours + futureHours); //set the hours to be input(future) plus  current
    date.setMinutes(currentMinutes + futureMinutes);
    date.setSeconds(currentSeconds + futureSeconds);

    targetTime = date.getTime(); //target time is ultimately all the inputs plus current time by computer system
    localStorage.setItem('targetTime',targetTime); // store the value of targetime
    updateTimer();
    timerInterval = setInterval(updateTimer, 500); // interval for calling the function in ms
});
 

const storedTargettime = localStorage.getItem('targetTime'); //get the value of current time

//call it out ?
if (storedTargettime){
    targetTime = storedTargettime;
    updateTimer();
    timerInterval = setInterval(updateTimer,500);
};


updateTimer();
