const themeToggleBtn = document.querySelector('.theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

function toggleTheme() {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
}

(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
})();

themeToggleBtn.addEventListener('click', toggleTheme);

function toggleCategoria(element) {
  const conteudo = element.nextElementSibling;
  const seta = element.querySelector(".seta");
  const aberto = conteudo.style.display === "block";

  conteudo.style.display = aberto ? "none" : "block";
  seta.textContent = aberto ? "▼" : "▲";
}

const wrapper = document.querySelector('.projects-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const projectWidth = 330; 
let currentIndex = 0;
const maxIndex = document.querySelectorAll('.project-card').length - 1;

function updateCarousel() {
  const offset = -currentIndex * projectWidth;
  wrapper.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});





