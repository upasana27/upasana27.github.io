/* Upasana Biswas - Academic Profile */

document.addEventListener('DOMContentLoaded', () => {

    // Active nav highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function updateNav() {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 100) {
                current = s.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', updateNav, { passive: true });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth' });
                document.querySelector('.nav-menu').classList.remove('active');
            }
        });
    });

    // Fade-in on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Mobile menu
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');
    if (toggle) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        document.addEventListener('click', e => {
            if (menu.classList.contains('active') &&
                !menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove('active');
                toggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    }
});
