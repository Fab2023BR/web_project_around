
export default class Card {
    constructor({ title, link }, templateSelector, handleCardClick) {
    this._titleInterno = title
    this._urlInterno = link
    this._template = templateSelector
    this._handleCardClick = handleCardClick
}
_getTemplate(){
    const template = document.querySelector(this._template).content.querySelector(".elements__card").cloneNode(true);
    return template;
}

_setEventListeners() {
this._element.querySelector(".elements__delete-icon").addEventListener("click", (event)=>{
    event.target.parentElement.remove();
}
 )};

generateCard () {
  this._element = this._getTemplate()
  this._element.querySelector(".elements__card-name").textContent = this._titleInterno;
  this._element.querySelector(".elements__card-image").setAttribute("src", this._urlInterno);
  this._element.querySelector(".elements__card-image").setAttribute("alt", this._titleInterno);
  this._element.querySelector(".elements__card-image").addEventListener("click", () => {
    this._handleCardClick(this._titleInterno, this._urlInterno);
});

  this._setEventListeners() 
  return this._element

 } 
}
