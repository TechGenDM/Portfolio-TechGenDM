import './style.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <div class="logo">Portfolio</div>
    <button class="menu-btn" id="menuToggle"><span class="btn-text">Menu</span></button>
  </header>

  <nav class="nav-overlay" id="navOverlay">
    <ul>
      <li><div class="nav-link-wrapper"><a href="#about" data-num="01">About Me</a></div></li>
      <li><div class="nav-link-wrapper"><a href="#work" data-num="02">My Projects</a></div></li>
      <li><div class="nav-link-wrapper"><a href="#education" data-num="03">Education Background</a></div></li>
      <li><div class="nav-link-wrapper"><a href="#skills" data-num="04">Skills</a></div></li>
      <li><div class="nav-link-wrapper"><a href="#contact" data-num="05">Contact</a></div></li>
    </ul>
  </nav>

  <div class="cursor-case-study">View<br>Case Study</div>

  <main>
    <section class="hero" id="home">
      <!-- Interactive SVG Placeholder -->
      <svg class="hero-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <circle cx="100" cy="100" r="80" fill="none" class="svg-circle" />
         <path d="M 40 100 Q 100 0 160 100 Q 100 200 40 100" fill="none" class="svg-path" />
         <circle cx="100" cy="100" r="20" fill="var(--text-main)" class="svg-dot" />
      </svg>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="line-mask"><span class="line-text">Devasish</span></span>
          <span class="line-mask"><span class="line-text">Mishra.</span></span>
        </h1>
        <div class="line-mask">
          <h2 class="line-text hero-subtitle">Full Stack Web Developer | ML & Data Science Explorer</h2>
        </div>
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

    <!-- Skills Section: Marquee + Grid -->
    <section id="skills" class="skills-section theme-transition" data-theme="light">
      
      <!-- Velocity Marquee -->
      <div class="skills-track">
        <div class="skill-item">DATA SCIENCE</div>
        <div class="skill-item">—</div>
        <div class="skill-item">LARGE LANGUAGE MODELS</div>
        <div class="skill-item">—</div>
        <div class="skill-item">RAG</div>
        <div class="skill-item">—</div>
        <div class="skill-item">FULL STACK</div>
        <div class="skill-item">—</div>
        <!-- Duplicated for infinite scroll illusion -->
        <div class="skill-item">DATA SCIENCE</div>
        <div class="skill-item">—</div>
        <div class="skill-item">LARGE LANGUAGE MODELS</div>
        <div class="skill-item">—</div>
        <div class="skill-item">RAG</div>
        <div class="skill-item">—</div>
        <div class="skill-item">FULL STACK</div>
        <div class="skill-item">—</div>
      </div>

      <!-- Categorized Skills Grid -->
      <div class="content-wrapper">
        <div class="categorized-skills">
          <div class="skill-category reveal-up delay-1">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </div>
          
          <div class="skill-category reveal-up delay-2">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Flask</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>

          <div class="skill-category reveal-up delay-3">
            <h3>AI & ML</h3>
            <ul>
              <li>Model Development</li>
              <li>Evaluation</li>
              <li>Applied ML Systems</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Experience -->
    <section id="education" class="theme-transition" data-theme="light">
      <div class="content-wrapper">
        <h2 class="reveal-up">Experience & Education</h2>
        <div class="timeline mt-2">
          <div class="timeline-item reveal-right delay-1">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>Scaler School of Technology</h3>
              <h4>Computer Science & Artificial Intelligence</h4>
              <p class="timeline-date">July 2025 - July 2029</p>
            </div>
          </div>
          <div class="timeline-item reveal-right delay-2">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>BITS Pilani</h3>
              <h4>Bachelor's in Computer Science</h4>
              <p class="timeline-date">July 2025 - July 2028</p>
            </div>
          </div>
          <div class="timeline-item reveal-right delay-3">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>GDG Member (Google Developer Group)</h3>
              <h4>Member</h4>
              <p class="timeline-date">January 2025 - Present</p>
            </div>
          </div>
          <div class="timeline-item reveal-right delay-4">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>Telelink Communication</h3>
              <h4>Sales And Marketing Associate</h4>
              <p class="timeline-date">January 2016 - July 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Honors & Awards -->
    <section id="awards" class="theme-transition" data-theme="dark">
      <div class="content-wrapper">
        <h2 class="reveal-up">Honors & Awards</h2>
        <div class="awards-list">
          <div class="award-row reveal-up delay-1">
            <h3>Airtel Young Achievements Award</h3>
          </div>
          <div class="award-row reveal-up delay-2">
            <h3>MATHS Excellence Award 2015</h3>
          </div>
          <div class="award-row reveal-up delay-3">
            <h3>10th Topper</h3>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="theme-transition" data-theme="dark">
      <div class="content-wrapper">
        <div class="about-grid">
          <div class="about-text">
            <h2 class="reveal-up">About Me</h2>
            <p class="reveal-up delay-1">I am a Full Stack Web Developer with a strong interest in Machine Learning, Large Language Models (LLMs), and Data Science. Beyond technical development, I bring strong leadership and execution skills developed through serving as Head Boy & President of Departments for multiple years and over 9 years of Sales & Marketing experience. I thrive in high-pressure and responsibility-driven environments.</p>
          </div>
          <div class="about-image-wrapper reveal-up delay-2">
            <img class="about-image portrait-bw" src="https://images.unsplash.com/photo-1544168190-79c15427015f?q=80&w=1000&auto=format&fit=crop" alt="Portrait Placeholder">
          </div>
        </div>
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
const revealElements = document.querySelectorAll('.reveal-up, .reveal-right');
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
const btnText = menuToggle.querySelector('.btn-text');

menuToggle.addEventListener('click', () => {
  const isOpen = navOverlay.classList.contains('active');
  
  if (isOpen) {
    navOverlay.classList.remove('active');
    btnText.textContent = 'Menu';
    menuToggle.classList.remove('nav-open');
    lenis.start(); // restore scroll
  } else {
    navOverlay.classList.add('active');
    btnText.textContent = 'Close';
    menuToggle.classList.add('nav-open');
    lenis.stop(); // freeze scroll when menu is open
  }
});

// Close nav when clicking a link
document.querySelectorAll('.nav-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    navOverlay.classList.remove('active');
    btnText.textContent = 'Menu';
    menuToggle.classList.remove('nav-open');
    lenis.start();
  });
});

// --- Phase 3 Animations ---

// --- Phase 4 Typography & Hero Reveal ---
// Initial Load Animation
window.addEventListener('load', () => {
  gsap.to('.line-text', {
    y: 0,
    duration: 1.2,
    ease: 'power4.out',
    stagger: 0.15,
    delay: 0.2
  });
});

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

// 2. Horizontal Skills Marquee tied to scroll velocity
const skillsTrack = document.querySelector('.skills-track');
if (skillsTrack) {
  let scrollSpeed = 0;
  let lastScrollTop = 0;
  
  // Create a continuous movement tween
  const trackTween = gsap.to(skillsTrack, {
    xPercent: -50,
    repeat: -1,
    duration: 15,
    ease: "none"
  });

  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      // self.velocity is built into ScrollTrigger
      // Adjust the timeScale of our continuous tween based on scroll velocity
      let velocity = Math.abs(self.getVelocity() / 300);
      gsap.to(trackTween, {
        timeScale: 1 + velocity,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true
      });
      // Return to normal speed 1 after scroll stops
      gsap.to(trackTween, {
        timeScale: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  });
}

// 3. Custom Cursor for Projects
const customCursor = document.querySelector('.cursor-case-study');
const projectCards = document.querySelectorAll('.project-card');

// Move cursor
window.addEventListener('mousemove', (e) => {
  if (customCursor.classList.contains('active')) {
    // We update left/top values for exact positioning
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  }
});

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    customCursor.classList.add('active');
  });
  card.addEventListener('mouseleave', () => {
    customCursor.classList.remove('active');
  });
});

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

// 4. Magnetic Menu Links
const navLinks = document.querySelectorAll('.nav-overlay a');
navLinks.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    // Check if the overlay has the active class. If so, apply magnetic effect
    if(navOverlay.classList.contains('active')) {
      const position = link.getBoundingClientRect();
      const x = e.pageX - position.left - position.width / 2;
      const y = e.pageY - position.top - position.height / 2;
      
      // We apply x/y directly avoiding the CSS transition to make it snappier
      link.style.transition = 'none';
      link.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    }
  });

  link.addEventListener('mouseleave', () => {
    // Reset back to normal with the CSS transition
    link.style.transition = 'transform 0.3s ease-out';
    link.style.transform = 'translate(0px, 0px)';
  });
});
