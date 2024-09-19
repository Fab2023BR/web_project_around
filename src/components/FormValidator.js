export default class FormValidation {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  _showInputError(inputElement, errormessage) {
    const errorMessageElement = document.getElementById(
      `${inputElement.id}-error`
    );
    errorMessageElement.textContent = errormessage;
    errorMessageElement.style.display = "block";
    inputElement.classList.add("popup-edit__input_error");
  }

  _hideInputError(inputElement) {
    const errorMessageElement = document.getElementById(
      `${inputElement.id}-error`
    );
    errorMessageElement.style.display = "none";
    errorMessageElement.textContent = "";
    inputElement.classList.remove("popup-edit__input_error");
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
      const saveButton = this._formElement.querySelector(".popup__save-button");
      if (this._hasInvalidInput(this._inputList)) {
        saveButton.classList.add("popup__save_disabled")
        saveButton.setAttribute("disabled", true);
      } else {
        saveButton.classList.remove("popup__save_disabled")
        saveButton.removeAttribute("disabled");
      }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _resetFormState() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      this._toggleButtonState();
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}
