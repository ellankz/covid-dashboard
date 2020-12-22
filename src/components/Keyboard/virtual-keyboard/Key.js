/* eslint-disable no-param-reassign */
export default class Key {
  constructor(lang) {
    this.lang = lang;
  }

  static generateIcon(receivedName) {
    const name = receivedName.toLowerCase();
    if (name !== 'en' && name !== 'ru') {
      return `<i class="material-icons">${name}</i>`;
    }
    return `<span class="lang-code">${name.toUpperCase()}</span>`;
  }

  generateKey(keyData) {
    const keyElement = document.createElement('button');
    keyElement.setAttribute('type', 'button');
    keyElement.classList.add('keyboard__key');
    if (keyData.spec === null) {
      return this.generateActionKey(keyElement, keyData);
    }
    if (keyData.basic === ' ') {
      keyElement.classList.add('keyboard__key--extra-wide');
      keyElement.innerHTML = Key.generateIcon('space_bar');
    } else {
      keyElement.textContent = keyData.basic.toLowerCase();
    }
    keyElement.setAttribute('data-spec', keyData.spec);
    keyElement.setAttribute('data-basic', keyData.basic);
    return keyElement;
  }

  generateActionKey(keyElement, keyData) {
    keyElement.setAttribute('data-action-key-type', keyData.basic);
    switch (keyData.basic) {
      case 'delete':
        keyElement.innerHTML = Key.generateIcon('delete');
        break;
      case 'tab':
        keyElement.innerHTML = Key.generateIcon('keyboard_tab');
        break;
      case 'backspace':
        keyElement.classList.add('keyboard__key--wide');
        keyElement.innerHTML = Key.generateIcon('backspace');
        break;

      case 'capslock':
        keyElement.classList.add(
          'keyboard__key--wide',
          'keyboard__key--activatable',
        );
        keyElement.innerHTML = Key.generateIcon('keyboard_capslock');
        break;

      case 'shift':
        keyElement.classList.add(
          'keyboard__key--wide',
          'keyboard__key--activatable',
        );
        keyElement.innerHTML = Key.generateIcon('keyboard_arrow_up');
        break;

      case 'enter':
        keyElement.classList.add('keyboard__key--wide');
        keyElement.innerHTML = Key.generateIcon('keyboard_return');
        break;

      case 'done':
        keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
        keyElement.innerHTML = Key.generateIcon('check_circle');
        break;

      case 'arrowleft':
        keyElement.classList.add('keyboard__key');
        keyElement.innerHTML = Key.generateIcon('chevron_left');
        break;

      case 'arrowright':
        keyElement.classList.add('keyboard__key');
        keyElement.innerHTML = Key.generateIcon('chevron_right');
        break;

      case 'lang':
        keyElement.classList.add('keyboard__key--wide');
        keyElement.innerHTML = Key.generateIcon(this.lang.toUpperCase());
        break;

      case 'voice':
        keyElement.classList.add(
          'keyboard__key--wide',
          'keyboard__key--activatable',
        );
        keyElement.innerHTML = Key.generateIcon('mic');
        break;
      default:
        break;
    }
    return keyElement;
  }
}
