import "./index.css";
import Card from "../components/Сard.js";
import FormValidation from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const list = document.querySelector(".elements")

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const popupImage = new PopupWithImage(".popup-view-image");

function handleCardClick(name, link) {
  popupImage.open({ name, link });
}

const section = new Section({
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = new Card({ title: cardData.name, link: cardData.link }, "#template", handleCardClick).generateCard();
      section.addItem(cardElement);  
    }
},
".elements"
);

section.renderItems();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about"
});

document.querySelector(".profile__edit-button").addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  inputName.value = user.name;
  inputAbout.value = user.about;
  popupEditProfile.open();
});

function handleProfileFormSubmit({ name, about }) {
  userInfo.setUserInfo({ name, about });
}

// for (const card of initialCards) {
//   const cardElement = new Card({ title: card.name, link: card.link }, "#template", handleCardClick).generateCard()
//   list.prepend(cardElement)
// }

//edit profile
const editButton = document.querySelector(".profile__edit-button");
const editForm = document.querySelector(".popup-edit__form");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup-edit__input");
const inputAbout = document.querySelector(".popup__input-space");
const popupEditcloseButton = document.querySelector(".popup-edit__close-button");

//add card
const cards = document.querySelector(".elements"); 
const addForm = document.querySelector(".popup-addCard__form");
const addCardButton = document.querySelector(".profile__add-button");
const popupAddCardCloseButton = document.querySelector(".popup-addCard__close-button");

// Função de validação dos inputs do perfil
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: ".popup__save-button",
  inputErrorClass: ".about-error",
  errorClass: "error-message"
} 
const editFormValidation = new FormValidation(
  config, editForm, 
  )
  editFormValidation.enableValidation();

const editCard = new FormValidation(
    config, addForm, 
    )
    editCard.enableValidation();

  // function handleProfileFormSubmit(inputs) {
  //   profileName.textContent = inputs.name;
  //   profileAbout.textContent = inputs.about;
  // }

const popupEditProfile = new PopupWithForm(".popup-edit", handleProfileFormSubmit);
popupEditProfile.setEventListeners();

editButton.addEventListener("click", function () {
  popupEditProfile.open();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

function submitFormCard(inputs) {
  const titulo = inputs.name.trim();
  const imagem =inputs.image.trim();

  if (titulo && imagem) {
    const newCardObj = {
      name: titulo,
      link: imagem
    };

    const newCard = new Card(newCardObj, "#template", handleCardClick).generateCard()
    section.addItem(newCard);  
    addForm.reset();
  } 
};

const popupAddCard = new PopupWithForm(".popup-addCard", submitFormCard);
popupAddCard.setEventListeners(); 

addCardButton.addEventListener("click", function () {
  popupAddCard.open();
  addForm.reset();  
});

// Fechar o popup "Novo Local"
popupAddCardCloseButton.addEventListener("click", function (evt) {
  popupAddCard.close();
});

popupEditcloseButton.addEventListener("click", function () {
  popupEditProfile.close();
});

const popupImageClose = document.querySelector(".popup-view-image__close-button");

popupImageClose.addEventListener("click", function (evt) {
    popupImage.close();
});

function closePopupOnEscKey(evt) {
  if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      if (openedPopup) {
          openedPopup.classList.remove("popup_opened");
      }
  }
}

document.addEventListener("keydown", closePopupOnEscKey);
