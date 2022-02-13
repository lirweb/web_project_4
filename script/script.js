let popup = document.querySelector(".popup");
let popupOn = document.querySelector(".popup__on");
let profileName = document.querySelector(".profile__name");
let profileOccupation = document.querySelector(".profile__occupation");
let editButton = document.querySelector(".profile__edit-btn");
let inputName = document.querySelector("#name");
let inputOccupation = document.querySelector("#occupation");

function openForm() {
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    popup.classList.add("popup_on");

}

function popupOut() {
    popup.classList.remove("popup_on");
}

function submitForm(event) {
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    event.preventDefault();
    popupOut();
}

form.addEventListener("submit", submitForm);

editButton.addEventListener("click", openForm);