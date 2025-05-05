export class Navigation {
    constructor() {
        this.hamburger = document.querySelector('.fa-solid');
        this.ulDisplay = document.querySelector('ul');
        this.navBarAnimation = document.querySelector('nav');
        this.navLinks = document.querySelectorAll('nav .link');
        this.body = document.getElementsByTagName('body')[0];
        this.linksArray = [];

        this.init();
    }

    init() {
        this.showNavBar();
        this.setupHamburgerToggle();
        this.setupLinks();
        this.clickedScrollToElement();
    }

    showNavBar() {
        this.navBarAnimation.style.transform = "translateY(0%)";
        this.navBarAnimation.style.opacity = "1";
    }

    setupHamburgerToggle() {
        this.hamburger.addEventListener('click', (event) => {
            event.preventDefault();

            const isHidden = this.ulDisplay.style.display === 'none' || this.ulDisplay.style.display === '';
            this.ulDisplay.style.display = isHidden ? 'flex' : 'none';
        });
    }

    setupLinks() {
        const getLinks = document.getElementsByClassName('link');
        this.linksArray = [...getLinks];

        this.linksArray.forEach(link => {
            link.addEventListener('click', () => {
                link.classList.add('active');
            });
        });
    }

    clickedScrollToElement = () => {

        this.navLinks.forEach(link => {
            let href = link.getAttribute('href');
    
            if (href.startsWith('#')) {
                link.addEventListener('click', (event) => {
                    this.applyEffect();
                    
                    event.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                    }

                    href === '#about' ? target.style.transform = "translateY(-27px)" : '';    
                });
            }
        })
    }

    applyEffect() {

        this.body.classList.add('bodyEffect');
    }
}