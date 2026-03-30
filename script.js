
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




  /* ===== Project Cards ===== */
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {

    // CLICK
    card.addEventListener("click", (e) => {
      e.stopPropagation();

      cards.forEach(c => {
        if (c !== card) c.classList.remove("active");
      });

      card.classList.toggle("active");
    });

    // MAGNETIC EFFECT (only when closed)
  card.addEventListener("mousemove", (e) => {
  if (card.classList.contains("active")) return;

  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
  const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

  card.style.transform =
    `translate(${x * 10}px, ${y * 10}px) scale(1.05)`;
});

card.addEventListener("mouseleave", () => {
  if (!card.classList.contains("active")) {
    card.style.transform = "translate(0,0) scale(1)";
  }
});

  });

  // CLICK OUTSIDE → close all
  document.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
  });


