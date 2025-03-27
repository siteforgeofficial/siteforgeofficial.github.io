// Typing Effect
const texts = [
    "Portfolio Websites",
    "E-commerce Landing Pages",
    "Business Websites"
];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;

function typeText() {
    const currentText = texts[currentTextIndex];
    const typingElement = document.getElementById('typing-text');

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, typingSpeed * 2);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing effect
typeText();

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
    } else {
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
    });
}, observerOptions);

// Add fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
    observer.observe(section);
});

// Contact Form Handling
document.querySelector('#contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    // Validate form
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Create email content
    const subject = 'New Contact Form Message from ' + name;
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    // Create mailto link
    const mailtoLink = `mailto:prajapatijay17112007@gmail.com,uddan1711@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    showNotification('Opening your email client...', 'success');

    // Clear form
    document.querySelector('#contact-form').reset();
});

// Email validation helper
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Notification helper
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white z-50 transition-opacity duration-300`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Portfolio Lightbox
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center';
        
        // Create image
        const img = document.createElement('img');
        img.src = item.querySelector('img').src;
        img.className = 'max-w-4xl max-h-[90vh] object-contain';
        
        // Add close button
        const closeButton = document.createElement('button');
        closeButton.className = 'absolute top-4 right-4 text-white text-4xl hover:text-gray-300';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = () => lightbox.remove();
        
        // Add elements to lightbox
        lightbox.appendChild(img);
        lightbox.appendChild(closeButton);
        
        // Add lightbox to body
        document.body.appendChild(lightbox);
        
        // Close on click outside
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});

// Testimonials Carousel
const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechCorp",
        image: "https://i.pravatar.cc/150?img=1",
        text: "SiteForge transformed our online presence. Their attention to detail and commitment to quality is unmatched."
    },
    {
        name: "Jane Smith",
        role: "Founder, StartupX",
        image: "https://i.pravatar.cc/150?img=2",
        text: "The team at SiteForge delivered beyond our expectations. Our new website has significantly increased our conversion rate."
    },
    {
        name: "Mike Johnson",
        role: "Marketing Director, GrowthCo",
        image: "https://i.pravatar.cc/150?img=3",
        text: "Fast, responsive, and professional. SiteForge helped us create a stunning website that perfectly represents our brand."
    }
];

let currentTestimonial = 0;
const testimonialContainer = document.querySelector('.testimonial-content');
const testimonialDots = document.querySelector('.testimonial-dots');

// Create dots
testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `w-3 h-3 rounded-full mx-1 ${index === 0 ? 'bg-primary-600' : 'bg-gray-300'}`;
    dot.onclick = () => showTestimonial(index);
    testimonialDots.appendChild(dot);
});

function showTestimonial(index) {
    currentTestimonial = index;
    const testimonial = testimonials[index];
    
    testimonialContainer.innerHTML = `
        <div class="flex items-center mb-6">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full mr-4 object-cover border-2 border-primary-500">
            <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">${testimonial.name}</h3>
                <p class="text-gray-600 dark:text-gray-300">${testimonial.role}</p>
            </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">${testimonial.text}</p>
        <div class="flex text-yellow-400">★★★★★</div>
    `;

    // Update dots
    document.querySelectorAll('.testimonial-dots button').forEach((dot, i) => {
        dot.className = `w-3 h-3 rounded-full mx-1 ${i === index ? 'bg-primary-600' : 'bg-gray-300'}`;
    });
}

// Auto-rotate testimonials
setInterval(() => {
    showTestimonial((currentTestimonial + 1) % testimonials.length);
}, 5000);

// Portfolio Image Loading Animation
document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.remove('loading');
        this.classList.add('loaded');
    });
});

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.className = 'fixed top-0 left-0 h-1 bg-primary-600 z-50 transition-all duration-300';
progressBar.style.width = '0%';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// Cookie Consent Banner
function createCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        const banner = document.createElement('div');
        banner.className = 'fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 transform transition-transform duration-300';
        banner.innerHTML = `
            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <p class="mb-4 md:mb-0">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
                <div class="flex space-x-4">
                    <button class="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors" onclick="acceptCookies()">Accept</button>
                    <button class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors" onclick="declineCookies()">Decline</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.querySelector('.fixed.bottom-0').remove();
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.querySelector('.fixed.bottom-0').remove();
}

// Initialize cookie consent
createCookieConsent();

// Portfolio Project Details
const portfolioProjects = {
    'techcorp-website': {
        title: 'TechCorp Website',
        category: 'web',
        description: 'Modern design for a tech company',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        image: 'https://via.placeholder.com/600x400',
        details: 'A responsive corporate website featuring modern design elements, smooth animations, and optimized performance. The site includes a blog section, team profiles, and service descriptions.',
        link: '#'
    },
    'fashion-store': {
        title: 'Fashion Store',
        category: 'ecommerce',
        description: 'Online fashion boutique',
        technologies: ['Shopify', 'React', 'Node.js'],
        image: 'https://via.placeholder.com/600x400',
        details: 'A full-featured e-commerce platform built with Shopify, featuring a custom React frontend and Node.js backend. Includes advanced filtering, search, and checkout integration.',
        link: '#'
    },
    'saas-platform': {
        title: 'SaaS Platform',
        category: 'landing',
        description: 'Product landing page',
        technologies: ['Vue.js', 'Tailwind', 'Firebase'],
        image: 'https://via.placeholder.com/600x400',
        details: 'A modern SaaS landing page with interactive demos, pricing tables, and user testimonials. Built with Vue.js and styled with Tailwind CSS.',
        link: '#'
    },
    'business-website': {
        title: 'Business Website',
        category: 'web',
        description: 'Professional business site',
        technologies: ['WordPress', 'PHP', 'MySQL'],
        image: 'https://via.placeholder.com/600x400',
        details: 'A custom WordPress theme for a professional services company. Features include portfolio galleries, contact forms, and multilingual support.',
        link: '#'
    },
    'electronics-store': {
        title: 'Electronics Store',
        category: 'ecommerce',
        description: 'Online electronics shop',
        technologies: ['Magento', 'JavaScript', 'REST API'],
        image: 'https://via.placeholder.com/600x400',
        details: 'A Magento-based e-commerce store with custom features, including product comparison, wishlist, and advanced search functionality.',
        link: '#'
    },
    'mobile-app': {
        title: 'Mobile App',
        category: 'landing',
        description: 'App landing page',
        technologies: ['React', 'Next.js', 'TypeScript'],
        image: 'https://via.placeholder.com/600x400',
        details: 'A modern landing page for a mobile app, featuring app screenshots, feature highlights, and download buttons for various app stores.',
        link: '#'
    }
};

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-primary-600', 'text-white');
            btn.classList.add('bg-white', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        });

        // Add active class to clicked button
        button.classList.add('active', 'bg-primary-600', 'text-white');
        button.classList.remove('bg-white', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');

        const filterValue = button.getAttribute('data-filter');

        // Filter portfolio items with animation
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Project Details Modal
document.querySelectorAll('.view-project-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectItem = button.closest('.portfolio-item');
        const projectTitle = projectItem.querySelector('h3').textContent;
        const project = Object.values(portfolioProjects).find(p => p.title === projectTitle);

        if (project) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div class="relative">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-t-xl">
                        <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${project.title}</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">${project.details}</p>
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.technologies.map(tech => `
                                <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm">
                                    ${tech}
                                </span>
                            `).join('')}
                        </div>
                        <div class="flex justify-end">
                            <a href="${project.link}" class="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
                                View Live Site
                            </a>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            // Close modal
            modal.querySelector('button').addEventListener('click', () => {
                modal.remove();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }
    });
}); 