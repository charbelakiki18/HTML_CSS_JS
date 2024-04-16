let button = document.querySelector("button");
let quote = document.querySelector(".quote");
let person = document.querySelector(".author");

button.addEventListener("click", function () {
  rand_quote();
});

const quotes = [
  { quote: "hi", person: "bye" },
  { quote: "yo", person: "go" },
  { quote: "sup", person: "fk" },
];

function rand_quote() {
  let i = Math.random();
  i = Math.floor(i * 10) % 3;
  let q = quotes[i];
  quote.innerText = q.quote;
  person.innerText = q.person;
}
