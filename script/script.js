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

const popup = document.querySelector(".popup");

const popupAddCard = document.querySelector(".popup_type_add-card");
const popupAddProfile= document.querySelector(".button_type_add-profile");
const popupForm = document.querySelector(".popup_type_profile");

const editButton = document.querySelector(".button_type_edit");
const buttonExit = document.querySelector(".button_type_exit");
const buttonLike= document.querySelector(".button_type_like");
const likeOn=document.querySelector(".button_type_like_on")
const deleteButton= document.querySelector(".button_type_delete");
const buttonExitPreview=document.querySelector(".button_type_exit-preview");
const popupPreviewPic=document.querySelector(".popup__preview__pic");
const popupPreviewTitle=document.querySelector(".popup__preview__title");

const profileName = document.querySelector(".profile__name-text");
const profileOccupation = document.querySelector(".profile__occupation");

const inputName = document.querySelector(".popup__input_type_name");
const inputOccupation = document.querySelector(".popup__input_type_occupation");

const gridElements = document.querySelector(".grid-elements");
const popupPreview=document.querySelector(".popup_type_preview");


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

function activatedLike(event) {
    event.target.classList.toggle("button_type_like_on");
  }


function deleteCard(event) {
    event.target.closest(".grid-elements").remove();
  }

  

popupAddProfile.addEventListener("click", function() {openForm(popupAddCard)});
popupForm.addEventListener("submit", submitForm);
buttonExit.addEventListener("click", popupOut);
editButton.addEventListener("click", function() {openForm(editButton)});
buttonLike.addEventListener("click", activatedLike);
deleteButton.addEventListener("click", deleteCard);