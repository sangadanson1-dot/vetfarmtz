// Mobile menu
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('active');
  this.innerHTML = this.innerHTML === '×' ? '&#9776;' : '×';
});

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  alert(`Asante, ${name}! 🙏\nNimespokea ujumbe wako. Nitakujibu hivi karibuni kwa simu au email.`);
  this.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      // Close mobile menu
      document.querySelector('.nav').classList.remove('active');
      document.getElementById('hamburger').innerHTML = '&#9776;';
    }
  });
});
