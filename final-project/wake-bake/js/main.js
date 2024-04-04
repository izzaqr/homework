(function () {

    // burger menu
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        // if (burgerIcon) {
        //     e.preventDefault()
        // }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // modal window
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__gift-icon')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        if (e.target.closest('.modal__cancel') || e.target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

})()