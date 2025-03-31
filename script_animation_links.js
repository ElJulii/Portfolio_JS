//links
const headerLinks = document.querySelectorAll('.nav__link');
const footerLink = document.querySelector('.footer__link-contact');

//Titles and links
const contactTitle = document.querySelector('.content-section__title--contact');
const experienceTitle = document.querySelector('.content-section__title--experience');
const CVTitle = document.querySelector('.content-section__linkCV');
const projectsTitle = document.querySelector('.container-projects__tittle');


// Titles
const wordsToScale = [experienceTitle, projectsTitle, CVTitle, contactTitle];

headerLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        switch (index) {
            case 0:
                animation(wordsToScale[0]);
                break;
            case 1:
                animation(wordsToScale[1]);
                break;
            case 2:
                animation(wordsToScale[2]);
                break;
            case 3:
                animation(wordsToScale[3]);
                break;
        }
    })
})

footerLink.addEventListener('click', () => {
    animation(wordsToScale[3]);
})

function animation(element) {
    element.style.scale = '1.1';
    element.style.color = 'red';
    setTimeout(() => {
        element.style.scale = '1';
        element.style.color = '#3FDB49';
    }, 370)
}