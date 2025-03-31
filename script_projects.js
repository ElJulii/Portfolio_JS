const mainBox = document.querySelector('.main__container-projects');
const box = document.querySelector('.item_project_central');

//names boxes
const nameBoxes = document.querySelectorAll('.projects-list__item-name');

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
    {id: 0, name : 'Web Love', image : 'images-folder/projects/img-love.png', link: 'https://eljulii.github.io/love/'},
    {id: 1, name : 'Latin Day', image : 'images-folder/projects/img-latinDay.png', link : 'https://latinos-kfu.netlify.app/'},
    {id: 2, name: 'Calendar',  image : 'images-folder/projects/img-calendar.png', link : 'https://github.com/ElJulii/schedule_php'},
    {id: 3, name : 'Sale of Apartments',  image : 'images-folder/projects/img-apartments.png', link : 'https://eljulii.github.io/Apartments_Laras/build/'},
    {id: 4, name : 'BeautySalon', image : 'images-folder/projects/img-beauty.png', link : 'https://www.figma.com/design/3pCcBdi4RqkmI8boaataUA/Web_beauty?node-id=0-1&t=UkI2Bu7hdei6sA2f-1'}
]


set_images_box(boxes, projects, nameBoxes);
//events of the arrows
right_arrow.addEventListener('click', (e) => {
    projects = change_img_position_right(projects);
    set_images_box(boxes, projects, nameBoxes);
    e.stopPropagation()
})

left_arrow.addEventListener('click', (e) => {
    projects = change_img_position_left(projects);
    set_images_box(boxes, projects, nameBoxes);
    e.stopPropagation()
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

function set_images_box (array_boxes, array_projects, name_boxes) {
    array_boxes.forEach((image, index ) => {
        image.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 50))
    ,url("${array_projects[index].image}") center / 180% no-repeat`;
    })
    name_boxes.forEach((box, index) => {
        box.textContent = `${array_projects[index].name}`
    })
}

//redirect to projects
boxes.forEach((project, index) => {
    project.addEventListener('click', () => {
        console.log(projects[index].id)
        window.open(projects[index].link);
    })
})