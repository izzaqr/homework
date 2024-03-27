const burgerIcon = document.querySelector('.burger-icon')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body')


function openMenu() {
    body.classList.add('body--opened-menu')
}

function closeMenu() {
    body.classList.remove('body--opened-menu')
}

burgerIcon.addEventListener('click', function() {
    if (body.classList.contains('body--opened-menu')) {
        closeMenu()
    } else {
        openMenu()
    }
});

navLinks.forEach(function(navLinks) {
    navLinks.addEventListener('click', closeMenu)
})