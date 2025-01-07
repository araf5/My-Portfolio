// Toggle Navbar for Mobile View
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log('Navbar toggled for mobile view.');
});

// Close Navbar on Link Click (Mobile View)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        console.log('Navbar closed after link click.');
    });
});

// Theme Toggle with Icon
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.classList.toggle('light');

    // Toggle Icon Change
    const toggleIcon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
        console.log('Switched to Light Theme');
    } else {
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
        console.log('Switched to Dark Theme');
    }
});


// Smooth Scrolling for Anchor Links
document.querySelectorAll('.scroll-down, .nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                console.log(`Smooth scrolling to ${target.id}`);
            }
        }
    });
});

// Smooth Reveal Animation for Sections
const sections = document.querySelectorAll('#about-section, #personal-details, #academic-section, #cv-section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
        }
    });
});

// Dynamic Typing Effect for Tagline
const tagline = document.querySelector('.tagline');
const words = ["Front-end Developer", "Web Enthusiast", "Creative Thinker"];
let wordIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < words[wordIndex].length) {
        tagline.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (letterIndex > 0) {
        tagline.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

type();

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '5px';
progressBar.style.width = '0';
progressBar.style.backgroundColor = '#e94560';
progressBar.style.zIndex = '1000';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const progressWidth = (scrollY / documentHeight) * 100;
    progressBar.style.width = `${progressWidth}%`;
    console.log(`Scroll progress: ${Math.round(progressWidth)}%`);
});


// Responsive Navbar Link Color Update
window.addEventListener('resize', () => {
    if (document.body.classList.contains('light-theme')) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => (link.style.color = '#000000'));
    }
    console.log('Window resized, navbar links updated.');
});

// Navbar Toggler Design Enhancements
burger.addEventListener('mouseover', () => {
    burger.style.transform = 'scale(1.2)';
    burger.style.filter = 'drop-shadow(0 0 10px #ff616d)';
    console.log('Navbar toggler hovered.');
});

burger.addEventListener('mouseout', () => {
    burger.style.transform = 'scale(1)';
    burger.style.filter = 'drop-shadow(0 0 5px #e94560)';
    console.log('Navbar toggler hover removed.');
});

// Animated Logo
const logo = document.querySelector('.logo-link');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s ease';
    console.log('Logo hovered.');
});

logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)';
    console.log('Logo hover removed.');
});

logo.addEventListener('click', () => {
    console.log('Logo clicked!');
    logo.style.animation = 'bounce 0.5s ease-out';
    setTimeout(() => {
        logo.style.animation = ''; // Reset animation
    }, 500);
});
