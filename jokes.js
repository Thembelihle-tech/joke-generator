let buttonElement = document.querySelector("#joke");
let jokeText = document.querySelector("#joke-text");

let jokes = [
  {
    question: "Why do French people eat snails?",
    answer: "Because they don't like fast food 🐌😂",
  },
  {
    question: "Why don't programmers like nature?",
    answer: "Too many bugs 🐛😂",
  },
  {
    question: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field 🌾😂",
  },
  {
    question: "Why did the math book look sad?",
    answer: "Because it had too many problems 📘😂",
  },
];

buttonElement.addEventListener("click", showJoke);

function showJoke() {
  jokeText.innerHTML = ""; //To clear previous joke

  //Pick a random joke
  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomJoke = jokes[randomIndex];

  let typewriter = new Typewriter(jokeText, {
    loop: false,
    delay: 50,
  });

  typewriter
    .typeString(randomJoke.question)
    .pauseFor(1000)
    .typeString("<br><br>")
    .typeString(randomJoke.answer)
    .start();
}
