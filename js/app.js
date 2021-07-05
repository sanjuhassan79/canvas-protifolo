window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sanju', window.scrollY > 0)

})