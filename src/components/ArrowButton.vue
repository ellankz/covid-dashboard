<template>
  <button
    class="btn control__btn btn_arrows"
    @click="switchCurrentOption()">
    {{ currentOption }}
  </button>
</template>

<script>

export default {
  name: 'ArrowButton',
  created() {},
  props: {
    options: Array,
    currentOption: String,
  },
  data() {
    return {
    };
  },
  methods: {
    switchCurrentOption() {
      let chosenOption = this.options[0];
      const currentIndex = this.options.indexOf(this.currentOption);
      if (currentIndex !== -1) {
        const newIndex = currentIndex + 1 === this.options.length ? 0 : currentIndex + 1;
        chosenOption = this.options[newIndex];
      }
      this.$emit('updateOption', chosenOption);
    },
  },
};
</script>

<style scoped lang="scss">
.btn_arrows {
  background-color: $color-gray;
  position: relative;
  padding: 0.2rem 0.8rem;
  transition: color 0.2s linear;
  font-size: 1.1rem;
  color: $color-blue-2;
  min-width: 95px;

  &::after, &::before {
    content: '';
    transition: border-color 0.2s linear;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position: absolute;
    top: 7px;
  }
  &::after {
    border-left: 5px solid $color-white;
    right: 0;
  }

  &::before {
    border-right:5px solid $color-white;
    left: 0;
  }

  &:hover {
    color: darken($color: $color-blue-2, $amount: 15%);
  }
  &:hover::after {
    border-left-color: darken($color: $color-white, $amount: 20%);
  }

  &:hover::before {
    border-right-color: darken($color: $color-white, $amount: 20%);
  }

  &:active {
    background-color: $color-gray;
    transform: none;
    color: darken($color: $color-blue-2, $amount: 20%);
  }

  &:active::after {
    border-left-color: darken($color: $color-white, $amount: 50%);
  }

  &:active::before {
    border-right-color: darken($color: $color-white, $amount: 50%);
  }
}

</style>
