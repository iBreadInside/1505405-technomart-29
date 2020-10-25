const writeUsForm = document.querySelector('.lost-button');
const writeUsPopup = document.querySelector('.modal-write-us');
const writeUsClose = document.querySelector('.write-us-close');
const writeForm = document.querySelector('.write-form');
const writeYourName = document.querySelector('.name-area');
const writeEmail = document.querySelector('.email-area');
const writeText = document.querySelector('.wide-form');

const buyForm = document.querySelectorAll('.buy');
const buyPopup = document.querySelector('.modal-buying');
const buyClose = document.querySelector('.buying-close');
const continueShopping = document.querySelector('.modal-button-continue');
const cart = document.querySelector('.cart');
const wishlistButton = document.querySelectorAll('.wishlist');
const bookmark = document.querySelector('.bookmark');

const mapForm = document.querySelector('.map-img');
const mapPopup = document.querySelector('.modal-map');
const mapClose = document.querySelector('.map-close');

if (writeUsForm) {

    let isStorageSupport = true;
    let nameStorage = '';
    let emailStorage = '';

    try {
        nameStorage = localStorage.getItem('yourName');
        emailStorage = localStorage.getItem('yourEmail');
    } catch (err) {
        isStorageSupport = false;
    };

    writeUsForm.addEventListener('click', function(evt) {
        evt.preventDefault();
        writeUsPopup.classList.add('modal-show');

        if (!nameStorage) {
            writeYourName.focus();
        }

        if (nameStorage) {
            writeYourName.value = nameStorage;
            writeEmail.focus();
        }

        if (emailStorage) {
            writeEmail.value = emailStorage;
            writeText.focus();
        }
    });

    writeUsClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        writeUsPopup.classList.remove('modal-show');
        writeUsPopup.classList.remove("modal-error");
    });

    writeYourName.addEventListener('input', setLocalStorageName);
    writeEmail.addEventListener('input', setLocalStorageMail);

    function setLocalStorageName(evt) {
        if (isStorageSupport && evt.target.value) { // если есть поддержка localStorage и значение в инпуте
            localStorage.setItem('yourName', evt.target.value);
            nameStorage = localStorage.getItem('yourName');
        }
    };

    function setLocalStorageMail(evt) {
        if (isStorageSupport && evt.target.value) { // если есть поддержка localStorage и значение в инпуте
            localStorage.setItem('yourEmail', evt.target.value);
            emailStorage = localStorage.getItem('yourEmail');
        }
    };

    writeForm.addEventListener('submit', function (evt) {
        if (!writeYourName.value || !writeEmail.value) {
            evt.preventDefault();
            writeUsPopup.classList.remove("modal-error");
            writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
            writeUsPopup.classList.add("modal-error");
        }
        else {
            if (isStorageSupport) {
                localStorage.setItem('yourName', writeYourName.value);
                localStorage.setItem('yourEmail', writeEmail.value);
            }
        }
    });
    
};

window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        if (writeUsPopup.classList.contains("modal-show")
        || buyPopup.classList.contains('modal-show')
        || mapPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            writeUsPopup.classList.remove("modal-show");
            writeUsPopup.classList.remove("modal-error");
            buyPopup.classList.remove('modal-show');
            mapPopup.classList.remove('modal-show');
        }
    }
});

// Buy Popup
for (var i = 0; i < buyForm.length; i++) {
    buyForm[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        buyPopup.classList.add('modal-show');
        cart.classList.add('red');
    });
};

for (var i = 0; i < wishlistButton.length; i++) {
    wishlistButton[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        bookmark.classList.add('red');
    });
};

buyClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove('modal-show');
});

continueShopping.addEventListener('click', function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove('modal-show');
});

// Map Popup

if (mapForm) {
    mapForm.addEventListener('click', function(evt) {
        evt.preventDefault();
        mapPopup.classList.add('modal-show');
    });

    mapClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove('modal-show');
    });
};