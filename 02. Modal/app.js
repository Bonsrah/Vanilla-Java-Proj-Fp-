const OPMbtn = document.getElementById('openModal');
const modEl = document.querySelector('.modal');
const inmodEL = modEl.querySelector('.modal_content');

OPMbtn.addEventListener('click',()=>{
    modEl.classList.add('open');
});

inmodEL.addEventListener('click',()=>{
    modEl.classList.remove('open');
});