const  Btn = document.querySelector('button');
const spanEL = document.querySelector('span');

// add an event listener to btn for when it is clicked, the call back a function that asks for the users name
// store the results of the input in a variable 

Btn.addEventListener('click',()=>{
    const EnterName = prompt("what's your name pal");
    spanEL.textContent= EnterName + "!";
})