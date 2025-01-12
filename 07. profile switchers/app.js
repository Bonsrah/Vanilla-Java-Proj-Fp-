//create an array of objects
//1
const Profiles = [
    {
        Author:{
            name:"Inigo Montoya",
            image:"inigomontoya.jpeg"
        },
        About:"Inigo Montoya is a fictional character in William Goldman's 1973 novel The Princess Bride. In Rob Reiner's 1987 film adaptation, he was portrayed by Mandy Patinkin. In both the book and the movie, he was originally from Spain and resided in the fictional country of Florin.",
        Date:"8th January 2025"
    },
    {
        Author:{
            name:"Zorro",
            image:"antonio-banderas-zorro.avif"
        },
        About:"Zorro, fictional character created in 1919 by writer Johnston McCulley. The masked, sword-wielding vigilante defends the poor and victimized against the forces of injustice, and his feats have been featured in virtually every form of media.",
        Date:"8th January 2025"
    },
    {
        Author:{
            name:"Obi-Wan Kenobi",
            image:"obi-wan.jpeg"
        },
        About:"Obi-Wan Kenobi was a legendary Force-sensitive human male Jedi Master who served on the Jedi High Council during the final years of the Republic Era. As a High Jedi General, Kenobi served in the Grand Army of the Republic that fought against the Separatist Droid Army during the Clone Wars, and was nicknamed the Negotiator. Kenobi, however, was forced into exile as a result of the Great Jedi Purge initiated by the Republic's own clone troopers when Republic Supreme Chancellor, secretly Darth Sidious, implemented Order 66. As a mentor, Kenobi was responsible for training two members of the Skywalker family, Anakin and Luke Skywalker, both of whom served in turn as his Padawan in the ways of the Force.",
        Date:"8th January 2025"
    },
    {
        Author:{
            name:"Kuwabatake Sanjuro",
            image:"robert-rockwell.jpg"
        },
        About:"Profession… samurai. But after the collapse of the Tokugawa Dynasty, he is unemployed and in search of work. Given that he is an expert swordsman, he has come to the small town to seek work as a bodyguard. His plan is to play both gangs off each other and get paid by both sides. He justifies his plan by saying, I'll get paid for killing, and this town is full of people who deserve to die",
        Date:"8th January 2025"
    }

];

//set a global variable that's gonna be increasing 
let currentProfile = 0;

//function that inreases variable by 1 and passes a function as long as it's below 
//5
const nextProfile = ()=>{
    if (currentProfile < Profiles.length-1){
        upDate();
        currentProfile +=1;
        
    }
        else{
            currentProfile = 0
        }

};
// function that reduces the variable by 1
//6
const prevProfile = ()=>{
    if (currentProfile > 0){
        upDate();
        currentProfile -=1;
    }
        else{
            currentProfile = Profiles.length-1
        }
};

//when an argument is already passed, there's no need to make it open bracket

//2
const containerEl = document.getElementById("Profile-cont");

//3
const ProfileDisplay = content =>{
    return`<div class ="profile-card">
    <img src ="${content.Author.image}">
    <h2>${content.Author.name}</h2>
    <p>${content.About}</p>
    <date> Update on ${content.Date}</date> 
    </div>`
 };

 // function that passes the previous function of the global variable 

 //4
 const upDate = () =>{
    let markup = ProfileDisplay(Profiles[currentProfile]);
    if(Profiles.length>1){
        markup += `<nav>
        <button onclick="prevProfile()">Prev</button>
        <button onclick="nextProfile()">Next</button>
        </nav>`
    }
    containerEl.innerHTML = markup;
 };

 console.log(currentProfile);
 upDate();