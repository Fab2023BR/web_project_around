export default class UserInfo {
    constructor({ nameSelector, aboutSelector, avatarSelector }) {
      this._nameElement = document.querySelector(nameSelector);
      this._aboutElement = document.querySelector(aboutSelector);
      this._avatarElement = document.querySelector(avatarSelector);
    }
  
    getUserInfo() {
      return {
        name: this._nameElement.textContent,
        about: this._aboutElement.textContent,
        avatar: this._aboutElement.getAttribute('src')
      };
    }
  
    setUserInfo({ name, about }) {
      this._nameElement.textContent = name;
      this._aboutElement.textContent = about;
    }

    setAvatar(image) {
      this._avatarElement.setAttribute('src', image.avatar);
    }
  }
  