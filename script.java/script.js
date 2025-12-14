document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("header nav");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }

  const slides = document.querySelectorAll(".review-slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Auto-advance every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);


  // Typing effect
  const title = document.getElementById("welcome-title");
  const text = "Hello, I’m BLACKSON — Your Next Web Developer!";
  let index = 0;
  function typeEffect() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();

  // Form alert
  const form = document.querySelector(".hours-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      alert("Thank you! Your preferred working hours will be sent to me directly.");
    });
  }

  // Chat toggle
  const fab = document.getElementById("chatFab");
  const panel = document.getElementById("chatPanel");
  const closeBtn = document.getElementById("closeBtn");
  if (fab && panel && closeBtn) {
    fab.addEventListener("click", () => panel.classList.add("open"));
    closeBtn.addEventListener("click", () => panel.classList.remove("open"));
  }


  db.collection("messages").orderBy("timestamp").onSnapshot((snapshot) => {
    chatBox.innerHTML = "";
    snapshot.forEach((doc) => {
      const msg = doc.data();
      const p = document.createElement("p");
      p.textContent = `${msg.user}: ${msg.text}`;
      chatBox.appendChild(p);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});
