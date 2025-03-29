const contactList = document.querySelectorAll('.content-section__contact-item');
const clipBoarMessage = document.querySelector('.content-section__copied-message');

contactList.forEach((item, index)=> {
    item.addEventListener('click', async () => {
        switch (index) {
            case 0 :
                window.open('https://github.com/ElJulii');
                break;
            case 1 :
                window.open('https://web.telegram.org/k/#@ElJulii28');
                break;
            case 2 :
                try {
                    await navigator.clipboard.writeText('juli2003juli@gmail.com');
                    clipBoarMessage.style.display = 'initial';
                    setTimeout(() => {
                        clipBoarMessage.style.display = 'none';
                    }, 5000)
                } catch (e) {
                    console.error('error: ', e);
                }
                break;
        }
    })
})
