<template>
  <footer class="footer">
    <div class="footer__date">
      {{ 'Last data: ' + formatDate(data.Global.Summary.Date) }}
    </div>
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
import moment from 'moment';
import logo from '../../assets/rs-school-logo.png';

const GIHUB_NAME_1 = 'ellankz';
const GIHUB_NAME_2 = 'aazubakin';

export default {
  name: 'Footer',
  props: {
    data: Object,
    state: Object,
  },
  data() {
    return {
      logo,
      gihubNames: [GIHUB_NAME_1, GIHUB_NAME_2],
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD.MM.YYYY');
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  margin-top: 0.5rem;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 0.8rem;

  a, span {
    display: inline-block;
    margin-right: 0.2rem;
  }

  &__text {
    display: flex;
    align-items: flex-end;
  }

  &__rs-school-link {
    display: inline-block;
  }

  &__rs-school-logo {
    width: 3rem;

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

  &__date {
    font-size: 0.8rem;
    color: $color-gray-2;
  }
}
</style>
