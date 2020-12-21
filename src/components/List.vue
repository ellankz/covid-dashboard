<template>
<<<<<<< HEAD
  <div v-bind:class="'container' + expanded === true ? 'list-expanded' : ''">
    <div v-bind:class="`list-wrap ${(expanded === true) ? 'list-expanded' : ''}`">
      <div class="switches">
        <div class="absolute">
          <button class="btn" @click = "pressBy100kBtn()">{{ getTotalBtnText }}</button>
        </div>
        <div class="all-time">
          <button class="btn" @click = "pressNewBtn()">{{ getNewButtonText }}</button>
        </div>
        <div class="sort">
          <button class="btn" @click = "toSort()">Sort</button>
        </div>
      </div>
      <div class="radiobuttons">
        <input type="radio" id="confirmed" name="parameter"
        v-model="currentType"
        checked
        @change="$emit('updateType', 'Confirmed')">
        <label for="confirmed">Confirmed</label>

        <input type="radio" id="deaths" name="parameter"
        v-model="currentType"
        @change="$emit('updateType', 'Deaths')">
        <label for="deaths">Deaths</label>

        <input type="radio" id="recovered" name="parameter"
        v-model="currentType"
        @change="$emit('updateType', 'Recovered')">
        <label for="recovered">Recovered</label>
      </div>
      <input type="text" placeholder="Search country" v-model="search">
      <ul class="scrolled">
        <li :key="country" v-for="country in countriesList"
        @click="$emit('updateCountry', {countryCode: country.code})">
          <span>
            <img :src="flags[country.code].flag" :alt="country.code">
          </span>
          <span class="country">{{country.country}}: </span>
          <span>{{ getValue(country) }}</span>
        </li>
      </ul>
    </div>
    <ExpandButton v-bind:expanded="expanded" @expandClick="expanded ? shrinkList() : expandList()"/>
=======
  <div class="container">
    <div class="switches">
      <div class="absolute">
        <button class="btn" @click = "pressBy100kBtn()">{{ getTotalBtnText }}</button>
      </div>
      <div class="all-time">
        <button class="btn" @click = "pressNewBtn()">{{ getNewButtonText }}</button>
      </div>
      <div class="sort">
        <button class="btn" @click = "toSort()">Sort</button>
      </div>
    </div>
    <div class="radiobuttons">
      <input type="radio" id="confirmed" name="parameter"
      v-model="currentType"
      checked
      @change="$emit('updateType', 'Confirmed')">
      <label for="confirmed">Confirmed</label>

      <input type="radio" id="deaths" name="parameter"
      v-model="currentType"
      @change="$emit('updateType', 'Deaths')">
      <label for="deaths">Deaths</label>

      <input type="radio" id="recovered" name="parameter"
      v-model="currentType"
      @change="$emit('updateType', 'Recovered')">
      <label for="recovered">Recovered</label>
    </div>
    <input type="text" placeholder="Search country" v-model="search">
    <ul>
      <li :key="country" v-for="country in countriesList"
      @click="$emit('updateCountry', {countryCode: country.code})">
        <span>
          <img :src="flags[country.code].flag" :alt="country.code">
        </span>
        <span class="country">{{country.country}}: </span>
        <span>{{ getValue(country) }}</span>
      </li>
    </ul>
>>>>>>> db16b43e8abaf68bed221a5c6e09696df334b8cb
  </div>
</template>

<script>
import flagsCountries from '../service/countries.json';
<<<<<<< HEAD
import ExpandButton from './ExpandButton.vue';
=======
>>>>>>> db16b43e8abaf68bed221a5c6e09696df334b8cb

export default {
  name: 'List',
  components: {
    ExpandButton,
  },
  props: {
    data: Object,
    loadingState: Object,
    state: Object,
  },
  data() {
    return {
      sortParam: '',
      countries: this.data.Countries,
      flags: flagsCountries,
      currentType: this.state.type,
      isSorted: false,
      search: '',
<<<<<<< HEAD
      expanded: false,
=======
>>>>>>> db16b43e8abaf68bed221a5c6e09696df334b8cb
    };
  },
  computed: {
    getNewButtonText() {
      return this.state.period === 'All time' ? 'New' : 'All time';
    },
    getTotalBtnText() {
      return this.state.calcType === 'Total' ? 'Per 100k' : 'Total';
    },
    countriesList() {
      switch (this.sortParam) {
        case 'toDown': return this.sortedList();
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
    toSort() {
      this.isSorted = !this.isSorted;
      if (!this.isSorted) this.sortParam = 'toDown';
      else this.sortParam = '';
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
    pressNewBtn() {
      this.$emit('updatePeriod', this.state.period === 'All time' ? 'New' : 'All time');
    },
    pressBy100kBtn() {
      this.$emit('updateCalcType', this.state.calcType === 'Total' ? 'Per 100k' : 'Total');
    },
<<<<<<< HEAD
    expandList() {
      this.expanded = true;
      this.$emit('expandBlock', 'list');
    },
    shrinkList() {
      this.expanded = false;
      this.$emit('shrinkBlock');
    },
=======
>>>>>>> db16b43e8abaf68bed221a5c6e09696df334b8cb
  },
};
</script>

<style scoped lang="scss">
  .container {
    background-color: $color-gray;
    padding: 10px;
<<<<<<< HEAD
=======
    width: 350px;
>>>>>>> db16b43e8abaf68bed221a5c6e09696df334b8cb
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .switches {
<<<<<<< HEAD
    padding: 5px;
    display: flex;
    margin-bottom: 10px;
  }

  .radiobuttons {
    margin-bottom: 10px;
  }

  label {
    margin: 5px;
  }

  ul {
    overflow: auto;
    max-height: 15vh;
    width: 80%;
    margin-left: 0;
    padding-left: 0;

    li {
      display: flex;
      min-width: 250px;
      transition: background-color 0.2s linear;

      &:hover {
        background-color: $color-gray-1;
        cursor: pointer;
      }
    }
}

=======
  padding: 5px;
  display: flex;
  margin-bottom: 10px;
}
.radiobuttons {
  margin-bottom: 10px;
}
label {
  margin: 5px;
}
  ul {
    overflow: auto;
    height: 300px;
    margin-left: 0;
    padding-left: 0;
  li {
    display: flex;
    min-width: 250px;
    .country {
      width: 100px;
    }
  }
  li:hover {
    background-color: grey;
    cursor: pointer;
  }
}
>>>>>>> db16b43e8abaf68bed221a5c6e09696df334b8cb
img {
  margin-right: 10px;
  width: 20px;
}

span {
  margin-right: 10px;
}
<<<<<<< HEAD

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
=======
>>>>>>> db16b43e8abaf68bed221a5c6e09696df334b8cb
</style>
