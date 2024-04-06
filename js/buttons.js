document.addEventListener('DOMContentLoaded', () => { 
    const buttons = document.querySelectorAll('div.links a');

  
        window.addEventListener('scroll', () => {

            buttons[0].style.transform = 'translateY(0%)';
            buttons[0].style.transition = 'transform 500ms ease-out';
        });
   
});
