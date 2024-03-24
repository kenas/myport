document.addEventListener('DOMContentLoaded', () => {
   
    const links = () => {
        const getLinks = document.getElementsByClassName('link');

        getLinksArray = [...getLinks];
    
        getLinksArray.forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                element.classList.add('active');
            });
        });
    }

    links();

    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    const cir = document.querySelector('.marks');

    let currentSlideIndex = 0;

    const makrs = () => {

        slides.forEach(m => {
            const cisr = document.createElement('div');
            cisr.className = 'mark';
            cir.appendChild(cisr);

          
        });
    
    }
    makrs()

    // const showArrows = (index) => {
     
    //     if (index === 0) {
            
    //         prevButton.style.display = 'none';
    //         nextButton.style.display = 'block'; // Show next button
         
    //     } else if (index === slides.length - 1) {
    //         prevButton.style.display = 'block'; // Show prev button
    //         nextButton.style.display = 'none';
    //     } else {
    //         prevButton.style.display = 'block'; // Show both buttons
    //         nextButton.style.display = 'block';
    //     }
    // }

    

    // Function to show current slide
    function showSlide(index) {
        
        //showArrows(index);
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Show the slide at the given index
        slides[index].style.display = 'block';
    }

    // Show initial slide
    showSlide(currentSlideIndex);

    // Function to show next slide
    function showNextSlide(event) {
        event.preventDefault();
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Function to show previous slide
    function showPreviousSlide(event) {
        event.preventDefault();
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Event listeners for next and previous buttons
    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

});