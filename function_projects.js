// Seleccionar los elementos
const mainBox = document.querySelector('.main__container-projects');
const box = document.querySelector('.item_project_central');

// Altura predeterminada en píxeles (10rem = 160px si 1rem = 16px)
const defaultHeight = 10 * 16;

// Función para ajustar el height de box
function updateBoxHeight() {
    // Obtener el ancho actual de main_box
    const mainBoxWidth = mainBox.offsetWidth;

    if (mainBoxWidth >= 745) {
        // Si el ancho de main_box es mayor o igual a 745px
        const boxWidth = box.offsetWidth; // Ancho actual de box

        // El height de box será siempre 0.5 veces su width
        const newHeight = boxWidth * 0.65;

        // Aplicar la nueva altura
        box.style.height = `${newHeight}px`;
    } else {
        // Si main_box es menor a 745px, restablecer altura a 10rem
        box.style.height = '10rem';
    }
}

// Escuchar el evento resize para detectar cambios en el tamaño de la ventana
window.addEventListener('resize', updateBoxHeight);

// Ejecutar la función una vez al inicio para establecer el estado inicial
updateBoxHeight();
