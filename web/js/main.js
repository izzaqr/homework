(function () {

    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('burger--opened')) {
            document.body.classList.add('burger--opened')
        } else {
            document.body.classList.remove('burger--opened')
        }
    }

    // modal window

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.hero__button')

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

    // swiper

    const swiper = new Swiper(".swiper", {
        slidesPerView: 1.1,
        spaceBetween: 20,
        freeMode: true,

        breakpoints: {
            650: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 64,
            }
        }
    });

})()