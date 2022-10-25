const greetings = ['Hello', 'Hi there', 'Wassup', 'Hey', 'Greetings', 'With grace, you are welcomed']
const pleasantries = ["How ya doin'", "You feeling ok", "Are you a little stressed"]
const results = ['fine', 'crap', 'good-ish', 'well', 'very well', 'so bad that your face literally explodes',  'just ok']
const signOffs = ["I'll always love you", "you've been a massive disappointment", "I think you're pretty dumb", "you won't be sleeping at home without an A", "you'll do great"]

const nameField = document.getElementById('name')
const form = document.querySelector('form')
const displayPane = document.getElementById('result')
console.log(displayPane)

const sleep = ms => new Promise(r => setTimeout(r, ms));

const getRandomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateMessage = (name) => {
    const greeting = getRandomFrom(greetings);
    const nickname = `${name}ana, banana fana fo ${name.toLowerCase()[0]}ana`;
    const pleasantry = getRandomFrom(pleasantries);
    const result = getRandomFrom(results);
    const signOff = getRandomFrom(signOffs)

    displayPane.innerHTML = ''
    return [`${greeting}, ${name}!`, `${pleasantry}, ${nickname}?`, `Don't worry! You're gonna do ${result}!`, `Alright, don't let me keep you too much longer, just know ${signOff}.`, `Sincerely,`, `The Computer`]
}

const displayMessage = () => {
    const messageLines = generateMessage(nameField.value)
    form.innerHTML = "";
    displayPane.innerHTML += `<h3 id="result-header">Your beautifully crafted message</h3>`
    for (let line of messageLines) {
        displayPane.innerHTML += `<p class="output-line">${line}</p>`
    }
}

form.onsubmit = displayMessage
