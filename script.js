/**
 * Department of Computer Science - Core Engine
 * Vanilla JavaScript (No Framework Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initNoticeSearch();
    initCounterAnimation();
    initLanguageToggle();
    initLightbox();
    initBackToTop();
});

/* ==========================================================================
   1. HERO BANNER SLIDER
   ========================================================================== */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.hero-slider .dot');
    const prevBtn = document.querySelector('.hero-slider .prev-btn');
    const nextBtn = document.querySelector('.hero-slider .next-btn');
    const sliderContainer = document.getElementById('hero-slider');

    if (!slides.length) return;

    let currentSlide = 0;
    let slideInterval = null;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => { nextSlide(); });
    prevBtn.addEventListener('click', () => { prevSlide(); });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => showSlide(idx));
    });

    // Pause auto slide on hover
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
}

/* ==========================================================================
   2. NOTICE SEARCH FILTER
   ========================================================================== */
function initNoticeSearch() {
    const searchInput = document.getElementById('notice-search-input');
    const noticeCards = document.querySelectorAll('.notice-card');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        noticeCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const textContent = card.textContent.toLowerCase();

            if (title.includes(query) || textContent.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

/* ==========================================================================
   3. ANIMATED STATISTICS COUNTER
   ========================================================================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // ms
                    const stepTime = 30;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.ceil(current);
                        }
                    }, stepTime);
                });
                animated = true;
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.getElementById('stats');
    if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   4. LANGUAGE TOGGLE SYSTEM (ENG / MARATHI) WITH LOCALSTORAGE
   ========================================================================== */
const messages = {
    en: {
        hod: "Welcome to the Department of Computer Science. Our department strives to nurture innovation, creativity, research excellence and ethical values. We prepare students with technical knowledge, practical skills, leadership qualities and lifelong learning abilities to meet global industry demands.",
        principal: "Higher education demands a synthesis of scientific discovery and social responsibility. Our Computer Science department remains at the forefront of global technical advancements while staying grounded in foundational research and student mentorship."
    },
    mr: {
        hod: "संगणकशास्त्र विभागात आपले मनःपूर्वक स्वागत आहे. आमचा विभाग विद्यार्थ्यांच्या सर्वांगीण विकासासाठी अत्याधुनिक शिक्षण, संशोधन, नवोपक्रम आणि नैतिक मूल्यांवर आधारित वातावरण उपलब्ध करून देतो. विद्यार्थ्यांना उद्योग क्षेत्रासाठी सक्षम, आत्मविश्वासपूर्ण आणि तांत्रिकदृष्ट्या कुशल बनविणे हे आमचे प्रमुख उद्दिष्ट आहे.",
        principal: "उच्च शिक्षण हे वैज्ञानिक शोध आणि सामाजिक जबाबदारीचा मिलाफ असावे. आमचा संगणक शास्त्र विभाग जागतिक तंत्रज्ञानाच्या आघाडीवर राहून मूलभूत संशोधन आणि विद्यार्थी मार्गदर्शनासाठी कटिबद्ध आहे."
    }
};

function initLanguageToggle() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const hodContainer = document.getElementById('hod-message');
    const principalContainer = document.getElementById('principal-message');

    // Retrieve language preference or default to 'en'
    let currentLang = localStorage.getItem('dept_lang_pref') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('dept_lang_pref', lang);

        // Update Toggle Buttons
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Messages Smoothly
        if (hodContainer && principalContainer) {
            hodContainer.style.opacity = '0';
            principalContainer.style.opacity = '0';

            setTimeout(() => {
                hodContainer.textContent = messages[lang].hod;
                principalContainer.textContent = messages[lang].principal;
                hodContainer.style.opacity = '1';
                principalContainer.style.opacity = '1';
            }, 200);
        }
    }

    // Attach Listeners
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Initial Load
    setLanguage(currentLang);
}

/* ==========================================================================
   5. PHOTO GALLERY LIGHTBOX
   ========================================================================== */
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (!lightbox) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullSrc = item.getAttribute('data-src');
            lightboxImg.setAttribute('src', fullSrc);
            lightbox.style.display = 'flex';
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightbox.setAttribute('aria-hidden', 'true');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightbox.setAttribute('aria-hidden', 'true');
        }
    });
}

/* ==========================================================================
   6. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}