let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
    
        if (currentSection < totalSections - 1) {
            currentSection++;
       
        }
   
   
    } else {        if (currentSection > 0) {
            currentSection--;
        }
    }
    sections[currentSection].scrollIntoView({
        behavior: 'smooth' //cai nay de cho no k bi khung, chuyen doi muot, neu k co thi no nhu doi ca 2 cai voi nhau 
    });
});
