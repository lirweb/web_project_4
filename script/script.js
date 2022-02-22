const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name-text");
const profileOccupation = document.querySelector(".profile__occupation");
const editButton = document.querySelector(".button_type_edit");
const inputName = document.querySelector(".popup__input_type_name");
const inputOccupation = document.querySelector(".popup__input_type_occupation");
const buttonExit = document.querySelector(".button_type_exit");
const form = document.querySelector(".popup_type_profile");


function openForm() {
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    popup.classList.add("popup_on");
}

function popupOut() {
    popup.classList.remove("popup_on");
}

function submitForm(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    popupOut();

}

form.addEventListener("submit", submitForm);
buttonExit.addEventListener("click", popupOut);
editButton.addEventListener("click", openForm);