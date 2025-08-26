// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Dark/Light Mode
const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

if(localStorage.getItem('mode')) {
  body.className = localStorage.getItem('mode');
  toggleBtn.textContent = body.classList.contains('dark') ? '🌙 Dark Mode' : '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  if(body.classList.contains('dark')) {
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('mode', 'dark');
  } else {
    toggleBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('mode', 'light');
  }
});

// Particles JS
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particlesArray;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
    if(this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
  }
  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for(let i = 0; i < 80; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

initParticles();
animateParticles();
