const navEl = document.querySelector('nav');
const navbarlinks = navEl.querySelectorAll('a');

// const navpos = navEl.getBoundingClientRect().top;

window.addEventListener('scroll',()=>{
    const scrollpos = window.scrollY;
    navEl.style.top = scrollpos + 'px'; //top of the nav bar keeps on getting updated by the scroll of the window making it seem like it's staying in the same place

    navbarlinks.forEach(link => {
        const sectionElement = document.querySelector(link.hash);
        const offset = 50;
        if(scrollpos + offset > sectionElement.offsetTop && scrollpos + offset< sectionElement.offsetTop + sectionElement.offsetHeight){
            link.classList.add('active');
        }
        else{
            link.classList.remove('active');
        }
    });
}); 

// if the scroll position of the window is greater than the offset top of each link tag, add the active attribute


