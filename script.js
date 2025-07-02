const roles = ["Electrical Engineer", "Master's Student"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const element = document.getElementById("role");

function typeEffect() {
  const fullText = roles[index];
  
  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  element.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
