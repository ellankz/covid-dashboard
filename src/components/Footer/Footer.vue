<template>
  <footer class="footer">
    <div class="footer__text">
      <span>Made by </span>
      <a class="footer__github-link" v-bind:href="`https://github.com/${gihubNames[0]}/`" target="_blank">{{ gihubNames[0] }}</a>
      <span> and </span>
      <a class="footer__github-link" v-bind:href="`https://github.com/${gihubNames[1]}/`" target="_blank">{{ gihubNames[1] }}</a>
      <span> for </span>
      <a class="footer__rs-school-link" href="https://rs.school/js/" target="_blank">
        <img
          class="footer__rs-school-logo"
          v-bind:src="logo"
          alt="The Rolling Scopes School">
      </a>
    </div>
  </footer>
</template>

<script>
import logo from '../../assets/rs-school-logo.svg';

const GIHUB_NAME_1 = 'ellankz';
const GIHUB_NAME_2 = 'aazubakin';

export default {
  name: 'Footer',
  data() {
    return {
      logo,
      gihubNames: [GIHUB_NAME_1, GIHUB_NAME_2],
    };
  },
  created() {},
  props: {
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $color-gray;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  text-align: right;
  height: calc(6vh - 0.5rem);

  &__rs-school-logo {
    max-width: 4rem;
    display: inline-block;
    vertical-align: baseline;

    &::before {
      content: ' ';
    }
  }

  &__github-link {
    color: $color-white;
    transition: color 0.2s linear;
    &:hover {
      color: $color-gray-1;
    }
  }
}
</style>
