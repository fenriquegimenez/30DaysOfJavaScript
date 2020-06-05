let challenge = "30 days of javascript";

console.log(challenge);

console.log(challenge.length);

challenge.toUpperCase();

challenge.toLowerCase();

challenge.substr();

challenge.slice(2);

challenge.includes("Script");

challenge.split();

console.log(challenge.split(" "));

console.log(
  'The quote "There is no exercese better for the heart than reahing down and lifting people up." by John Holmes teaches us to "help" one another'
);

console.log(typeof 10 === 10);

console.log(parseFloat("9.8") == 10);

let python = () => {
  if ("python and jargon".includes("on")) {
    return "Incluye!";
  }
};
console.log(python());

let jargonString = "I hope this course is not full of jargon";
let incluye = "incluye!";

if (jargonString.includes("jargon")) {
  console.log(incluye);
}

const randomNumber100 = Math.floor(Math.random() * 100);
console.log(randomNumber100);

function randomNumber50(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
console.log(randomNumber50(50, 100));

let randomNumber255 = Math.floor(Math.random() * 255);
console.log(randomNumber255);

let javascript = "javascript";
