const phrases = [
    "Web Developer_",
    "Front-End Developer_",
    "Creative Coder_",
    "Student of DAW 2º_"
];

let i = 0;
let j = 0;
let deleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    let current = phrases[i];

    if (!deleting) {
        typingElement.textContent = current.slice(0, j) + "_";
        j++;
        if (j > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent = current.slice(0, j) + "_";
        j--;
        if (j === 0) {
            deleting = false;
            i = (i + 1) % phrases.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 70);
}

typeEffect();
