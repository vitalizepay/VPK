// ADMK VP Kandavel Website - Enhanced JavaScript
// Copyright 2024 - V. P. Kandavel

// Configuration
const CONFIG = {
  scrollOffset: 100,
  animationDelay: 100,
  mobileBreakpoint: 768,
  admkColors: {
    green: '#228B22',
    red: '#DC143C',
    gold: '#FFD700'
  }
};

// DOM Elements
const elements = {
  header: document.querySelector('.site-header'),
  navToggle: document.querySelector('.nav-toggle'),
  nav: document.querySelector('.nav'),
  backToTop: document.getElementById('backToTop'),
  animateElements: document.querySelectorAll('.animate-on-scroll'),
  navLinks: document.querySelectorAll('.nav a'),
  sections: document.querySelectorAll('section[id]'),
  yearElement: document.getElementById('year')
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeYear();
  initializeNavigation();
  initializeScrollEffects();
  initializeAnimations();
  initializeADMKEffects();
  initializeBackToTop();
  initializeLazyLoading();
  initializeContactForms();
  
  console.log('🌿 ADMK VP Kandavel Website Loaded Successfully 🌿');
  
  // Enhanced scroll animations
  initializeEnhancedAnimations();
});

// Enhanced animations with better performance
function initializeEnhancedAnimations() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      rootMargin: '-50px 0px -50px 0px',
      threshold: 0.1
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    animateElements.forEach(el => {
      scrollObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      animateElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top + scrollTop;
        if (elementTop < scrollTop + windowHeight - 100) {
          el.classList.add('visible');
        }
      });
    }
    
    window.addEventListener('scroll', throttle(handleScroll, 100));
    handleScroll();
  }
}

// Throttle function for performance
function throttle(func, delay) {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

// Set current year
function initializeYear() {
  if (elements.yearElement) {
    elements.yearElement.textContent = new Date().getFullYear();
  }
}

// Navigation functionality
function initializeNavigation() {
  // Mobile navigation toggle
  if (elements.navToggle && elements.nav) {
    elements.navToggle.addEventListener('click', toggleMobileNav);
    
    // Close mobile menu when clicking nav links
    elements.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!elements.nav.contains(e.target) && !elements.navToggle.contains(e.target)) {
        closeMobileNav();
      }
    });
  }
  
  // Smooth scrolling for anchor links
  initializeSmoothScroll();
  
  // Active nav highlighting
  initializeActiveNav();
}

function toggleMobileNav() {
  const isOpen = elements.nav.classList.toggle('open');
  elements.navToggle.setAttribute('aria-expanded', isOpen);
  elements.navToggle.textContent = isOpen ? '✕' : '☰';
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileNav() {
  elements.nav.classList.remove('open');
  elements.navToggle.setAttribute('aria-expanded', 'false');
  elements.navToggle.textContent = '☰';
  document.body.style.overflow = '';
}

// Smooth scrolling for anchor links
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = elements.header ? elements.header.offsetHeight : 0;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Active navigation highlighting
function initializeActiveNav() {
  window.addEventListener('scroll', throttle(updateActiveNav, 100));
}

function updateActiveNav() {
  let current = '';
  
  elements.sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  
  elements.navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
}

// Scroll effects
function initializeScrollEffects() {
  window.addEventListener('scroll', throttle(() => {
    updateHeaderOnScroll();
    updateBackToTop();
    animateOnScroll();
  }, 16));
}

function updateHeaderOnScroll() {
  if (!elements.header) return;
  
  if (window.scrollY > 50) {
    elements.header.classList.add('scrolled');
  } else {
    elements.header.classList.remove('scrolled');
  }
}

// Animations on scroll
function initializeAnimations() {
  // Initial animation check
  animateOnScroll();
  
  // Intersection Observer for better performance
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      rootMargin: '-50px'
    });
    
    elements.animateElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers
    window.addEventListener('scroll', throttle(animateOnScroll, 100));
  }
}

function animateOnScroll() {
  elements.animateElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animated');
    }
  });
}

// ADMK specific effects
function initializeADMKEffects() {
  // Create floating particles
  createFloatingParticles();
  
  // Add ADMK color transitions
  addADMKColorTransitions();
  
  // Initialize party-themed interactions
  initializePartyInteractions();
}

function createFloatingParticles() {
  const particleContainer = document.querySelector('.admk-leaves-bg');
  if (!particleContainer) return;
  
  // Add random particles that float
  setInterval(() => {
    if (document.querySelectorAll('.leaf').length < 8) {
      createFloatingParticle();
    }
  }, 5000);
}

function createFloatingParticle() {
  const particle = document.createElement('div');
  particle.className = 'leaf dynamic-leaf';
  particle.innerHTML = '<img src="assets/img/admk_symbol.jpg" alt="ADMK Symbol">';
  
  // Random position
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (15 + Math.random() * 10) + 's';
  particle.style.opacity = '0.05';
  
  document.querySelector('.admk-leaves-bg').appendChild(particle);
  
  // Remove after animation
  setTimeout(() => {
    particle.remove();
  }, 25000);
}

function addADMKColorTransitions() {
  // Add color transitions to buttons on hover
  const buttons = document.querySelectorAll('.btn-primary');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.background = `linear-gradient(135deg, ${CONFIG.admkColors.green} 0%, ${CONFIG.admkColors.gold} 100%)`;
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.background = '';
    });
  });
}

function initializePartyInteractions() {
  // Add special effects for ADMK elements
  const admkElements = document.querySelectorAll('[src*="admk_symbol"]');
  admkElements.forEach(element => {
    element.addEventListener('click', function() {
      // Create a burst effect
      createBurstEffect(this);
    });
  });
}

function createBurstEffect(element) {
  const burst = document.createElement('div');
  burst.className = 'admk-burst';
  burst.style.position = 'fixed';
  burst.style.pointerEvents = 'none';
  burst.style.zIndex = '9999';
  
  const rect = element.getBoundingClientRect();
  burst.style.left = rect.left + rect.width / 2 + 'px';
  burst.style.top = rect.top + rect.height / 2 + 'px';
  
  // Create particles
  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.background = CONFIG.admkColors.gold;
    particle.style.borderRadius = '50%';
    particle.style.animation = `burstParticle 0.6s ease-out forwards`;
    particle.style.animationDelay = i * 0.1 + 's';
    
    const angle = (i / 6) * Math.PI * 2;
    const distance = 50;
    particle.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
    particle.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
    
    burst.appendChild(particle);
  }
  
  document.body.appendChild(burst);
  
  setTimeout(() => {
    burst.remove();
  }, 1000);
}

// Add burst animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes burstParticle {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(var(--dx), var(--dy)) scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Back to top button
function initializeBackToTop() {
  if (!elements.backToTop) return;
  
  elements.backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function updateBackToTop() {
  if (!elements.backToTop) return;
  
  if (window.pageYOffset > 300) {
    elements.backToTop.classList.add('visible');
  } else {
    elements.backToTop.classList.remove('visible');
  }
}

// Lazy loading for images
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Contact forms (if present)
function initializeContactForms() {
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
  
  // Volunteer form
const volunteerForm = document.getElementById('volunteerForm');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', handleVolunteerSubmit);
  }
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  
  // Show success message
  showNotification('உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! நாங்கள் விரைவில் உங்களைத் தொடர்பு கொள்வோம்.', 'success');
  
  // Reset form
  this.reset();
  
  // You can add actual form submission logic here
  // For now, we'll just store in localStorage
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  data.timestamp = new Date().toISOString();
  
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  submissions.push(data);
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
}

function handleVolunteerSubmit(e) {
  e.preventDefault();
  
  showNotification('தன்னார்வலர் பதிவு வெற்றிகரமாக முடிந்தது! எங்கள் குழு உங்களைத் தொடர்பு கொள்ளும்.', 'success');
  
  // Reset form and close modal if exists
  this.reset();
  const modal = document.getElementById('volunteerModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  // Store volunteer data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  data.timestamp = new Date().toISOString();
  
  const volunteers = JSON.parse(localStorage.getItem('volunteers') || '[]');
  volunteers.push(data);
  localStorage.setItem('volunteers', JSON.stringify(volunteers));
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
  
  showNotification('நியூஸ்லெட்டருக்கு வெற்றிகரமாக பதிவு செய்யப்பட்டது!', 'success');
  this.reset();
}

// Utility functions
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? CONFIG.admkColors.green : CONFIG.admkColors.red};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    z-index: 10000;
    max-width: 300px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// FAQ functionality (if present)
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('faq-question')) {
    e.target.classList.toggle('active');
    const answer = e.target.nextElementSibling;
    if (answer) {
      answer.classList.toggle('show');
    }
  }
});

// Modal functionality (if present)
document.addEventListener('click', function(e) {
  // Open volunteer modal
  if (e.target.id === 'volunteerBtn') {
    const modal = document.getElementById('volunteerModal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }
  
  // Close modal
  if (e.target.classList.contains('close-modal') || e.target.classList.contains('modal')) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close mobile menu
    if (elements.nav && elements.nav.classList.contains('open')) {
      closeMobileNav();
    }
    
    // Close modals
    const openModals = document.querySelectorAll('.modal.open');
    openModals.forEach(modal => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

// Performance monitoring
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach(entry => {
      if (entry.entryType === 'navigation') {
        console.log(`🌿 Page Load Time: ${entry.loadEventEnd - entry.loadEventStart}ms`);
      }
    });
  });
  
  observer.observe({ entryTypes: ['navigation'] });
}

// Error handling
window.addEventListener('error', function(e) {
  console.error('🚫 Website Error:', e.error);
  
  // Optional: Send error to analytics
  // analytics.track('error', { message: e.message, filename: e.filename, line: e.lineno });
});

// Export for use in other scripts
window.VPKWebsite = {
  CONFIG,
  elements,
  showNotification,
  createBurstEffect,
  throttle
};