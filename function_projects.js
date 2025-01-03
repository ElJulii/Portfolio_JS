const mainBox = document.querySelector('.main__container-projects');
const box = document.querySelector('.item_project_central');

// Adjust the size of item_project_central
function updateBoxHeight() {
    const mainBoxWidth = mainBox.offsetWidth;

    if (mainBoxWidth >= 745) {
        const boxWidth = box.offsetWidth;

        const newHeight = boxWidth * 0.65;

        box.style.height = `${newHeight}px`;
    } else {
        box.style.height = '10rem';
    }
}

window.addEventListener('resize', updateBoxHeight);

updateBoxHeight();

// ROULETTE OF IMAGES

const boxes = document.querySelectorAll('.projects-list__item');

//arrows
const right_arrow = document.querySelector('.row-right');
const left_arrow = document.querySelector('.row-left');

const projects = [
    '/images-folder/projects/img-love.png',
    '/images-folder/projects/img-latinDay.png',
    '/images-folder/projects/img-calendar.png',
    '/images-folder/projects/img-apartments.png',
    '/images-folder/projects/img-beauty.png'
]

boxes.forEach((image, index ) => {
    image.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
    ,url("${projects[index]}") center / 100% no-repeat`;
})