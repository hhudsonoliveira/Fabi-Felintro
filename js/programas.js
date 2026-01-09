/**
 * PROGRAMAS.JS - Fabi Felintro Trainer
 * Lógica de filtros e toggle de programas de treinamento
 */

// ===================================
// STATE MANAGEMENT
// ===================================

const programsState = {
    currentObjetivo: 'emagrecimento',
    currentNivel: 'todos'
};

// ===================================
// INICIALIZAÇÃO
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initProgramFilters();
    initObjetivoToggle();
});

// ===================================
// OBJETIVO TOGGLE (Emagrecimento / Hipertrofia)
// ===================================

function initObjetivoToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const objetivo = this.getAttribute('data-objetivo');

            // Update active state
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update state
            programsState.currentObjetivo = objetivo;

            // Filter programs
            filterPrograms();

            // Add animation effect
            animateProgramsTransition();
        });
    });
}

// ===================================
// NÍVEL FILTER (Iniciante / Intermediário / Avançado)
// ===================================

function initProgramFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nivel = this.getAttribute('data-nivel');

            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update state
            programsState.currentNivel = nivel;

            // Filter programs
            filterPrograms();

            // Add animation effect
            animateProgramsTransition();
        });
    });
}

// ===================================
// FILTER PROGRAMS LOGIC
// ===================================

function filterPrograms() {
    const allCards = document.querySelectorAll('.program-card');
    const { currentObjetivo, currentNivel } = programsState;

    allCards.forEach(card => {
        const cardObjetivo = card.getAttribute('data-objetivo');
        const cardNivel = card.getAttribute('data-nivel');

        let shouldShow = false;

        // Check objetivo match
        const objetivoMatch = cardObjetivo === currentObjetivo;

        // Check nivel match
        let nivelMatch = false;
        if (currentNivel === 'todos') {
            nivelMatch = true;
        } else {
            nivelMatch = cardNivel === currentNivel;
        }

        shouldShow = objetivoMatch && nivelMatch;

        // Show/hide card with animation
        if (shouldShow) {
            card.classList.remove('hidden');
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.classList.add('hidden');
            }, 300);
        }
    });

    // Update programs count (optional)
    updateProgramsCount();
}

// ===================================
// ANIMATE TRANSITION
// ===================================

function animateProgramsTransition() {
    const programsGrid = document.querySelector('.programs-grid');

    if (!programsGrid) return;

    // Add fade effect
    programsGrid.style.opacity = '0.7';

    setTimeout(() => {
        programsGrid.style.opacity = '1';
    }, 150);
}

// ===================================
// UPDATE PROGRAMS COUNT (Optional)
// ===================================

function updateProgramsCount() {
    const visibleCards = document.querySelectorAll('.program-card:not(.hidden)');
    const countElement = document.querySelector('.programs-count');

    if (countElement) {
        const count = visibleCards.length;
        countElement.textContent = `${count} ${count === 1 ? 'programa' : 'programas'} disponível${count === 1 ? '' : 'is'}`;
    }
}

// ===================================
// PROGRAM CARD INTERACTIONS
// ===================================

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.program-card .btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');

            // Get button position
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Position ripple
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            // Add to button
            this.appendChild(ripple);

            // Remove after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// ===================================
// CARD HOVER EFFECTS
// ===================================

function initCardHoverEffects() {
    const cards = document.querySelectorAll('.program-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect to badge
            const badge = this.querySelector('.card-badge');
            if (badge) {
                badge.style.animation = 'badgePulse 0.5s ease-in-out';
            }
        });

        card.addEventListener('mouseleave', function() {
            const badge = this.querySelector('.card-badge');
            if (badge) {
                badge.style.animation = 'badgePulse 2s ease-in-out infinite';
            }
        });
    });
}

// Initialize card effects
document.addEventListener('DOMContentLoaded', initCardHoverEffects);

// ===================================
// URGENCY COUNTER ANIMATION
// ===================================

function initUrgencyCounters() {
    const urgencyElements = document.querySelectorAll('.card-urgency');

    urgencyElements.forEach(element => {
        // Animate the number every few seconds
        setInterval(() => {
            element.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                element.style.animation = '';
            }, 500);
        }, 5000);
    });
}

// Initialize urgency animations
document.addEventListener('DOMContentLoaded', initUrgencyCounters);

// ===================================
// PRICE HIGHLIGHT EFFECT
// ===================================

function initPriceHighlight() {
    const prices = document.querySelectorAll('.price-current');

    prices.forEach(price => {
        // Add shimmer effect on hover
        price.parentElement.addEventListener('mouseenter', function() {
            price.style.animation = 'shimmer 2s linear infinite';
        });

        price.parentElement.addEventListener('mouseleave', function() {
            price.style.animation = '';
        });
    });
}

// Initialize price effects
document.addEventListener('DOMContentLoaded', initPriceHighlight);

// ===================================
// MODAL FOR PROGRAM DETAILS (Optional)
// ===================================

function initProgramModal() {
    const cards = document.querySelectorAll('.program-card');

    cards.forEach(card => {
        // Add info button if needed
        const infoBtn = card.querySelector('.btn-info');

        if (infoBtn) {
            infoBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const programTitle = card.querySelector('.card-title').textContent;
                showProgramModal(programTitle, card);
            });
        }
    });
}

function showProgramModal(title, cardElement) {
    // Create modal
    const modal = document.createElement('div');
    modal.classList.add('program-modal');
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>${title}</h2>
            <div class="modal-body">
                <!-- Program details here -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', () => modal.remove());
    overlay.addEventListener('click', () => modal.remove());

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    modal.addEventListener('remove', () => {
        document.body.style.overflow = '';
    });
}

// ===================================
// COMPARISON MODE (Optional)
// ===================================

const comparisonState = {
    selectedCards: [],
    maxComparison: 3
};

function initComparisonMode() {
    const cards = document.querySelectorAll('.program-card');

    cards.forEach(card => {
        const compareBtn = document.createElement('button');
        compareBtn.classList.add('btn-compare');
        compareBtn.textContent = 'Comparar';
        compareBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleComparison(card);
        });

        // Optionally add compare button to each card
        // card.querySelector('.card-header').appendChild(compareBtn);
    });
}

function toggleComparison(card) {
    const { selectedCards, maxComparison } = comparisonState;

    if (selectedCards.includes(card)) {
        // Remove from comparison
        const index = selectedCards.indexOf(card);
        selectedCards.splice(index, 1);
        card.classList.remove('comparing');
    } else {
        // Add to comparison
        if (selectedCards.length < maxComparison) {
            selectedCards.push(card);
            card.classList.add('comparing');
        } else {
            alert(`Você pode comparar no máximo ${maxComparison} programas.`);
        }
    }

    updateComparisonPanel();
}

function updateComparisonPanel() {
    // Update comparison UI
    const panel = document.querySelector('.comparison-panel');

    if (comparisonState.selectedCards.length > 0) {
        if (panel) {
            panel.classList.add('visible');
        }
    } else {
        if (panel) {
            panel.classList.remove('visible');
        }
    }
}

// ===================================
// ANALYTICS TRACKING (Optional)
// ===================================

function trackProgramClick(programName, nivel) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'program_click', {
            'event_category': 'Programs',
            'event_label': `${programName} - ${nivel}`,
            'value': 1
        });
    }

    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent', {
            content_name: programName,
            content_category: nivel
        });
    }

    console.log(`Tracked: ${programName} - ${nivel}`);
}

// Add tracking to CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.program-card .btn-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.program-card');
            const programName = card.querySelector('.card-title').textContent;
            const nivel = card.querySelector('.card-level').textContent;

            trackProgramClick(programName, nivel);
        });
    });
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================

function initKeyboardNavigation() {
    const cards = document.querySelectorAll('.program-card:not(.hidden)');

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const focusedElement = document.activeElement;
            const currentCard = focusedElement.closest('.program-card');

            if (currentCard) {
                const currentIndex = Array.from(cards).indexOf(currentCard);

                if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
                    cards[currentIndex + 1].querySelector('.btn-primary').focus();
                } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                    cards[currentIndex - 1].querySelector('.btn-primary').focus();
                }
            }
        }
    });
}

// Initialize keyboard navigation
document.addEventListener('DOMContentLoaded', initKeyboardNavigation);

// ===================================
// EXPORT FUNCTIONS (if using modules)
// ===================================

// Uncomment if using ES6 modules
/*
export {
    initProgramFilters,
    initObjetivoToggle,
    filterPrograms,
    programsState
};
*/
