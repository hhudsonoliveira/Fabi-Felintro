/**
 * MAIN.JS - Fabi Felintro Trainer
 * Funcionalidades principais com interações suaves
 */

// ===================================
// INICIALIZAÇÃO
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initProgramasToggle();
    initNivelFilter();
    initScrollReveal();
});

// ===================================
// NAVBAR - Scroll Effect
// ===================================

function initNavbar() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===================================
// MOBILE MENU
// ===================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// PROGRAMAS - Toggle Emagrecimento/Hipertrofia
// ===================================

function initProgramasToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const programaCards = document.querySelectorAll('.programa-card');

    if (toggleButtons.length === 0) return;

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));

            // Add active to clicked button
            this.classList.add('active');

            // Get selected objective
            const objetivo = this.getAttribute('data-objetivo');

            // Reset nivel filter
            const nivelButtons = document.querySelectorAll('.nivel-btn');
            nivelButtons.forEach(btn => btn.classList.remove('active'));
            nivelButtons[0].classList.add('active'); // Activate "Todos os Níveis"

            // Show/hide cards
            programaCards.forEach(card => {
                const cardObjetivo = card.getAttribute('data-objetivo');

                if (cardObjetivo === objetivo) {
                    card.classList.remove('hidden');
                    // Smooth fade in
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===================================
// NIVEL FILTER
// ===================================

function initNivelFilter() {
    const nivelButtons = document.querySelectorAll('.nivel-btn');
    const programaCards = document.querySelectorAll('.programa-card');

    if (nivelButtons.length === 0) return;

    nivelButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active from all buttons
            nivelButtons.forEach(btn => btn.classList.remove('active'));

            // Add active to clicked button
            this.classList.add('active');

            // Get selected nivel
            const nivel = this.getAttribute('data-nivel');

            // Get current active objective
            const activeToggle = document.querySelector('.toggle-btn.active');
            const currentObjetivo = activeToggle ? activeToggle.getAttribute('data-objetivo') : 'emagrecimento';

            // Show/hide cards based on nivel and objective
            programaCards.forEach(card => {
                const cardNivel = card.getAttribute('data-nivel');
                const cardObjetivo = card.getAttribute('data-objetivo');

                // Check if card matches current objective
                const matchesObjetivo = cardObjetivo === currentObjetivo;

                // Check if card matches selected nivel or "all"
                const matchesNivel = nivel === 'all' || cardNivel === nivel;

                if (matchesObjetivo && matchesNivel) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section');

    if (!revealElements.length) return;

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('reveal', 'active');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait = 20) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================
// ERROR HANDLING
// ===================================

window.addEventListener('error', function(event) {
    console.error('An error occurred:', event.error);
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c✨ Site Fabi Felintro Trainer', 'color: #0066FF; font-size: 20px; font-weight: bold;');
console.log('%cDesign minimalista e profissional', 'color: #666; font-size: 14px;');
