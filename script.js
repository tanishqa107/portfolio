const greetings = ["hi", "नमस्ते", "bonjour","안녕하세요","hola","你好", "ciao","こんにちは", "Olá", "ٱلسَّلَامُ عَلَيْكُمْ", "lets dive into a better place?"];
const greetingElement = document.getElementById("greeting");
let index = 0;

function displayGreetings() {
  if (index < greetings.length) {
    greetingElement.textContent = greetings[index];
    index++;
    setTimeout(displayGreetings, 300); // Change greetings every second
  } else {
    // After displaying all greetings, navigate to another page
    window.location.href = "index.html"; // Replace with your actual page URL
  }
}

// Start the greetings display
displayGreetings();


document.addEventListener("wheel", function(e) {
  const sections = document.querySelectorAll("section");
  let currentIndex = Math.round(window.scrollY / window.innerHeight);

  if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      // Scroll down
      currentIndex++;
  } else if (e.deltaY < 0 && currentIndex > 0) {
      // Scroll up
      currentIndex--;
  }

  sections[currentIndex].scrollIntoView({ behavior: "smooth" });
});

function scrollToNextSection() {
  const currentSection = document.querySelector('.home-section');
  const nextSection = currentSection.nextElementSibling;

  if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}


window.addEventListener('scroll', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (window.scrollY > 0) {
      scrollIndicator.style.opacity = '0'; // Hide after scrolling
  } else {
      scrollIndicator.style.opacity = '1'; // Show on the home section
  }
});