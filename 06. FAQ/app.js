//create an array of objects
const datainfo =[
    {
        title: 'Why is java script cool?',
        details: 'JavaScript is even more awesome since it enables you to do all those things listed above and more. This is thanks to the wide adaptation of the JavaScript language and its 3rd-party packages/libraries. This post will introduce some of the exciting and awesome JavaScript packages with simple code examples to demonstrate the wide range of things you can do by coding in JavaScript.'
    },
    {
        title: 'Why should you learn javascript ?',
        details: 'JavaScript developers are in high demand, and roles involving JavaScript often offer competitive salaries,many job openings require knowledge of JavaScript frameworks like React or Node.js.'
    },
    {
        title: 'Is javascript easy to learn?',
        details: 'Yes, JavaScript is easy to learn for beginners due to its simple syntax and the ability to run directly in web browsers without setup. However, mastering advanced concepts can take time'
    },
    {
        title: 'why is java script cool?',
        details: ' Start with JavaScript and add Python as a second language for broader opportunities,Easy to learn, great for web frameworks like Django and Flask, Popular for data analysis, AI, and machine learning'
    }
];

function makeHTML (data){
    return `<details>
    <summary>${data.title}</summary>
    <p>${data.details}</P>
    </details>`
};

const containerEl = document.getElementById('faq-container')

containerEl.innerHTML = datainfo.map(dataI=>makeHTML(dataI)).join('');

//pass a parameter in the map function using => 

//loop throught every item in the array and apply the makeHTML function on it