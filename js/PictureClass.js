export class Picture {
    constructor(arrowNext, arrowPrev) {
        
        this.arrowNext = arrowNext;
        this.arrowPrev = arrowPrev;
        this.sliders = document.getElementsByClassName('slider');
        this.container = document.querySelector('.carousel-container');
        this.test = document.querySelector('.carousel .container');
        this.about = document.querySelector('.about');
        this.currentFrameSlide = 0;
        this.addEventListeners();
        // this.showSkills()
    }

    
    addEventListeners = () => {
        this.arrowNext.addEventListener('click', () => {
            // console.log('next');
            this.nextSlide();
        });
        this.arrowPrev.addEventListener('click', () => {
            // console.log('previous');
            this.previousSlide();
        });
    }

    previousSlide = () => {
        this.currentFrameSlide--;   
        if (this.currentFrameSlide < 0) {
            this.currentFrameSlide = this.sliders.length - 1; // loop to end
        }
        this.showSlide(this.currentFrameSlide);
    }
    
    nextSlide = () => {
        this.currentFrameSlide++;
        if (this.currentFrameSlide > this.sliders.length - 1) {
            this.currentFrameSlide = 0;
        }
        this.showSlide(this.currentFrameSlide);
    }
    
  
    showSlide = (index) => {

        this.container.style.transform = `translateX(-${index * 1200}px)`;
        this.showDetails(index);
    }

    showDetails = (index) => {

        if (window.innerWidth <= 570) {
            this.test.style.transform = `translateY(-${index * 600}px)`;
          } else {
            this.test.style.transform = `translateY(-${index * 400}px)`;
          }
    }
}