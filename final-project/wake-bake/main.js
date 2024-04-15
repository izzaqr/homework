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


    // tabs

    const tabControls = document.querySelector('.tab__controls')

    tabControls.addEventListener('click', switchTab)

    function switchTab(e) {

        const tabLink = e.target.closest('.tab__controls-link')

        e.preventDefault()

        if (!tabLink) return
        if (tabLink.classList.contains('tab__controls-link--active')) return

        const tabContentID = tabLink.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeLink = document.querySelector('.accordion__content--show')
        const activeContent = document.querySelector('.tab__controls-link--active')

        if (activeLink) {
            activeLink.classList.remove('accordion__content--show')
        }

        if (activeContent) {
            activeContent.classList.remove('tab__controls-link--active')
        }

        tabContent.classList.add('accordion__content--show')
        tabLink.classList.add('tab__controls-link--active')
    }

    // accordion

    // const accordionLists = document.querySelectorAll('.accordion-list')

    // accordionLists.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         const accordionControl = e.target.closest('.accordion-list__control')
    //         if (!accordionControl) return
    //         const accordionItem = accordionControl.parentElement
    //         const accordionContent = accordionControl.nextElementSibling

    //         accordionItem.classList.toggle('accordion-list__item--opened')

    //         if (accordionItem.classList.contains('accordion-list__item--opened')) {
    //             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
    //         } else {
    //             accordionContent.style.maxHeight = null
    //         }
    //     })
    // })

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

    // slider

    const swiper = new Swiper('.gallery__slider', {
        spaceBetween: 30,
        slidesPerView: 4,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            550: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            850: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        }
    });

})()