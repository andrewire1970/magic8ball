var options = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes – definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don’t count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
];

for (i = 0; i < options.length; i++) {
    console.log(options[i]);

}
var selector = document.querySelector('div');

var random = (Math.floor(Math.random() * 20))
console.log(random);
console.log(options[random]);

var addRandom = document.createElement('h3');
addRandom.textContent = options[random];
selector.appendChild(addRandom);

var button = document.getElementById('btn');
button.addEventListener('click', onClick);

function onClick() {

    var random = (Math.floor(Math.random() * 20))

    addRandom.textContent = options[random];
    selector.appendChild(addRandom);


};






