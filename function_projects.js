const mainBox = document.querySelector('.main__container-projects');
const box = document.querySelector('.item_project_central');

const defaultHeight = 10 * 16;
let lastBoxWidth = box.offsetWidth;

function updateBoxHeight() {
    const currentBoxWidth = box.offsetWidth;

    const mainBoxWidth = mainBox.offsetWidth;

    if (mainBoxWidth >= 745) {

        const widthChange = currentBoxWidth - lastBoxWidth;

        const newHeight = parseFloat(box.style.height || defaultHeight) + widthChange * 0.5;

        box.style.height = `${Math.max(newHeight, defaultHeight)}px`;

        lastBoxWidth = currentBoxWidth;
    } else {
        box.style.height = '10rem';
        lastBoxWidth = box.offsetWidth;
    }
}

window.addEventListener('resize', updateBoxHeight);

updateBoxHeight();
