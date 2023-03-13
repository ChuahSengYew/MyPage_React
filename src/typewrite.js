var textDisplay = "";
const phrases = [
  "Chuah Seng Yew",
  "a Software Developer",
  "a Ramen Enthusiast",
  "a Kpop Lover"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

export function loop() {
  isEnd = false;

  if ((textDisplay = document.getElementById("typewrite"))) {
    textDisplay.innerHTML = currentPhrase.join("");

    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        textDisplay.innerHTML = currentPhrase.join("");
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j]);
        j--;
        textDisplay.innerHTML = currentPhrase.join("");
      }

      if (j == phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }
  }

  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 3000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}
