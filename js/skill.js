document.addEventListener('DOMContentLoaded', () => { 
    let containerIconsSkills = document.querySelectorAll('.icons i');
    
    containerIconsSkills.forEach(icon => {
       icon.addEventListener('mouseover', () => {
           icon.style.transform = "translateX(15%)";
           icon.style.transition = '100ms ease-out';
           
       });

       icon.addEventListener('mouseout', () => {
        icon.style.transform = "translateX(0%)";
        icon.style.transition = '100ms ease-out';
        
        });
    });
});