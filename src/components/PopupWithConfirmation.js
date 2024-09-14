import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._confirmationButton = this._popupElement.querySelector(".popup-confirm-delete__save-button") 
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmationButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._cardId);
      this._cardElement.remove();
      this.close();
    });
  }

  open(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.open();
  }

  close() {
    super.close();
  }

}
