let popup = document.querySelector(".popup");
let popupEdit = document.querySelector(".popup__edit");
let popupExit = document.querySelector(".popup__exit");
let popupSubmit = document.querySelector('.popup__submit');
let popupBox = document.querySelector(".popup__box");
let popupInput = document.querySelector(".popup__input");
let popupOn = document.querySelector(".popup__on");
let popupProfile = document.querySelector(".popup__profile");

let profile = document.querySelector(".profile");
let profileInfo = document.querySelector(".profile__info");
let profileName = document.querySelector(".profile__name");
let profileOccupation = document.querySelector(".profile__occupation");
let profileAddBtn = document.querySelector(".profile__add-btn");
let profileAvatar = document.querySelector(".profile__avatar");
let profileEditBtn = document.querySelector(".profile__edit-btn");

function openForm() {
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    popupProfile.classList.add('.popup_on');
}

function popupOut() {
    popupProfile.classList.remove('.popup_on');
}

function submitForm(event) {
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    event.preventDefault();
    submitForm(event);
}

popupEdit.addEventListener('click', openForm);
form.addEventListener('submit', submitForm);
popupExit.addEventListener('click', popupOut);