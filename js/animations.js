/**
 * ANIMATIONS.JS - Fabi Felintro Trainer
 * Intersection Observer e animações de scroll
 */

// ===================================
// INICIALIZAÇÃO
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initScrollRevealAnimations();
    initStaggerAnimations();
    initParallaxEffect();
    initHeroAnimations();
});

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================

function initScrollRevealAnimations() {
    // Check if browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        // Fallback: show all elements immediately
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('active');
        });
        return;
    }

    // Create observer for reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Optional: unobserve after revealing
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with 'reveal' class
    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });

    // Observe elements with other reveal classes
    document.querySelectorAll('.reveal-left, .reveal-right, .reveal-scale').forEach(element => {
        revealObserver.observe(element);
    });
}

// ===================================
// STAGGER ANIMATIONS
// ===================================

function initStaggerAnimations() {
    // Check if browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        return;
    }

    // Create observer for stagger animations
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.program-card, .testimonial-card, .diferencial-card, .servico-card, .step-card');

                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100); // 100ms delay between each item
                });

                staggerObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe grid containers
    document.querySelectorAll('.programs-grid, .testimonials-grid, .diferenciais-grid, .servicos-grid, .steps-timeline').forEach(container => {
        staggerObserver.observe(container);
    });
}

// ===================================
// PARALLAX EFFECT
// ===================================

function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero-background');

    if (parallaxElements.length === 0) return;

    // Check if device supports parallax (not on mobile for performance)
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = 0.5; // Parallax speed
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===================================
// HERO ANIMATIONS
// ===================================

function initHeroAnimations() {
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');

    if (!heroContent) return;

    // Add loaded class after a short delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// ===================================
// ANIMATED NUMBERS/STATS
// ===================================

function animateNumber(element, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);

        element.textContent = value.toLocaleString('pt-BR');

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================

function initScrollProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;

        const progressBarInner = document.querySelector('.scroll-progress-bar');
        if (progressBarInner) {
            progressBarInner.style.width = scrolled + '%';
        }
    });
}

// Uncomment to enable scroll progress
// initScrollProgress();

// ===================================
// MOUSE CURSOR EFFECT (Optional)
// ===================================

function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursorFollower);

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Smooth follower animation
    function animateFollower() {
        const speed = 0.15;

        followerX += (mouseX - followerX) * speed;
        followerY += (mouseY - followerY) * speed;

        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateFollower);
    }

    animateFollower();

    // Add hover effects
    document.querySelectorAll('a, button, .program-card').forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });

        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
}

// Uncomment to enable custom cursor (desktop only)
// if (window.innerWidth > 1024) {
//     initCustomCursor();
// }

// ===================================
// TEXT ANIMATION - Typewriter Effect
// ===================================

function typewriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ===================================
// IMAGE FADE IN ON LOAD
// ===================================

function initImageFadeIn() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in';

        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });

        // If image is already cached/loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
}

// Initialize image fade in
document.addEventListener('DOMContentLoaded', initImageFadeIn);

// ===================================
// SECTION TRANSITIONS
// ===================================

function initSectionTransitions() {
    const sections = document.querySelectorAll('section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.classList.add('section-enter');
        sectionObserver.observe(section);
    });
}

// Initialize section transitions
document.addEventListener('DOMContentLoaded', initSectionTransitions);

// ===================================
// FLOATING ANIMATION
// ===================================

function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.float-animation');

    floatingElements.forEach((element, index) => {
        // Offset animation start for each element
        element.style.animationDelay = `${index * 0.2}s`;
    });
}

// Initialize floating animations
document.addEventListener('DOMContentLoaded', initFloatingElements);

// ===================================
// SCROLL TRIGGER FOR SPECIFIC ANIMATIONS
// ===================================

function initScrollTriggers() {
    const triggers = [
        {
            selector: '.sobre-image',
            animation: 'slideInLeft'
        },
        {
            selector: '.sobre-content',
            animation: 'slideInRight'
        },
        {
            selector: '.stats-grid',
            animation: 'fadeInUp'
        }
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const trigger = triggers.find(t => entry.target.matches(t.selector));
                if (trigger) {
                    entry.target.style.animation = `${trigger.animation} 0.8s ease-out forwards`;
                }
            }
        });
    }, {
        threshold: 0.2
    });

    triggers.forEach(trigger => {
        document.querySelectorAll(trigger.selector).forEach(element => {
            observer.observe(element);
        });
    });
}

// Initialize scroll triggers
document.addEventListener('DOMContentLoaded', initScrollTriggers);

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Use requestAnimationFrame for smooth animations
function optimizedScroll(callback) {
    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                callback();
                ticking = false;
            });

            ticking = true;
        }
    });
}

// ===================================
// PREFERS REDUCED MOTION
// ===================================

function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Disable animations
        document.body.classList.add('reduced-motion');

        // Remove animation classes
        document.querySelectorAll('.reveal, .fade-in-up, .fade-in-down').forEach(element => {
            element.style.animation = 'none';
            element.style.transition = 'none';
            element.classList.add('active');
        });
    }
}

// Check on load
document.addEventListener('DOMContentLoaded', checkReducedMotion);

// ===================================
// LOADING ANIMATION
// ===================================

function initPageLoader() {
    // Create loader
    const loader = document.createElement('div');
    loader.classList.add('page-loader');
    loader.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loader);

    // Hide loader when page is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }, 500);
    });
}

// Uncomment to enable page loader
// initPageLoader();

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (window.pageYOffset / windowHeight) * 100;
}

// Smooth scroll to element
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// ===================================
// EXPORT FUNCTIONS (if using modules)
// ===================================

// Uncomment if using ES6 modules
/*
export {
    initScrollRevealAnimations,
    initStaggerAnimations,
    initParallaxEffect,
    animateNumber,
    smoothScrollTo,
    isElementInViewport
};
*/
