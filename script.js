// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');

    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        document.body.style.overflow = '';
    });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.skill-category, .project-card, .timeline-item, .education-card, .certification-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== Typing Effect for Hero Title (Optional Enhancement) =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.about-point, .stat');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    });
}

// Initial styling for reveal elements
document.querySelectorAll('.about-point').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

document.querySelectorAll('.stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statValue = entry.target.querySelector('h4');
            const targetValue = statValue.textContent;
            const numericValue = parseInt(targetValue.replace(/\D/g, ''));
            const suffix = targetValue.replace(/[0-9]/g, '');

            statValue.dataset.suffix = suffix;
            statValue.textContent = '0' + suffix;

            animateCounter(statValue, numericValue);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ===== Enhanced Particle Background Effect =====
function createParticle() {
    const particle = document.createElement('div');
    const colors = [
        'rgba(0, 255, 136, 0.6)',
        'rgba(0, 217, 255, 0.6)',
        'rgba(139, 92, 246, 0.6)',
        'rgba(255, 0, 110, 0.6)'
    ];

    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        pointer-events: none;
        border-radius: 50%;
        z-index: 1;
        box-shadow: 0 0 10px currentColor;
    `;

    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';

    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 100 + 50;
    const xMovement = Math.cos(angle) * velocity;
    const yMovement = Math.sin(angle) * velocity;

    const animation = particle.animate([
        {
            transform: 'translate(0, 0) scale(1)',
            opacity: 1
        },
        {
            transform: `translate(${xMovement}px, ${yMovement}px) scale(0)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 2000 + 2000,
        easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
    });

    animation.onfinish = () => particle.remove();
}

// Create particles periodically
setInterval(createParticle, 200);

// ===== Data Stream Effect =====
function createDataStream() {
    const stream = document.createElement('div');
    const chars = '01';
    const text = Array(20).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');

    stream.style.cssText = `
        position: fixed;
        left: ${Math.random() * window.innerWidth}px;
        top: -50px;
        color: rgba(0, 255, 136, 0.3);
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        pointer-events: none;
        z-index: 0;
        writing-mode: vertical-rl;
        letter-spacing: 2px;
    `;

    stream.textContent = text;
    document.body.appendChild(stream);

    const animation = stream.animate([
        { transform: 'translateY(0)', opacity: 0.8 },
        { transform: `translateY(${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 4000,
        easing: 'linear'
    });

    animation.onfinish = () => stream.remove();
}

// Create data streams periodically
setInterval(createDataStream, 800);

// ===== Console Message =====
console.log('%cHey there! 👋', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'color: #94a3b8; font-size: 14px;');
console.log('%cLet\'s connect: mahidhartanniru66@gmail.com', 'color: #00d4ff; font-size: 14px;');

// ===== Preloader (Optional) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Cursor Follow Effect (Optional Enhancement) =====
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

function animateCursor() {
    const diffX = cursorX - followerX;
    const diffY = cursorY - followerY;

    followerX += diffX * 0.1;
    followerY += diffY * 0.1;

    requestAnimationFrame(animateCursor);
}

animateCursor();

// ===== Handle External Links =====
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Analytics or tracking can be added here
        console.log('External link clicked:', link.href);
    });
});

// ===== Form Validation (if contact form is added) =====
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Add your form submission logic here
        const formData = new FormData(contactForm);

        // Example: Send to backend or email service
        console.log('Form submitted:', Object.fromEntries(formData));

        // Show success message
        alert('Thank you for reaching out! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// ===== Resume Download Tracking =====
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Resume downloaded');
        // Add analytics tracking here
    });
});

// ===== Easter Egg: Konami Code =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        console.log('%c🎮 Konami Code Activated!', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});

// ===== Performance Monitoring =====
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            console.log('Performance entry:', entry.name, entry.duration);
        });
    });

    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
}

// ===== Service Worker Registration (for PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}

// ===== Chatbot Functionality =====
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbot = document.getElementById('chatbot');
const closeChatbot = document.getElementById('closeChatbot');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const quickActions = document.querySelectorAll('.quick-action');

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbot.classList.toggle('active');
    const badge = chatbotToggle.querySelector('.chatbot-badge');
    if (badge && chatbot.classList.contains('active')) {
        badge.style.display = 'none';
    }
});

// Close chatbot
closeChatbot.addEventListener('click', () => {
    chatbot.classList.remove('active');
});

// Send message
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user' : 'bot'}`;

    const time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${isUser ? 'user' : 'robot'}"></i>
        </div>
        <div class="message-content">
            <p>${text}</p>
            <span class="message-time">${time}</span>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle send message
sendMessage.addEventListener('click', sendUserMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
});

function sendUserMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response);
        }, 600);
    }
}

// Bot responses
function getBotResponse(message) {
    const msg = message.toLowerCase();

    if (msg.includes('resume') || msg.includes('cv')) {
        return "You can download Mahidhar's resume by clicking the 'Download Resume' button in the hero section or using the quick action below!";
    } else if (msg.includes('contact') || msg.includes('email') || msg.includes('reach')) {
        return "You can reach Mahidhar at damodhar.m@quadranttechnologies.com or call +1 (203) 832 9939. Check the contact section for more details!";
    } else if (msg.includes('skill') || msg.includes('tech') || msg.includes('experience')) {
        return "Mahidhar specializes in Azure Databricks, PySpark, Delta Lake, Azure Data Factory, and building scalable ETL pipelines. Check out the Skills section for the complete list!";
    } else if (msg.includes('project')) {
        return "Mahidhar has worked on several impressive projects including Wine Quality Prediction on AWS, ETL pipelines with dbt, and Real-Time Supply Chain Analytics. Scroll to the Projects section to learn more!";
    } else if (msg.includes('education') || msg.includes('degree')) {
        return "Mahidhar holds a Master of Science in Computer Science from New Jersey Institute of Technology (2023-2024) and a B.Tech in Information Technology from SRKR Engineering College.";
    } else if (msg.includes('certification') || msg.includes('certified')) {
        return "Mahidhar is Microsoft Fabric Data Engineer Associate (DP-700) and Databricks Data Engineer Professional certified!";
    } else if (msg.includes('linkedin')) {
        return "Connect with Mahidhar on LinkedIn: <a href='https://www.linkedin.com/in/mahidhar-tanniru-5a9091141' target='_blank' style='color: var(--primary-color)'>Mahidhar Tanniru</a>";
    } else if (msg.includes('github')) {
        return "Check out Mahidhar's code on GitHub: <a href='https://github.com/Mahidhar-Tanniru' target='_blank' style='color: var(--primary-color)'>github.com/Mahidhar-Tanniru</a>";
    } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hello! I'm here to help you learn more about Mahidhar's experience and skills. What would you like to know?";
    } else if (msg.includes('thanks') || msg.includes('thank you')) {
        return "You're welcome! Feel free to ask if you have any other questions about Mahidhar's portfolio.";
    } else {
        return "I can help you with information about Mahidhar's skills, experience, projects, education, or contact details. What would you like to know?";
    }
}

// Quick actions
quickActions.forEach(action => {
    action.addEventListener('click', () => {
        const actionType = action.dataset.action;

        if (actionType === 'resume') {
            addMessage("Can I get the resume?", true);
            setTimeout(() => {
                addMessage("Sure! Click here to download: <a href='assets/Mahidhar_Tanniru_Resume.pdf' download style='color: var(--primary-color); text-decoration: underline;'>Download Resume</a>");
            }, 600);
        } else if (actionType === 'contact') {
            addMessage("How can I contact Mahidhar?", true);
            setTimeout(() => {
                addMessage("📧 Email: damodhar.m@quadranttechnologies.com<br>📱 Phone: +1 (203) 832 9939<br>🔗 LinkedIn: <a href='https://www.linkedin.com/in/mahidhar-tanniru-5a9091141' target='_blank' style='color: var(--primary-color)'>Connect</a>");
            }, 600);
        } else if (actionType === 'skills') {
            addMessage("What are Mahidhar's core skills?", true);
            setTimeout(() => {
                addMessage("🚀 Core Skills:<br>• Azure Databricks & PySpark<br>• Delta Lake & Medallion Architecture<br>• Azure Data Factory<br>• Spark SQL & ETL Pipelines<br>• Power BI & Data Visualization<br><br>Scroll to the Skills section for the complete list!");
            }, 600);
        }
    });
});