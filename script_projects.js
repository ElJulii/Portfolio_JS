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

let projects = [
    'images-folder/projects/img-love.png',
    'images-folder/projects/img-latinDay.png',
    'images-folder/projects/img-calendar.png',
    'images-folder/projects/img-apartments.png',
    'images-folder/projects/img-beauty.png'
]

set_images_box(boxes, projects);
//events of the arrows
right_arrow.addEventListener('click', () => {
    projects = change_img_position_right(projects);
    set_images_box(boxes, projects);
})

left_arrow.addEventListener('click', () => {
    projects = change_img_position_left(projects);
    set_images_box(boxes, projects);
})

//Function of the arrows
function change_img_position_left(array_images) {
    let saver = array_images[array_images.length - 1]
    for (let i = array_images.length - 1; i > -1; i--) {
        if (i === 0) {
            array_images[i] = saver;
        } else  array_images[i] = array_images[i - 1];
    }
    return array_images;
}

function change_img_position_right(array_images) {
    let saver = array_images[0]
    for (let i = 0; i < array_images.length; i++) {
        if (i === array_images.length - 1) {
            array_images[i] = saver;
        } else  array_images[i] = array_images[i + 1];
    }
    return array_images;
}

//Adding images to the boxes

function set_images_box (array_boxes, array_projects) {
    array_boxes.forEach((image, index ) => {
        image.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
    ,url("${array_projects[index]}") center / 180% no-repeat`;
    })
}