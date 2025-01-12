// when the addition button is clicked, a number goes up by 1
// when the subtraction button is clicked , a number goes down by 1

const additionbtn = document.getElementById('addition');
const subtractionbtn = document.getElementById('subtraction');
let tally = document.getElementById('tally')
let total = 0; 
limit = 20

const limitCounter = ()=>{
    if (total >limit){
        total = 20;
    }
    if (total< 0){
        total=0;
    }
    document.body.style.setProperty('background-color',`rgb(${(total/limit)*255},${(total/limit)*90},${(total/limit)*150})`)

}

// add an event listener for when the button is clicked 
additionbtn.addEventListener('click',()=>{
    total += 1 ;
    limitCounter()
    tally.textContent= total;
    // return tally

})  

subtractionbtn.addEventListener('click',()=>{
    total -= 1 ;
    limitCounter();
    tally.textContent= total;
   
    // return tally

})

limitCounter()