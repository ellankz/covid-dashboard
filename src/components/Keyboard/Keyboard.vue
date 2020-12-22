<template>
  <span></span>
</template>

<script>
import Keyboard from './virtual-keyboard/VirtualKeyboard';

export default {
  name: 'Keyboard',
  props: {
    inputId: String,
    toggleId: String,
  },
  mounted() {
    const keyboard = new Keyboard();
    keyboard.init(`#${this.inputId}`, `#${this.toggleId}`);
  },
};
</script>

<style lang="scss">

#keyboard-container {
  font-family: Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  background-color: #eee;
}

.use-keyboard-input {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  font-size: 20px;
  height: calc(100vh - 380px);
  height: 300px;
  min-height: 300px;
  max-width: 960px;
  border-radius: 6px;
  border: none;
  line-height: 150%;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2);
}

.use-keyboard-input:focus {
  outline: none;
}

.toggle-keyboard {
  display: block;
  width: 300px;
  margin: 0 auto;
  background: lighten($color-black, 5%); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    $color-gray-3,
    lighten($color-black, 5%)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    $color-gray-3,
    lighten($color-black, 5%)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  border: none;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 2px;
  cursor: pointer;
  transition: box-shadow 200ms, transform 200ms;
}

.toggle-keyboard:active {
  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.14),
    0 0px 5px 0 rgba(0, 0, 0, 0.12);
  transform: translateY(1px);
  outline: none;
}

.toggle-keyboard:focus {
  outline: none;
}

.keyboard {
  z-index: 1001;
  position: fixed;
  left: calc(50%);
  transform: translateX(-65%);
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  user-select: none;
  transition: bottom 0.4s;
  max-width: 960px;
  min-width: 568px;
  margin: 0 auto;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  background: lighten($color-black, 5%); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    $color-gray-3,
    lighten($color-black, 5%)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    $color-gray-3,
    lighten($color-black, 5%)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (max-width: $breakpoint-width-2) {
    transform: translateX(-30%);
    max-width: 700px;
  }
}

.keyboard--hidden {
  bottom: -100%;
}

.keyboard__keys {
  text-align: center;
  padding: 14px 24px;
}

.keyboard__row {
  display: flex;
  justify-content: stretch;
}

.keyboard__key {
  height: 45px;
  width: 6%;
  margin: 3px;
  border-radius: 4px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 1.05rem;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  flex-grow: 1;
  font-family: Roboto, 'Helvetica Neue', sans-serif;
  font-size: 16px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 200ms, transform 200ms, background-color 200ms;
}

.keyboard__key:active {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.14),
    0 0px 5px 0 rgba(0, 0, 0, 0.12);
  transform: translateY(1px);
}

.keyboard__key.key_pressed {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.14),
    0 0px 5px 0 rgba(0, 0, 0, 0.12);
  transform: translateY(1px);
}

.keyboard__key--wide {
  width: 12%;
}

.keyboard__key--extra-wide {
  width: 36%;
  max-width: 500px;
}

.keyboard__key--activatable::after {
  content: '';
  top: 10px;
  right: 10px;
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
}

.keyboard__key--active::after {
  background: #08ff00;
}

.keyboard__key--dark {
  background: rgba(0, 0, 0, 0.25);
}

@media (max-width: 768px) {
  .keyboard {
    max-width: 100%;
    min-width: 100%;
  }

  .keyboard__keys {
    padding: 7px;
  }
}

</style>
