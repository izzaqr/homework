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
        freeMode: false,

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

    // accordion

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

})()