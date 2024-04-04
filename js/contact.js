document.addEventListener('DOMContentLoaded', () => {

    gettingTrancelateY = () => {
        return "translateY(0%)";
    }

    //Sesources for animation
    const mainBackgroundColor = document.getElementsByTagName('main');
    const myPicture = document.getElementsByTagName('img');
    const navBarAnimation = document.querySelector('nav');
    //const linkActive = document.querySelector('.active');


    
    //Appled "animation"
    //linkActive.style.left = "0px";
    mainBackgroundColor[0].style.transform = "translateY(0%)";
    myPicture[1].style.transform = "translateY(0%)";

    navBarAnimation.style.transform = "translateY(0%)";


});