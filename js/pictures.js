document.addEventListener('DOMContentLoaded', () => { 
   const getPortfolioCollection = document.getElementsByTagName('picture');
   
   //Fill up the imgs tag into this array
   let arrayOFPic = [];


   //Convert from colection into array and getting the img under the picture tag
   const convertAndGetfFrstElementChild = () => {

    for(let i=0; i<getPortfolioCollection.length; i++ ) {
        arrayOFPic.push(getPortfolioCollection[i].firstElementChild);
    }
        return arrayOFPic;
   }
   
   //Call the arrow function
   convertAndGetfFrstElementChild();
    
   //Loop via pictures and add events include efects
    arrayOFPic.forEach(picture => {
      
        picture.addEventListener('mouseover', () => {
            picture.style.transform = 'translateY(-1%)';
            picture.style.transition = '500ms ease-out';
        });

        picture.addEventListener('mouseleave', () => {
            picture.style.transform = 'translateY(0%)';
            picture.style.transition = '500ms ease-out';
        });
    });
});