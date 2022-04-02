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


const cards = document.querySelector(".cards");

const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const cardElement = cardTemplate.cloneNode(true);


const buttonDelete = document.querySelector(".button_type_delete");

const popupPreviewImage = document.querySelector(".popup__preview-container-image");
const popupPreviewTitle = document.querySelector(".popup__preview-container-title");


const cardImage = cardElement.querySelector(".card__image");

const overlay = document.querySelectorAll(".popup");

//opening popup 
function openPopup(popup) {
popup.classList.add("popup_on");
// popup.addEventListener('click', closePopupWithOverlay);
popup.addEventListener('mousedown', closePopupWithOverlay);

document.addEventListener("keydown", closePopupWithEsc);
};

//closing popup
function closePopup(popup) {
popup.classList.remove("popup_on");
// overlay.removeEventListener('click', closePopupWithOverlay);
popup.removeEventListener('mousedown', closePopupWithOverlay);
document.removeEventListener("keydown", closePopupWithEsc);
}


const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_card-link");
const profileNameText = document.querySelector(".profile__name-text");
buttonEdit.addEventListener("click", () => {
openPopup(popupEditProfile);
//inputName.value = document.querySelector(".profile__name-text").textContent;
inputName.value = profileNameText.textContent;
inputOccupation.value = profileOccupation.textContent;
checkInitialFormValidity(popupEditProfile.querySelector('form'), pageSettings);
});

const inactiveButtonClass =  document.querySelector(".button_type_disabled");

buttonAddCard.addEventListener("click", () => {openPopup(popupAddCard), createCardElement.classList.add(inactiveButtonClass) });


ד
buttonAddCard.addEventListener("click", function () {
  openPopup(popupAddCard)
  });
  popupEditProfile.addEventListener("submit", submitProfileForm); //
  popupAddCard.addEventListener("submit", submitAddCardForm);


function submitProfileForm(event) {
event.preventDefault();
profileNameText.textContent = inputName.value;
profileOccupation.textContent = inputOccupation.value;
closePopup(popupEditProfile);
}

function submitAddCardForm(event) {
event.preventDefault();
const newCard = {
  name: cardNameInput.value,
  link: cardLinkInput.value
};
createCardElement(newCard);
closePopup(popupAddCard);
event.target.reset();
}

function createCardElement(cardData) { //{ card name, card link}
const card = cardTemplate.cloneNode(true);
const cardImage = card.querySelector(".card__image");
card.querySelector(".card__title").textContent = cardData.name;
cardImage.src = cardData.link;
cardImage.alt = `Photo of ${cardData.name}`;

card.querySelector(".button_type_delete").addEventListener("click", (evt) => {
  evt.target.closest(".card").remove();
});

const buttonLike = card.querySelector(".button_type_like");
buttonLike.addEventListener("click", activateLike);


cardImage.addEventListener("click", function () {
  popupPreviewImage.src = cardData.link;
  popupPreviewImage.alt = cardData.name;
  popupPreviewTitle.textContent = cardData.name;
  openPopup(popupPreview);

});

cards.prepend(card);
}



function activateLike(event) {
event.target.classList.toggle("button_type_like_on");
}

const allCloseButtons = document.querySelectorAll(".button_type_exit");
allCloseButtons.forEach((btn) => btn.addEventListener("click", () => {

const openedPopup = document.querySelector(".popup_on");
closePopup(openedPopup);

}));


initialCards.forEach(initialCardData =>
createCardElement(initialCardData)
)


function renderInitialCards() {
initialCards.forEach(card => renderCard(card));
}


function closePopupWithEsc(evt) {
if (evt.key === "Escape") {
  const openPopup = document.querySelector(".popup_on");

  closePopup(openPopup);
}
}

function closePopupWithOverlay(evt) {
if (evt.target == evt.currentTarget) {
  closePopup(evt.target);
}
}
