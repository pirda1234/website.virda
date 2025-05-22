const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
