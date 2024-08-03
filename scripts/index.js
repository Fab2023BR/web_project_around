//edit profile
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup-edit");
const editForm = document.querySelector(".popup-edit__form");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup-edit__input-title");
const inputAbout = document.querySelector(".popup-edit__input-about");
const popupEditcloseButton = document.querySelector(
  ".popup-edit__close-button"
);

//add card
const cards = document.querySelector(".elements");
const card = document.querySelector(".element");
const popupAddCard = document.querySelector(".popup-addCard");
const addForm = document.querySelector(".popup-addCard__form");
const addCardButton = document.querySelector(".profile__add-button");
const addCardTitulo = document.querySelector(".popup-addCard__input-title");
const addCardImage = document.querySelector(".popup-addCard__input-image");
const popupAddCardCloseButton = document.querySelector(
  ".popup-addCard__close-button"
);
const addCardSaveButton = document.querySelector(".popup-addCard__save-button");

editButton.addEventListener("click", function () {
  popupEditProfile.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

popupEditcloseButton.addEventListener("click", function () {
  popupEditProfile.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupEditProfile.classList.remove("popup_opened");
}
editForm.addEventListener("submit", handleProfileFormSubmit);

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

function generateCard(card) {
  const template = document
    .querySelector("#template")
    .content.querySelector(".elements__card");

  const currentCard = template.cloneNode(true);

  currentCard.querySelector(".elements__card-name").textContent = card.name;

  currentCard.querySelector(".elements__card-image").setAttribute("src", card.link);

  currentCard.querySelector(".elements__card-image").setAttribute("alt", `imagem do lugar ${card.name}`);

  currentCard
    .querySelector(".elements__delete-icon")
    .addEventListener("click", (evt) => {
      const elements = document.querySelector(".elements");
      const card = evt.target.offsetParent;

      elements.removeChild(card);
    });

  currentCard
    .querySelector(".elements__like-icon")
    .addEventListener("click", (evt) => {
      if (evt.target.getAttribute("src") === "./images/like-inative.png") {
        return evt.target.setAttribute(
          "src",
          "./images/like-active.png"
        );
      }

      return evt.target.setAttribute("src", "./images/like-inative.png");
    });

    return currentCard;
}

initialCards.forEach(card => {
  const cardItem = generateCard(card);
  cards.append(cardItem);
})

addCardButton.addEventListener("click", function () {
  popupAddCard.classList.add("popup_opened");
});

addForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const titulo = addCardTitulo.value.trim();
  const imagem = addCardImage.value.trim();

  if (titulo && imagem) {
    const newCardObj = {
      name: titulo,
      link: imagem
    };

    const newCard = generateCard(newCardObj);

    cards.prepend(newCard);
    addForm.reset();
    popupAddCard.classList.remove("popup_opened");
  } else {
    alert("Please, fill all inputs");
  }
});

popupAddCardCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupAddCard.classList.remove("popup_opened");
});