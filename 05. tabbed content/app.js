const navEl = document.querySelector('nav')
const navbarlinks = navEl.querySelectorAll('a')
const sectionEL = document.querySelectorAll("section")


const removeActiveLinks = ()=>{
    navbarlinks.forEach(link => link.parentElement.classList.remove('active')); //removes active styling for all links
};

const hideSections = () =>{
    sectionEL.forEach(section => section.classList.add('hidden')); //adds hidden styling to all sections
};

navbarlinks.forEach(link=> {
    link.addEventListener('click',()=>{
        removeActiveLinks();
        hideSections();
        link.parentElement.classList.add('active'); //adds active styling for particulary link
        const currentSecEl = document.querySelector(link.hash); 
        currentSecEl.classList.remove("hidden") // removes hidden styling for current  links section that has been clicked
});
})