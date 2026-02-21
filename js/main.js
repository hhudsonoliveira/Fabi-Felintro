/**
 * MAIN.JS - Fabi Felintro Trainer
 * Funcionalidades principais da landing page
 * Redesign 2026
 */

// ===================================
// INICIALIZAÇÃO
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initFaqAccordion();
    initCarrossel();
    initAnalytics();
    initWhatsappInteligente();
});

// ===================================
// PRELOADER / ANIMAÇÃO DE ENTRADA
// ===================================

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Espera a animação do preloader e depois faz fade out
    setTimeout(function() {
        preloader.classList.add('fade-out');
        // Remove do DOM após a transição
        preloader.addEventListener('transitionend', function() {
            preloader.remove();
        });
    }, 2200);
}

// ===================================
// NAVBAR - Scroll Effect
// ===================================

function initNavbar() {
    const navbar = document.getElementById('header');
    if (!navbar) return;

    const scrollThreshold = 50;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Executar no load e no scroll
    handleScroll();
    window.addEventListener('scroll', debounce(handleScroll, 10));
}

// ===================================
// MOBILE MENU
// ===================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (!menuToggle || !navMenu) return;

    // Toggle do menu
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        this.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevenir scroll do body quando menu aberto
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', debounce(function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 100));

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Ignorar links vazios ou apenas #
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length === 0) return;

    // Usar Intersection Observer se disponível
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Fallback para browsers antigos
        revealElements.forEach(el => {
            el.classList.add('active');
        });
    }
}

// ===================================
// FAQ ACCORDION
// ===================================

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question || !answer) return;

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                    }
                }
            });

            // Toggle do item atual
            item.classList.toggle('active');
            this.setAttribute('aria-expanded', !isExpanded);

            // Animar altura
            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });

        // Keyboard navigation
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ===================================
// CARROSSEL INFINITO (JavaScript)
// ===================================

function initCarrossel() {
    var track = document.querySelector('.carrossel-track');
    if (!track) return;

    var speed = 1; // pixels por frame
    var position = 0;
    var paused = false;
    var halfWidth = track.scrollWidth / 2;

    // Pause no hover (apenas desktop com mouse)
    if (window.matchMedia('(hover: hover)').matches) {
        track.addEventListener('mouseenter', function() { paused = true; });
        track.addEventListener('mouseleave', function() { paused = false; });
    }

    function animate() {
        if (!paused) {
            position -= speed;
            // Reset quando chega na metade (itens duplicados)
            if (Math.abs(position) >= halfWidth) {
                position = 0;
            }
            track.style.transform = 'translateX(' + position + 'px)';
        }
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

// ===================================
// ANALYTICS - Tracking de eventos
// ===================================

function initAnalytics() {
    // Track cliques em botões de compra/WhatsApp
    const ctaButtons = document.querySelectorAll('[href*="wa.me"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const section = this.closest('section')?.id || 'unknown';
            trackEvent('cta_click', {
                button_text: buttonText,
                section: section,
                destination: 'whatsapp'
            });
        });
    });

    // Track scroll para seções importantes
    const sectionsToTrack = ['planos', 'faq', 'resultados'];
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackEvent('section_view', {
                        section_id: entry.target.id
                    });
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        sectionsToTrack.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                sectionObserver.observe(section);
            }
        });
    }
}

/**
 * Função para enviar eventos de tracking
 * Compatível com Google Analytics 4 e Facebook Pixel
 */
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4
    if (typeof gtag === 'function') {
        gtag('event', eventName, eventData);
    }

    // Facebook Pixel
    if (typeof fbq === 'function') {
        fbq('trackCustom', eventName, eventData);
    }

    // Debug log (remover em produção se necessário)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('📊 Track Event:', eventName, eventData);
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Debounce - Limita a frequência de execução
 */
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle - Executa no máximo uma vez por período
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Verifica se elemento está na viewport
 */
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
// WHATSAPP FLUTUANTE INTELIGENTE
// ===================================

function initWhatsappInteligente() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (!whatsappFloat) return;

    const planos = [
        { id: 'plano-base',         texto: 'Olá! Vim pelo site e quero saber mais sobre o Plano Base' },
        { id: 'plano-evolucao',     texto: 'Olá! Vim pelo site e quero saber mais sobre o Plano Evolução' },
        { id: 'plano-transformacao',texto: 'Olá! Vim pelo site e quero saber mais sobre o Plano Transformação' },
        { id: 'plano-365',          texto: 'Olá! Vim pelo site e quero saber mais sobre o Projeto Evolução Física 365' }
    ];

    const textoPadrao = 'Olá! Vim pelo site e tenho uma dúvida sobre os planos';
    const numeroWA = '5511953532718';

    const secoes = planos
        .map(p => ({ ...p, el: document.getElementById(p.id) }))
        .filter(p => p.el);

    if (secoes.length === 0) return;

    function atualizarLink() {
        const meio = window.innerHeight / 2;
        let textoAtual = textoPadrao;

        for (const secao of secoes) {
            const rect = secao.el.getBoundingClientRect();
            if (rect.top <= meio && rect.bottom >= meio) {
                textoAtual = secao.texto;
                break;
            }
        }

        whatsappFloat.href = 'https://wa.me/' + numeroWA + '?text=' + encodeURIComponent(textoAtual);
    }

    atualizarLink();
    window.addEventListener('scroll', throttle(atualizarLink, 100));
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

console.log('%c✨ Site Fabi Felintro Trainer', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cDesign premium • Preto + Dourado', 'color: #888; font-size: 12px;');
console.log('%cDesenvolvido por HO DEVWEB', 'color: #666; font-size: 11px;');
