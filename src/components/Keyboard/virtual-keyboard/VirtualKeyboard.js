/* eslint-disable no-param-reassign */
import langEnKeySchema from './languages/en';
import langRuKeySchema from './languages/ru';
import Key from './Key';

export default class VirtualKeyboard {
  constructor() {
    this.elements = {
      keyboard: null,
      keysWrap: null,
      keys: [],
      textarea: null,
      toggleButton: null,
    };

    this.eventhandlers = {
      onInput: (actionType = null, length = 1) => {
        if (this.properties.speechRecognitionOn === false) {
          const pos = this.elements.textarea.selectionStart;
          this.elements.textarea.value = this.properties.value;
          this.elements.textarea.focus();
          if (actionType === 'remove' || actionType == null) {
            this.elements.textarea.selectionStart = pos;
            this.elements.textarea.selectionEnd = pos;
          } else if (actionType === 'add') {
            this.elements.textarea.selectionStart = pos + length;
            this.elements.textarea.selectionEnd = pos + length;
          }
        }
      },
      onClose: () => {
        this.elements.textarea.blur();
      },
    };

    this.properties = {
      value: '',
      capsLock: false,
      speechRecognitionOn: false,
      shift: false,
      language: {
        code: 'en',
        schema: langEnKeySchema,
      },
    };
  }

  init(textareaSelector, toggleButtonSelector) {
    this.elements.textarea = document.querySelector(textareaSelector);
    this.elements.toggleButton = document.querySelector(toggleButtonSelector);
    this.elements.keyboard = document.createElement('div');
    this.elements.keyboard.classList.add('keyboard', 'keyboard--hidden');

    this.elements.keysWrap = document.createElement('div');
    this.elements.keysWrap.classList.add('keyboard__keys');

    this.elements.keyboard.appendChild(this.elements.keysWrap);
    this.elements.keysWrap.appendChild(this.generateKeys());
    this.elements.keys = this.elements.keysWrap.querySelectorAll(
      '.keyboard__key',
    );

    this.setKeyActions(this.elements.keys);
    document.body.appendChild(this.elements.keyboard);
    document.addEventListener('keyup', this.highLightButtons.bind(this));

    // this.elements.textarea.addEventListener('focus', this.open);
    this.elements.toggleButton.addEventListener('click', () => this.toggleKeyboard());
    this.updateFromInput();
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  }

  switchLanguage() {
    this.properties.capsLock = false;
    this.properties.shift = false;
    this.properties.language = this.properties.language.code === 'en'
      ? { code: 'ru', schema: langRuKeySchema }
      : { code: 'en', schema: langEnKeySchema };
    this.elements.keysWrap.innerHTML = '';
    this.elements.keysWrap.appendChild(this.generateKeys());
    this.elements.keys = this.elements.keysWrap.querySelectorAll(
      '.keyboard__key',
    );
    this.setKeyActions(this.elements.keys);
  }

  generateKeys() {
    const fragment = document.createDocumentFragment();
    let row = document.createElement('div');
    row.classList.add('keyboard__row');
    fragment.appendChild(row);
    const keyCreator = new Key(
      this.properties.language.code,
    );

    this.properties.language.schema.forEach((key, index) => {
      const keyElement = keyCreator.generateKey(key);
      keyElement.setAttribute('data-key-index', `index-${index}`);

      let addLineBreak = false;
      if (this.properties.language.code === 'en') {
        addLineBreak = ['backspace', 'lang', 'enter', '/'].indexOf(key.basic) !== -1;
      } else {
        addLineBreak = ['backspace', 'lang', 'enter', '.'].indexOf(key.basic) !== -1;
      }

      row.appendChild(keyElement);
      if (addLineBreak) {
        row = document.createElement('div');
        row.classList.add('keyboard__row');
        fragment.appendChild(row);
      }
    });
    return fragment;
  }

  setKeyActions(keys) {
    keys.forEach((key) => {
      const action = key.getAttribute('data-action-key-type');
      if (typeof action === 'string' && action.length > 0) {
        switch (action) {
          case 'delete':
            key.addEventListener('click', () => {
              this.deleteSymbol();
              this.eventhandlers.onInput();
            });
            break;

          case 'tab':
            key.addEventListener('click', (event) => {
              event.preventDefault();
              this.addSymbol('    ');
              this.eventhandlers.onInput('add', 4);
            });
            break;
          case 'backspace':
            key.addEventListener('click', () => {
              this.removeSymbol();
              this.eventhandlers.onInput('remove');
            });
            break;

          case 'capslock':
            key.addEventListener('click', () => {
              this.toggleCapsLock();
              key.classList.toggle(
                'keyboard__key--active',
                this.properties.capsLock,
              );
            });
            break;

          case 'shift':
            key.addEventListener('click', () => {
              this.toggleShift();
              key.classList.toggle(
                'keyboard__key--active',
                this.properties.shift,
              );
              this.eventhandlers.onInput();
            });
            break;

          case 'enter':
            key.addEventListener('click', () => {
              this.addSymbol('\n');
              this.eventhandlers.onInput('add');
            });
            break;

          case 'done':
            key.addEventListener('click', this.close);
            break;

          case 'space':
            key.addEventListener('click', () => {
              this.addSymbol(' ');
              this.eventhandlers.onInput('add');
            });
            break;

          case 'arrowleft':
            key.addEventListener('click', () => {
              this.moveLeft();
              this.eventhandlers.onInput();
            });
            break;

          case 'arrowright':
            key.addEventListener('click', () => {
              this.moveRight();
              this.eventhandlers.onInput();
            });
            break;

          case 'lang':
            key.addEventListener('click', () => {
              this.switchLanguage();
              this.eventhandlers.onInput();
            });
            break;

          case 'voice':
            key.addEventListener('click', () => {
              this.toggleSpeechRecognintion();
              key.classList.toggle(
                'keyboard__key--active',
                this.properties.speechRecognitionOn,
              );
            });
            break;

          default:
            break;
        }
      } else {
        const spec = key.getAttribute('data-spec');
        const basic = key.getAttribute('data-basic');
        key.addEventListener('click', () => {
          let symbol;
          if (this.properties.shift) {
            symbol = this.properties.capsLock
              ? spec.toLowerCase()
              : spec.toUpperCase();
          } else {
            symbol = this.properties.capsLock
              ? basic.toUpperCase()
              : basic.toLowerCase();
          }
          this.addSymbol(symbol);
          this.eventhandlers.onInput('add');
        });
      }
    });
  }

  addSymbol(symbol) {
    if (
      this.elements.textarea.selectionEnd
      !== this.elements.textarea.selectionStart
    ) {
      this.removeSymbol();
    }
    this.properties.value = this.properties.value.slice(0, this.elements.textarea.selectionStart)
      + symbol
      + this.properties.value.slice(this.elements.textarea.selectionStart);
  }

  removeSymbol() {
    const start = this.elements.textarea.selectionEnd
      === this.elements.textarea.selectionStart
      ? this.elements.textarea.selectionStart - 1
      : this.elements.textarea.selectionStart;
    this.properties.value = this.properties.value.slice(0, start)
      + this.properties.value.slice(this.elements.textarea.selectionEnd);
    this.elements.textarea.selectionEnd = start;
    this.elements.textarea.selectionStart = start;
  }

  deleteSymbol() {
    if (
      this.elements.textarea.selectionEnd
      === this.elements.textarea.selectionStart
    ) {
      this.properties.value = this.properties.value.slice(0, this.elements.textarea.selectionStart)
        + this.properties.value.slice(this.elements.textarea.selectionStart + 1);
    } else {
      this.removeSymbol();
    }
  }

  moveRight() {
    if (
      this.elements.textarea.selectionEnd
      === this.elements.textarea.selectionStart
    ) {
      const newPos = this.elements.textarea.selectionEnd + 1;
      this.elements.textarea.selectionEnd = newPos;
      this.elements.textarea.selectionStart = newPos;
    } else {
      this.elements.textarea.selectionStart = this.elements.textarea.selectionEnd;
    }
  }

  moveLeft() {
    if (
      this.elements.textarea.selectionEnd
      === this.elements.textarea.selectionStart
    ) {
      const newPos = this.elements.textarea.selectionStart - 1;
      this.elements.textarea.selectionStart = newPos;
      this.elements.textarea.selectionEnd = newPos;
    } else {
      this.elements.textarea.selectionEnd = this.elements.textarea.selectionStart;
    }
  }

  open = () => {
    this.elements.keyboard.classList.remove('keyboard--hidden');
    // this.elements.toggleButton.textContent = 'Close Keyboard';
  };

  close = () => {
    this.elements.keyboard.classList.add('keyboard--hidden');
    // this.elements.toggleButton.textContent = 'Open Keyboard';
    this.eventhandlers.onClose();
  };

  toggleKeyboard = () => {
    if (this.elements.keyboard.classList.contains('keyboard--hidden')) {
      this.open();
    } else {
      this.close();
    }
  };

  toggleCapsLock = () => {
    this.properties.capsLock = !this.properties.capsLock;
    this.updateLetterSize();
  };

  toggleShift = () => {
    this.properties.shift = !this.properties.shift;
    this.updateSpecChars();
    this.updateLetterSize();
  };

  updateLetterSize = () => {
    Object.keys(this.elements.keys).forEach((key) => {
      if (key.childElementCount === 0) {
        if (this.properties.shift) {
          key.textContent = this.properties.capsLock
            ? key.textContent.toLowerCase()
            : key.textContent.toUpperCase();
        } else {
          key.textContent = this.properties.capsLock
            ? key.textContent.toUpperCase()
            : key.textContent.toLowerCase();
        }
      }
    });
  };

  updateSpecChars = () => {
    Object.keys(this.elements.keys).forEach((key) => {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.shift
          ? key.getAttribute('data-spec')
          : key.getAttribute('data-basic');
      }
    });
  };

  updateFromInput = () => {
    this.elements.textarea.addEventListener('change', () => {
      this.properties.value = this.elements.textarea.value;
    });
  };

  highLightButtons(event) {
    const eventCode = event.code === 'ShiftRight' ? 'ShiftLeft' : event.code;
    let foundIndex;
    const thisLangSchema = this.properties.language.schema;
    for (let i = 0; i < thisLangSchema.length; i += 1) {
      if (eventCode === thisLangSchema[i].keyCode) {
        foundIndex = i;
        break;
      }
    }
    if (foundIndex !== undefined) {
      this.elements.keys[foundIndex].classList.add('key_pressed');
      setTimeout(() => {
        this.elements.keys[foundIndex].classList.remove('key_pressed');
      }, 100);
    }
  }

  toggleSpeechRecognintion() {
    if (this.properties.speechRecognitionOn === false) {
      // eslint-disable-next-line no-undef
      this.recognition = new SpeechRecognition();
      this.elements.textarea.setAttribute('readonly', 'readonly');
      this.properties.speechRecognitionOn = true;
      this.recognition.interimResults = true;
      this.recognition.lang = this.properties.language.code === 'en' ? 'en-US' : 'ru-RU';
      let prevTextFragment = '';
      let textFragment = '';

      const getSpeechResult = (event) => {
        const transcript = Array.from(event.results)
          .map((res) => res[0])
          .map((res) => res.transcript)
          .join('');
        prevTextFragment = textFragment;
        textFragment = transcript;
        this.properties.value = this.properties.value.substring(
          0,
          this.properties.value.length - prevTextFragment.length,
        ) + textFragment;
        this.elements.textarea.value = this.properties.value;
        prevTextFragment = '';

        if (event.results[0].isFinal) {
          this.properties.value += '\n';
          this.elements.textarea.value = this.properties.value;
        }
      };

      this.recognition.addEventListener('start', () => {
        prevTextFragment = '';
        textFragment = '';
      });

      this.recognition.addEventListener('result', getSpeechResult.bind(this));

      this.recognition.addEventListener('end', () => {
        if (this.properties.speechRecognitionOn === true) {
          this.recognition.start();
        }
      });
      this.recognition.start();
    } else {
      this.properties.speechRecognitionOn = false;
      this.recognition.stop();
      this.elements.textarea.removeAttribute('readonly');
      this.elements.textarea.focus();
      this.elements.textarea.selectionStart = this.properties.value.length;
      this.elements.textarea.selectionEnd = this.properties.value.length;
    }
  }
}
