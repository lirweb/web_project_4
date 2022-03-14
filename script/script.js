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

//opening popups
const buttonEdit = document.querySelector(".button_type_edit");
const buttonAddProfile = document.querySelector(".button_type_add-profile");


//user's inputs
const profileOccupation = document.querySelector(".profile__occupation");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector(".popup__input_type_name");
const inputOccupation = document.querySelector(".popup__input_type_occupation");

//popup submission
const buttonSubmit = document.querySelector(".button_type_submit");

const cards = document.querySelector(".cards");
const card = document.querySelector(".card");
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const cardElement = cardTemplate.cloneNode(true);

//like button options
const buttonLike = document.querySelector(".button_type_like");
const buttonLikeBlack = document.querySelector(".button_type_like_on")

const buttonDelete = document.querySelector(".button_type_delete");

const buttonExitPreview = document.querySelector(".button_type_exit-preview");

const popupPreviewImage = document.querySelector(".popup__preview__image");
const popupPreviewTitle = document.querySelector(".popup__preview__title");
const preview = document.querySelector(".popup_type_preview");



//opening popup 
function openPopup(popup) {
    // inputName.value = profileName.textContent;
    //inputOccupation.value = profileOccupation.textContent;
    popup.classList.add("popup_on");
};

/*
popupEditProfile.addEventListener("click, () =>{
        openPopup(popup) inputName.value = profileName.textContent; inputOccupation.value = profileOccupation.textContent;
*/


//closing popup
function closePopup(popup) {
    popup.classList.remove("popup_on")
};

/*
function editPopupProfile(popup) {
    inputName.value = profileTitle.textContent;
    inputOccupation.value = profileOccupation.textContent;
    openPopup(popup);
}
*/






buttonEdit.addEventListener("click", () => {
    openPopup(buttonEdit);
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
});

buttonAddProfile.addEventListener("click", () => openPopup(buttonAddProfile));

buttonEdit.addEventListener("click", () => openPopup(buttonEdit));


function submitForm(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    openForm();

}

preview.addEventListener("click", function() {
    popupPreviewImage.src = card.link;
    popupPreviewTitle.alt = card.name;
    imageDisplayedHeading.textContent = card.name;
    openPopup(preview);
});

function createCardElement(cardData) { //{ card name, card link}
    const card = cardTemplate.cloneNode(true);
    card.querySelector(".card__title").textContent = cardData.name;
    card.querySelector(".card__image").src = cardData.link;

    card.querySelector(".button_type_delete").addEventListener("click", (evt) => {
        evt.target.closest(".card").remove();
    });
    // card.querySelector(".button_type_like").addEventListener("click", (evt) => {
    // evt.target.classList.toggle(".button_type_like_on");
    const buttonLike = cardElement.querySelector(".button_type_like");
    buttonLike.addEventListener("click", activatedLike);
    //   });


    return card;
}

//function deleteCard(event) {
//  event.target.closest(".cards").remove();}


buttonAddProfile.addEventListener("click", function() { openPopup(popupAddCard) });
popupEditProfile.addEventListener("submit", submitForm);

buttonEdit.addEventListener("click", function() { openPopup(buttonEdit) });

function activatedLike(event) {
    event.target.classList.toggle("button_type_like_on");
}

//buttonLike.addEventListener("click", activatedLike);
//deleteButton.addEventListener("click", deleteCard);
//buttonExit.addEventListener("click", openPopup(closePopup));

const allCloseButtons = document.querySelectorAll(".button_type_exit");
allCloseButtons.forEach((btn) => btn.addEventListener("click", () => {
    const allThePopups = document.querySelectorAll(".popup");
    allThePopups.forEach((popup) => popup.classList.remove("popup_on"))
}));


initialCards.forEach(initialCardData => {
    cards.prepend(createCardElement(initialCardData));

})

function renderInitialCards() {
    initialCards.forEach(card => renderCard(card));
}


//renderInitialCards();