import './style.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.querySelector('#app').innerHTML = `
  <header>
    <button class="menu-btn" id="menuToggle">Menu</button>
  </header>

  <nav class="nav-overlay" id="navOverlay">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#work">Selected Works</a></li>
      <li><a href="#skills">Capabilities</a></li>
      <li><a href="#about">About Studio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <main>
    <section class="hero" id="home">
      <!-- Interactive SVG Placeholder -->
      <svg class="hero-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <circle cx="100" cy="100" r="80" fill="none" class="svg-circle" />
         <path d="M 40 100 Q 100 0 160 100 Q 100 200 40 100" fill="none" class="svg-path" />
         <circle cx="100" cy="100" r="20" fill="var(--text-main)" class="svg-dot" />
      </svg>
      <div class="hero-content">
        <h1 class="reveal-up hero-title">Great Design.<br>No Nonsense.</h1>
      </div>
    </section>

    <section id="work" class="theme-transition" data-theme="dark">
      <div class="content-wrapper">
        <h2 class="reveal-up">Selected Works</h2>
        <p class="reveal-up delay-1">A collection of meticulous projects focusing on aesthetics and usability. Every detail is carefully considered to craft high-end experiences.</p>
        
        <div class="project-grid">
          <a href="#" class="project-card reveal-up delay-2">
            <div class="project-img-wrapper">
              <div class="project-overlay"></div>
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" alt="Project 1" class="project-img">
            </div>
            <div class="project-info">
              <h3 class="project-title">Oceana</h3>
              <span class="learn-more">Learn More &rarr;</span>
            </div>
          </a>
          
          <a href="#" class="project-card reveal-up delay-3">
            <div class="project-img-wrapper">
              <div class="project-overlay"></div>
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" alt="Project 2" class="project-img">
            </div>
            <div class="project-info">
              <h3 class="project-title">Voltaire</h3>
              <span class="learn-more">Learn More &rarr;</span>
            </div>
          </a>

          <a href="#" class="project-card reveal-up delay-2">
            <div class="project-img-wrapper">
              <div class="project-overlay"></div>
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" alt="Project 3" class="project-img">
            </div>
            <div class="project-info">
              <h3 class="project-title">Monolith</h3>
              <span class="learn-more">Learn More &rarr;</span>
            </div>
          </a>

          <a href="#" class="project-card reveal-up delay-3">
            <div class="project-img-wrapper">
              <div class="project-overlay"></div>
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop" alt="Project 4" class="project-img">
            </div>
            <div class="project-info">
              <h3 class="project-title">Aura</h3>
              <span class="learn-more">Learn More &rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Train -->
    <section id="skills" class="skills-section theme-transition" data-theme="light">
      <div class="skills-track">
        <div class="skill-item">React / MERN</div>
        <div class="skill-item">GSAP & Framer</div>
        <div class="skill-item">AI / ML Integration</div>
        <div class="skill-item">Three.js & WebGL</div>
        <div class="skill-item">Creative Coding</div>
      </div>
    </section>

    <section id="about" class="theme-transition" data-theme="dark">
      <div class="content-wrapper">
        <h2 class="reveal-up">About</h2>
        <p class="reveal-up delay-1">Minimalism is not about taking things away. It's about bringing the right things into focus. We remove the noise so the message can speak.</p>
      </div>
    </section>
  </main>
`

// Initialize Lenis
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Reveal observer
const revealElements = document.querySelectorAll('.reveal-up');
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// Navigation interactions
const menuToggle = document.getElementById('menuToggle');
const navOverlay = document.getElementById('navOverlay');

menuToggle.addEventListener('click', () => {
  const isOpen = navOverlay.classList.contains('active');
  
  if (isOpen) {
    navOverlay.classList.remove('active');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.remove('nav-open');
    lenis.start(); // restore scroll
  } else {
    navOverlay.classList.add('active');
    menuToggle.textContent = 'Close';
    menuToggle.classList.add('nav-open');
    lenis.stop(); // freeze scroll when menu is open
  }
});

// Close nav when clicking a link
document.querySelectorAll('.nav-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    navOverlay.classList.remove('active');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.remove('nav-open');
    lenis.start();
  });
});

// --- Phase 3 Animations ---

// 1. Interactive SVG Illustration Parallax
const heroSvg = document.querySelector('.hero-svg');
const heroContent = document.querySelector('.hero-content');

if (heroSvg) {
  // Move SVG based on mouse position
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40; // max 20px movement
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    
    gsap.to(heroSvg, {
      x: x,
      y: y,
      duration: 1,
      ease: 'power2.out'
    });
  });

  // Reveal more opacity when hovering text
  heroContent.addEventListener('mouseenter', () => {
    gsap.to(heroSvg, { opacity: 0.6, scale: 1.05, duration: 0.5, ease: 'power2.out' });
  });
  
  heroContent.addEventListener('mouseleave', () => {
    gsap.to(heroSvg, { opacity: 0.2, scale: 1, duration: 0.5, ease: 'power2.out' });
  });
}

// 2. Horizontal Skills Train
const skillsTrack = document.querySelector('.skills-track');
if (skillsTrack) {
  // Ensure the track moves enough to show all items
  // Using a small delay to let font rendering settle before calculating scrollWidth ideally,
  // but using a set movement based on track size works well.
  requestAnimationFrame(() => {
    gsap.to(skillsTrack, {
      x: () => -(skillsTrack.scrollWidth - window.innerWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
      }
    });
  });
}

// 3. Background Transitions
// We change CSS variables directly on the root. The CSS handles properties seamlessly.
const themeSections = document.querySelectorAll('.theme-transition');

themeSections.forEach(section => {
  const theme = section.getAttribute('data-theme');
  
  ScrollTrigger.create({
    trigger: section,
    start: "top 50%", // Change theme when section crosses middle of viewport
    end: "bottom 50%",
    onEnter: () => setTheme(theme),
    onEnterBack: () => setTheme(theme),
  });
});

// Explicit reset for the very top (hero section)
ScrollTrigger.create({
  trigger: ".hero",
  start: "top bottom",
  end: "bottom 50%",
  onEnter: () => setTheme('light'),
  onEnterBack: () => setTheme('light')
});

function setTheme(theme) {
  if (theme === 'dark') {
    gsap.to(document.documentElement, {
      '--bg-color': '#111111',
      '--text-main': '#fcfcfc',
      '--overlay-bg': '#fcfcfc',
      '--overlay-text': '#111111',
      duration: 0.8,
      ease: 'power2.out'
    });
  } else {
    gsap.to(document.documentElement, {
      '--bg-color': '#fcfcfc',
      '--text-main': '#111111',
      '--overlay-bg': '#000000',
      '--overlay-text': '#ffffff',
      duration: 0.8,
      ease: 'power2.out'
    });
  }
}
