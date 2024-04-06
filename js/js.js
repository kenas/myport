document.addEventListener('DOMContentLoaded', () => {
   
    const hamburger = document.querySelector('.fa-solid');
    const ulDisplay = document.querySelector('ul');

    const navBarAnimation = document.querySelector('nav');

    navBarAnimation.style.transform = "translateY(0%)";
    navBarAnimation.style.opacity = "1";

    
  
    hamburger.addEventListener('click', (event) => {
        event.preventDefault();
      
        
        if (ulDisplay.style.display === 'none' || ulDisplay.style.display === '') {
            ulDisplay.style.display = 'flex';
        } else {
            ulDisplay.style.display = 'none';
        }
    });

    const links = () => {
        const getLinks = document.getElementsByClassName('link');

        getLinksArray = [...getLinks];
    
        getLinksArray.forEach(element => {
            element.addEventListener('click', (event) => {
                //event.preventDefault();
                element.classList.add('active');
            });
        });
    }

    links();

});