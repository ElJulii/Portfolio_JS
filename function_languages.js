const list_languages_names_item = document.querySelectorAll(".content-section__languages-item");

checkWindowSize();

window.addEventListener( 'resize', checkWindowSize)

function checkWindowSize() {
    const body_tag = window.innerWidth
    if (body_tag >= 843) {
        list_languages_names_item.forEach((item) => {
            item.textContent = '';
        })
    } else {
        list_languages_names_item.forEach((item, index) => {
            switch (index) {
                case 0 :
                    item.textContent = 'Spanish - Native';
                    break;
                case 1:
                    item.textContent = 'English - B2';
                    break;
                case 2:
                    item.textContent = 'Russian - B2';
                    break;
            }
        })
    }
}