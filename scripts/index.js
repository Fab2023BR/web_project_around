
const editButton = document.querySelector("#edit-button");
const saveButton = document.querySelector(".popup__save-button");
const closeButton = document.querySelector("#close-button");
const formElement = document.querySelector(".popup__form");

function openPopUp() {
    const popup = document.querySelector(".popup");
    popup.classList.add("popup__opened");
}

function closePopUp() {
    const popup = document.querySelector(".popup");
    popup.classList.remove("popup__opened");

    document.querySelector("#name").value = "";
    document.querySelector("#about").value = "";
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const nameInput = document.querySelector("#name").value;
    const aboutInput = document.querySelector("#about").value;
    const userName = document.querySelector(".profile-info__name");
    const userAbout = document.querySelector(".profile-info__explore");

    userName.textContent = nameInput;
    userAbout.textContent = aboutInput;

    closePopUp();
}

editButton.addEventListener("click", openPopUp);
closeButton.addEventListener("click", closePopUp);
formElement.addEventListener("submit", handleProfileFormSubmit);