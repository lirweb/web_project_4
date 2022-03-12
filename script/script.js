const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];


const profileForm = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");

const popupAddProfile = document.querySelector(".button_type_add-profile");

//const popup = document.querySelector(".popup");

const buttonEdit = document.querySelector(".button_type_edit");
const buttonExit = document.querySelector(".button_type_exit");
const buttonLike = document.querySelector(".button_type_like");
const buttonLikeBlack = document.querySelector(".button_type_like_on")
const deleteButton = document.querySelector(".button_type_delete");
const buttonExitPreview = document.querySelector(".button_type_exit-preview");
const popupPreviewImage = document.querySelector(".popup__preview__image");
const popupPreviewTitle = document.querySelector(".popup__preview__title");

const profileName = document.querySelector(".profile__name-text");
const profileOccupation = document.querySelector(".profile__occupation");

const inputName = document.querySelector(".popup__input_type_name");
const inputOccupation = document.querySelector(".popup__input_type_occupation");

const cards = document.querySelector(".cards");
const popupPreview = document.querySelector(".popup_type_preview");

const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const cardElement = cardTemplate.cloneNode(true);


function openPopup() {
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;

    openPopup.classList.add("popup_on");
}




function toggleOpenForm(openForm) {
    if (!openForm.classList.contains('popup_on')) {
        inputName.value = profileName.textContent;
        inputOccupation.value = profileOccupation.textContent;
    }
    openForm.classList.toggle("popup_on");
}

const toggleOpenPopup = (openPopup) => {
    if (!openPopup.classList.contains('popup_on')) {
        inputName.value = profileName.textContent;
        inputOccupation.value = profileOccupation.textContent;
    }
    openPopup.classList.toggle('popup_on');
}



function openPopup() {
    popup.classList.add("popup_on");
}






function togglePopup(popupElement) {
    popupElement.toggle()
}

function closePopup() {
    popup.classList.remove("popup_on");
}

function submitForm(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    toggleOpenForm();

}

function activatedLike(event) {
    event.target.classList.toggle("button_type_like_on");
}

function createCardElement(cardData) { //{ card name, card link}
    const card = cardTemplate.cloneNode(true);
    card.querySelector(".card__title").textContent = cardData.name;
    card.querySelector(".card__image").style.backgroundImage = `url(${cardData.link})`;

    return card;
}

function deleteCard(event) {
    event.target.closest(".cards").remove();
}



popupAddProfile.addEventListener("click", function() { openPopup(popupAddCard) });
profileForm.addEventListener("submit", submitForm);

buttonEdit.addEventListener("click", function() { openPopup(buttonEdit) });


buttonLike.addEventListener("click", activatedLike);
deleteButton.addEventListener("click", deleteCard);
buttonExit.addEventListener("click", openPopup(closePopup));

const allCloseButtons = document.querySelectorAll(".button_type_exit");
allCloseButtons.forEach(btn => btn.addEventListener("click", () => {
    const allThePopups = document.querySelectorAll(".popup");
    allThePopups.forEach(popup => popup.classList.remove("popup_on"))
}));

initialCards.forEach(initialCardData => {
    cards.prepend(createCardElement(initialCardData));

})