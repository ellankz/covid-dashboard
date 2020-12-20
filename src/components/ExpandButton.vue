<template>
  <button
        class="btn expand_btn"
        @click="$emit('expandClick')"
      >
      <img
        v-bind:src="expanded ? shrinkIcon : expandIcon"
        v-bind:alt="expanded ? 'Shrink' : 'Exapnd'" />
      </button>
</template>

<script>
import expandIcon from '../assets/expand.svg';
import shrinkIcon from '../assets/shrink.svg';

export default {
  name: 'ExpandButton',
  created() {},
  props: {
    expanded: Boolean,
  },
  data() {
    return {
      expandIcon,
      shrinkIcon,
    };
  },
};
</script>

<style scoped lang="scss">
  .expand_btn {
    position: absolute;
    top: -9px;
    right: -9px;
    height: 18px;
    width: 18px;
    min-width: auto;
    padding: 2px;

    img {
      height: 12px;
      width: 12px;
    }
  }
</style>
