/**
 * Advanced Department Header Core Interactivity Script
 * Manages state persistence, responsive accordions, dark theme switching, font scaling, and live modals.
 */
function loadDepartmentHeader() {
    // 1. Mobile Menu Toggle & Accordions
    const mobileToggle = document.getElementById('deptxMobileToggle');
    const menu = document.getElementById('deptxMenu');

    if (mobileToggle && menu) {
        mobileToggle.addEventListener('click', () => {
            menu.classList.toggle('deptx-active');
            mobileToggle.classList.toggle('deptx-open');
        });
    }

    const navItems = document.querySelectorAll('.deptx-item');
    navItems.forEach(item => {
        const link = item.querySelector('.deptx-link');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024 && (item.querySelector('.deptx-submenu') || item.querySelector('.deptx-mega'))) {
                    e.preventDefault();
                    item.classList.toggle('deptx-open');
                }
            });
        }
    });

    // 2. Search Overlay Handlers
    const searchOpen = document.getElementById('deptxSearchOpen');
    const searchClose = document.getElementById('deptxSearchClose');
    const searchOverlay = document.getElementById('deptxSearchOverlay');
    const searchInput = document.getElementById('deptxSearchInput');

    if (searchOpen && searchOverlay) {
        searchOpen.addEventListener('click', () => {
            searchOverlay.classList.add('deptx-active');
            searchOverlay.setAttribute('aria-hidden', 'false');
            if (searchInput) searchInput.focus();
        });
    }

    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('deptx-active');
            searchOverlay.setAttribute('aria-hidden', 'true');
        });
    }

    // 3. Persistent Dark Mode Engine
    const darkToggle = document.getElementById('deptx-dark-toggle');
    const darkIcon = document.getElementById('deptx-dark-icon');
    
    const savedTheme = localStorage.getItem('deptx_theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (darkIcon) darkIcon.className = 'fas fa-sun';
    }

    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('deptx_theme', 'light');
                if (darkIcon) darkIcon.className = 'fas fa-moon';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('deptx_theme', 'dark');
                if (darkIcon) darkIcon.className = 'fas fa-sun';
            }
        });
    }

    // 4. Accessible Font Size Multiplier Engine
    let fontSizeLevel = parseInt(localStorage.getItem('deptx_font_level') || '0');
    if (fontSizeLevel > 0) {
        document.body.style.fontSize = (100 + fontSizeLevel * 10) + '%';
    }

    const fontIncrease = document.getElementById('deptx-font-increase');
    const fontReset = document.getElementById('deptx-font-reset');

    if (fontIncrease) {
        fontIncrease.addEventListener('click', () => {
            if (fontSizeLevel < 2) {
                fontSizeLevel++;
                document.body.style.fontSize = (100 + fontSizeLevel * 10) + '%';
                localStorage.setItem('deptx_font_level', fontSizeLevel);
            }
        });
    }

    if (fontReset) {
        fontReset.addEventListener('click', () => {
            fontSizeLevel = 0;
            document.body.style.fontSize = '100%';
            localStorage.setItem('deptx_font_level', fontSizeLevel);
        });
    }

    // 5. Intelligent Active Page Routing Highlighting
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    const allLinks = document.querySelectorAll('.deptx-menu a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('deptx-active');
        }
    });

    // 6. Global Keyboard Shortcut Bindings (Escape / Click Outside)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchOverlay) searchOverlay.classList.remove('deptx-active');
            if (menu) menu.classList.remove('deptx-active');
        }
    });

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('deptx-active');
                searchOverlay.setAttribute('aria-hidden', 'true');
            }
        });
    }
}