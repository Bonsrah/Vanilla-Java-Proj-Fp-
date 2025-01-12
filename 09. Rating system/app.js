// creating an array of our Data

const initialQuestions =[
    {
        label:'Action',
        Rating:0,
    },
    {
        label:'Drama',
        Rating:0,
    },
    {
        label:'Thriller',
        Rating:0,
    },
    {
        label:'Comedy',
        Rating:0,
    },
];

const storedQuestions = JSON.parse(localStorage.getItem('storedQuestions'));

const Questions= storedQuestions || initialQuestions;

const makeStarRating = question=>{
    const container = document.createElement('div'); // create a div tag that will keep the labels and that div of stars
    const label = document.createElement('label'); // create a label tag
    label.textContent = question.label ; // the contents of the label tag will be the object label in the array
    container.appendChild(label); // place label within the div
    container.appendChild(makeStars(1,question)); //place the function make stars within the div

    return container; //return the container
}

const makeStars = (maxValue, question)=>{
    const starContainer= document.createElement('div'); //create div for stars

    for(let starPosition = 1;starPosition<= maxValue; starPosition++ ){ //untilll startposition is the same as max value run this code
        const starEl = document.createElement('span'); // create a span of stars for the number of maxValues
        starContainer.appendChild(starEl);// place the span within the div
        if (starPosition <= question.Rating){ // check if the startposition = 1 is less the question.Rating(Rating object in the array) = 0
            starEl.classList.add('filled'); //if yes, add filled classlist
        }else{
            starEl.classList.add('empty'); // if no ,add the empty class list to the span start EL
        };

        starEl.onclick=()=>{ //on click on a specifi span which has star
            for(let i =0; i<maxValue ; i++){
                if(i < starPosition){ //while i remains lower than the starPosition onlick add classlist at the span that has been click
                    starContainer.children[i].classList.add('filled') //if the position of the span the has been click is less than starPosition, fill it
                }else{
                    starContainer.children[i].classList.remove('filled') //otherwise make it empty 
                    starContainer.children[i].classList.add('empty')
                }
            }
    
        

            question.Rating= starPosition; //update starPostion 
            localStorage.setItem('storedQuestions',JSON.stringify(Questions));
        }

    };



    return starContainer;
};



const ratingEl = document.getElementById('ratings');

Questions.forEach(question => {
    ratingEl.appendChild(makeStarRating(question))
});
