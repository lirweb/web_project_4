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

//popup kinds
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupPreview = document.querySelector(".popup_type_preview");

//popup exit
const buttonExit = document.querySelector(".button_type_exit");
const buttonExitPreview = document.querySelector(".button_type_exit-preview");


//opening popups
const buttonEdit = document.querySelector(".button_type_edit");
const buttonAddCard = document.querySelector(".button_type_add-card");


//user's inputs
const profileOccupation = document.querySelector(".profile__occupation");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector(".popup__input_type_name");
const inputOccupation = document.querySelector(".popup__input_type_occupation");

//popup submission
const buttonSubmit = document.querySelector(".button_type_submit");
//const profileFormSubmitButton = document.querySelector(".");
//const cardsFormSubmitButton = document.querySelector(".");

const cards = document.querySelector(".cards");
const card = document.querySelector(".card");
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const cardElement = cardTemplate.cloneNode(true);

//like button options
//const buttonLike = document.querySelector(".button_type_like");
//const buttonLikeBlack = document.querySelector(".button_type_like_on");

const buttonDelete = document.querySelector(".button_type_delete");

const popupPreviewImage = document.querySelector(".popup_preview-container_image");
const popupPreviewTitle = document.querySelector(".popup_preview-container_title");


const cardImage = cardElement.querySelector(".card__image");

//opening popup 
function openPopup(popup) {
    popup.classList.add("popup_on");
};

//closing popup
function closePopup(popup) {
    popup.classList.remove("popup_on");
}

/*
function closePopup(event) {
    const popup = event.target.closest(".popup")
    popup.classList.remove("popup_on")
};
*/

const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_card-link");
const profileNameText = document.querySelector(".profile__name-text");
buttonEdit.addEventListener("click", () => {
    openPopup(popupEditProfile);
    //inputName.value = document.querySelector(".profile__name-text").textContent;
    inputName.value = profileNameText.textContent;
    inputOccupation.value = profileOccupation.textContent;
});

buttonAddCard.addEventListener("click", () => openPopup(popupAddCard));

function submitProfileForm(event) {
    event.preventDefault();
    document.querySelector(".profile__name-text").textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    //closePopup(event);
    closePopup(popupEditProfile);
}

function submitAddCardForm(event) {
    event.preventDefault();
    event.target.reset();
    const newCard = { name: cardNameInput.value, link: cardLinkInput.value };
    createCardElement(newCard);
    //closePopup(event);
    closePopup(popupAddCard);
}

function createCardElement(cardData) { //{ card name, card link}
    const card = cardTemplate.cloneNode(true);
    const cardImage = card.querySelector(".card__image");
    card.querySelector(".card__title").textContent = cardData.name;
    card.querySelector(".card__image").src = cardData.link;

    card.querySelector(".button_type_delete").addEventListener("click", (evt) => {
        evt.target.closest(".card").remove();
    });
    // card.querySelector(".button_type_like").addEventListener("click", (evt) => {
    // evt.target.classList.toggle(".button_type_like_on");
    const buttonLike = card.querySelector(".button_type_like");
    buttonLike.addEventListener("click", activateLike);
    //   });


    cardImage.addEventListener("click", function() {
        popupPreviewImage.src = cardData.link;
        popupPreviewImage.alt = cardData.name;
        popupPreviewTitle.textContent = cardData.name;
        openPopup(popupPreview);

    });

    cards.prepend(card);
}

buttonAddCard.addEventListener("click", function() { openPopup(popupAddCard) });
popupEditProfile.addEventListener("submit", submitProfileForm); //
popupAddCard.addEventListener("submit", submitAddCardForm);


//buttonEdit.addEventListener("click", function() { openPopup(buttonEdit) });

function activateLike(event) {
    event.target.classList.toggle("button_type_like_on");
}

const allCloseButtons = document.querySelectorAll(".button_type_exit");
allCloseButtons.forEach((btn) => btn.addEventListener("click", () => {
    // const allThePopups = document.querySelectorAll(".popup");
    //allThePopups.forEach((popup) => popup.classList.remove("popup_on"))
    const openedPopup = document.querySelector(".popup_on");
    closePopup(openedPopup);

}));


initialCards.forEach(initialCardData =>
    createCardElement(initialCardData)
)


function renderInitialCards() {
    initialCards.forEach(card => renderCard(card));
}