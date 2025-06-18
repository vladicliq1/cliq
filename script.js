// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuButton && mainNav) {
  mobileMenuButton.addEventListener('click', () => {
    mainNav.classList.toggle('show-mobile');
    if (mainNav.classList.contains('show-mobile')) {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.position = 'absolute';
      mainNav.style.top = '4rem';
      mainNav.style.left = '0';
      mainNav.style.width = '100%';
      mainNav.style.padding = '1rem';
      mainNav.style.backgroundColor = 'var(--color-black)';
      mainNav.style.borderBottom = '1px solid var(--color-zinc-800)';
    } else {
      mainNav.style.display = '';
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (mainNav && mainNav.classList.contains('show-mobile')) {
        mainNav.classList.remove('show-mobile');
        mainNav.style.display = '';
      }
    }
  });
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .testimonial-card, .section-header, .about-text, .contact-text');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.service-card, .testimonial-card, .section-header, .about-text, .contact-text');
  
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger initial animation
  setTimeout(animateOnScroll, 100);
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
});