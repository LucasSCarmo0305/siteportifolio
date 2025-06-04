const themeToggleBtn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});



 function toggleCategoria(titulo) {
    const seta = titulo.querySelector('.seta');
    const conteudo = titulo.nextElementSibling;
    const barras = conteudo.querySelectorAll('.preenchido');

    const aberto = conteudo.style.display === 'block';

  
    conteudo.style.display = aberto ? 'none' : 'block';
    seta.classList.toggle('aberta', !aberto);

    
    barras.forEach(barra => {
      if (!aberto) {
        const percentual = barra.getAttribute('data-width');
        barra.style.width = percentual;
      } else {
        barra.style.width = '0';
      }
    });
  }
 

const wrapper = document.querySelector('.projects-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const cardWidth = 300;
const visibleCards = Math.floor(document.querySelector('.projects-container').offsetWidth / cardWidth);

let currentIndex = 0;
const maxIndex = document.querySelectorAll('.project-card').length - visibleCards;

function updateCarousel() {
 
  if(currentIndex < 0) currentIndex = 0;
  if(currentIndex > maxIndex) currentIndex = maxIndex;

  const translateX = -currentIndex * cardWidth;
  wrapper.style.transform = `translateX(${translateX}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

window.addEventListener('resize', () => {
  const newVisibleCards = Math.floor(document.querySelector('.projects-container').offsetWidth / cardWidth);
  if (visibleCards !== newVisibleCards) {
    
    maxIndex = document.querySelectorAll('.project-card').length - newVisibleCards;
 
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    updateCarousel();
  }
});

