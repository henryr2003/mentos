window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('top');
    } else {
        navbar.classList.add('top');
        navbar.classList.remove('scrolled');
    }
});
