<template>
  <div v-bind:class="'container' + expanded === true ? 'list-expanded' : ''">
    <div v-bind:class="`list-wrap ${(expanded === true) ? 'list-expanded' : ''}`">
      <div class="switches">
        <ArrowButton
          v-bind:options="['Sort:high', 'Sort:low', 'Sort:default']"
          v-bind:currentOption="sortDirection"
          @updateOption="(direction) => toSort(direction)"
        />
        <ArrowButton
          v-bind:options="['Total', 'Per 100k']"
          v-bind:currentOption="state.calcType"
          @updateOption="(calcType) => {$emit('updateCalcType', calcType)}"
        />
        <ArrowButton
          v-bind:options="['All time', 'New']"
          v-bind:currentOption="state.period"
          @updateOption="(period) => {$emit('updatePeriod', period)}"
        />
        <ArrowButton
          v-bind:options="['Confirmed', 'Deaths', 'Recovered']"
          v-bind:currentOption="state.type"
          @updateOption="(type) => {$emit('updateType', type)}"
        />
      </div>
      <input type="text" placeholder="Search country" v-model="search" class="search">
      <ul class="scrolled">
        <li :key="country" v-for="country in countriesList" class="country_item"
        @click="$emit('updateCountry', {countryCode: country.code})">
          <span>
            <img :src="flags[country.code].flag" :alt="country.code" class="flag">
          </span>
          <span class="country">{{country.country}}: </span>
          <span>{{ getValue(country) }}</span>
        </li>
      </ul>
    </div>
    <ExpandButton v-bind:expanded="expanded" @expandClick="expanded ? shrinkList() : expandList()"/>
  </div>
</template>

<script>
import flagsCountries from '../service/countries.json';
import ArrowButton from './ArrowButton.vue';
import ExpandButton from './ExpandButton.vue';

export default {
  name: 'List',
  components: {
    ExpandButton,
    ArrowButton,
  },
  props: {
    data: Object,
    loadingState: Object,
    state: Object,
  },
  data() {
    return {
      countries: this.data.Countries,
      flags: flagsCountries,
      currentType: this.state.type,
      sortDirection: 'Sort:default',
      search: '',
      expanded: false,
    };
  },
  computed: {
    countriesList() {
      switch (this.sortDirection) {
        case 'Sort:low': return this.sortedList().reverse();
        case 'Sort:high': return this.sortedList();
        default: return Object.values(this.countries)
          .filter((country) => country.country.toLowerCase().includes(this.search.toLowerCase()));
      }
    },
  },
  methods: {
    sortedList() {
      return Object.values(this.countries).sort(this.sortByValue)
        .filter((country) => country.country.toLowerCase().includes(this.search.toLowerCase()));
    },
    sortByValue(a, b) {
      return (this.getValue(a) < this.getValue(b)) ? 1 : -1;
    },
    toSort(direction) {
      this.sortDirection = direction;
    },
    getValue(country) {
      if (this.getStateBtn('All time', 'Total')) {
        return country.timeline.Summary.Total[this.state.type];
      }
      if (this.getStateBtn('New', 'Total')) {
        return country.timeline.Summary.New[this.state.type];
      }
      if (this.getStateBtn('All time', 'Per 100k')) {
        return Number(country.timeline.Summary.TotalPer100k[this.state.type].toFixed(2));
      }
      return Number(country.timeline.Summary.NewPer100k[this.state.type].toFixed(2));
    },
    getStateBtn(period, value) {
      return (this.state.period === period) && (this.state.calcType === value);
    },
    expandList() {
      this.expanded = true;
      this.$emit('expandBlock', 'list');
    },
    shrinkList() {
      this.expanded = false;
      this.$emit('shrinkBlock');
    },
  },
};
</script>

<style scoped lang="scss">
  .container {
    background-color: $color-gray;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .switches {
    padding: 5px;
    display: flex;
    margin-bottom: 10px;
  }

  .radiobuttons {
    margin-bottom: 10px;
  }

  .scrolled {
    overflow: auto;
    max-height: 12vh;
    width: 80%;
    margin-left: 0;
    padding-left: 0;

    .country_item {
      display: flex;
      min-width: 250px;
      transition: background-color 0.2s linear;

      &:hover {
        background-color: $color-gray-1;
        cursor: pointer;
      }
    }
}

.flag {
  margin-right: 10px;
  width: 20px;
}

span {
  margin-right: 10px;
}

.scrolled {
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
      background-color: $color-gray-3;
      border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
      height: 15px;
      border-radius: 5px;
      background-color: $color-black;
  }

}

.list-wrap {
  margin: 0 auto;

  .scrolled {
      margin: 1rem auto;
  }
}

.list-expanded {
  max-width: 500px;

  .scrolled {
    max-height: 70vh;
  }
}

.search {
  width: 80%;
  margin: 0 auto;
  background-color: $color-black;
  color: $color-white;
  border: none;
  display: block;
  padding: 0.3rem;

  &:focus {
    outline: none;
  }
}
</style>
