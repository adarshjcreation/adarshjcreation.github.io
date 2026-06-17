/* Theme toggle, mobile nav, and scroll-reveal animations */
(function () {
    // ---- Theme (persisted, respects system preference) ----
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));

    document.addEventListener('click', function (e) {
        const toggle = e.target.closest('.theme-toggle');
        if (toggle) {
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        }
        const burger = e.target.closest('.nav-burger');
        if (burger) {
            document.querySelector('.nav-links')?.classList.toggle('open');
        } else if (e.target.closest('.nav-links a')) {
            document.querySelector('.nav-links')?.classList.remove('open');
        }
    });

    // ---- Scroll reveal ----
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry, i) {
                if (entry.isIntersecting) {
                    entry.target.style.transitionDelay = (entry.target.dataset.delay || 0) + 'ms';
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(function (el) { io.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('in'); });
    }
})();
