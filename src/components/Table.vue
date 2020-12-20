<template>
  <div class="table__container">
    <div class="table__wrap">
      <div class="table__options">
        <h2 class="table__location">
        {{ currentCountry }}
        <img class="table__flag" v-if="state.country" :src="flagPath" :alt="currentCountry">
        </h2>
        <div class="table__caption">
          <strong>{{state.calcType}} for {{state.period.toLowerCase()}} period</strong>
        </div>
      </div>
      <div class="inner-table">
        <div class="inner-table__total total-cases">
          <div class="inner-table__cases-number">
            <span v-if="getStateBtn('All time', 'Total')">
              {{ getTotal.Confirmed.toLocaleString() }}
            </span>
            <span v-else-if ="getStateBtn('New', 'Total')">
              +{{ getLastDayData.Confirmed.toLocaleString() }}
            </span>
            <span v-else-if ="getStateBtn('All time', 'Per 100k')">
              {{ getTotalBy100k.Confirmed.toFixed(2) }}</span>
            <span v-else>
              +{{ getLastDayBy100k.Confirmed.toFixed(2) }}
            </span>
          </div>
          <div class="inner-table__title">Cases</div>
        </div>
        <div class="inner-table__total total-deaths">
          <div class="inner-table__cases-number">
            <span v-if ="getStateBtn('All time', 'Total')">
              {{ getTotal.Deaths.toLocaleString() }}
            </span>
            <span v-else-if ="getStateBtn('New', 'Total')">
              +{{ getLastDayData.Deaths.toLocaleString() }}
            </span>
            <span v-else-if ="getStateBtn('All time', 'Per 100k')">
              {{ getTotalBy100k.Deaths.toFixed(2) }}
            </span>
            <span v-else>
              +{{ getLastDayBy100k.Deaths.toFixed(2) }}
            </span>
          </div>
          <div class="inner-table__title">Deaths</div>
        </div>
        <div class="inner-table__total total-recovered">
          <div class="inner-table__cases-number">
            <span v-if ="getStateBtn('All time', 'Total')">
              {{ getTotal.Recovered.toLocaleString() }}
            </span>
            <span v-else-if ="getStateBtn('New', 'Total')">
              +{{ getLastDayData.Recovered.toLocaleString() }}
            </span>
            <span v-else-if ="getStateBtn('All time', 'Per 100k')">
              {{ getTotalBy100k.Recovered.toFixed(2) }}
            </span>
            <span v-else>
              +{{ getLastDayBy100k.Recovered.toFixed(2) }}
            </span>
          </div>
        <div class="inner-table__title">Recovered</div>
        </div>
      </div>
      <div class="table__switches">
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
      </div>
      <ExpandButton
        v-bind:expanded="expanded"
        @expandClick="expanded ? shrinkTable() : expandTable()"
      />
    </div>
  </div>
</template>

<script>
import ArrowButton from './ArrowButton.vue';
import ExpandButton from './ExpandButton.vue';
import flagsCountries from '../service/countries.json';

export default {
  name: 'Table',
  props: {
    data: Object,
    state: Object,
  },
  components: {
    ExpandButton,
    ArrowButton,
  },
  data() {
    return {
      country: 'World',
      flags: flagsCountries,
      expanded: false,
    };
  },
  computed: {
    flagPath() {
      if (this.state.country === null) return 'RUS';
      return this.flags[this.state.country].flag;
    },
    currentCountry() {
      if (this.state.country === null) return this.country;
      return this.data.Countries[this.state.country].country;
    },
    getTotal() {
      if (this.state.country === null) return this.data.Global.Summary.Total;
      return this.data.Countries[this.state.country].timeline.Summary.Total;
    },
    getTotalBy100k() {
      if (this.state.country === null) return this.data.Global.Summary.TotalPer100k;
      return this.data.Countries[this.state.country].timeline.Summary.TotalPer100k;
    },
    getLastDayData() {
      if (this.state.country === null) return this.data.Global.Summary.New;
      return this.data.Countries[this.state.country].timeline.Summary.New;
    },
    getLastDayBy100k() {
      if (this.state.country === null) return this.data.Global.Summary.NewPer100k;
      return this.data.Countries[this.state.country].timeline.Summary.NewPer100k;
    },
  },
  methods: {
    getStateBtn(period, value) {
      return (this.state.period === period) && (this.state.calcType === value);
    },
    expandTable() {
      this.expanded = true;
      this.$emit('expandBlock', 'table');
    },
    shrinkTable() {
      this.expanded = false;
      this.$emit('shrinkBlock');
    },
  },
};
</script>

<style scoped lang="scss">

.table__wrap {
  max-width: 35rem;
  margin: 0 auto;
}

.table__flag {
  width: 2rem;
  margin-left: 0.5rem;
}

.table__options {
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;
  justify-content: space-between;
  padding: 0 1rem;
}
.inner-table__title {
  margin-bottom: 5px;
}

.table__switches {
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}
.table__caption {
  text-align: right;
  margin-bottom: 15px;
}
.inner-table {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

}

.inner-table__cases-number {
  font-size: 1.8rem;
  line-height: 2.5rem;
}
</style>
