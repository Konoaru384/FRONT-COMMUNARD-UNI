const observerOptions = {
    threshold: 0.1
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-left, .reveal-right').forEach((el) => {
    revealObserver.observe(el);
});

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-title');
        }
    });
}, observerOptions);

document.querySelectorAll('.title-anim').forEach((el) => {
    titleObserver.observe(el);
});

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const bg = document.querySelector('.hero-bg-image');
    bg.style.transform = `scale(${1 + scroll * 0.0005}) translateY(${scroll * 0.1}px)`;
});

if(window.innerWidth > 768) {
    const docLink = document.querySelector('.doc-link');
    docLink.addEventListener('mousemove', (e) => {
        const eye = document.querySelector('.eye');
        const rect = docLink.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        eye.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
    });
}