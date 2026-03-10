/* ============================================
   UPASANA BISWAS - ACADEMIC PROFILE JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Typewriter Effect ----
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const phrases = [
            'Researcher',
            'PhD Student',
            'Kathak Dancer',
            'Problem Solver',
            'Hiker'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 90;
        const deletingSpeed = 50;
        const pauseAfterType = 1800;
        const pauseAfterDelete = 400;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (!isDeleting) {
                typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(type, pauseAfterType);
                    return;
                }
                setTimeout(type, typingSpeed);
            } else {
                typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(type, pauseAfterDelete);
                    return;
                }
                setTimeout(type, deletingSpeed);
            }
        }
        setTimeout(type, 800);
    }


    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    const hero = document.getElementById('hero');

    function onScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });


    // ---- Active Nav Link Highlighting ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });


    // ---- Smooth Scroll for Anchors ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                document.querySelector('.nav-menu').classList.remove('active');
            }
        });
    });


    // ---- Scroll Indicator Click ----
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


    // ---- Fade-In on Scroll (Intersection Observer) ----
    const fadeEls = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(el => fadeObserver.observe(el));


    // ---- Mobile Menu Toggle ----
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

});
