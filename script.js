const phrases = [
  "Electrical and Computer Engineering Major",
  "IEEE President @ Temple University",
  "Machine Learning Enthusiast",
  "Dark souls 3 Lover",
  "Fencer 🤺"

];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const current = phrases[phraseIndex];

  if (isDeleting) {
    el.textContent = current.substring(0, charIndex--);
  } else {
    el.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1800);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 40 : 70);
}

// Wait for the pop-in animation (1.2s + 0.3s delay = 1.5s) before typing starts
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1500);
});