<template>
  <div>
    <h2>List</h2>
    <div v-if="loadingState.loading" class="loading">
      Loading...
    </div>

    <div v-if="loadingState.error" class="error">
      {{ loadingState.error }}
    </div>

    <div v-if="data" class="content">
      <p>total: {{ data.Global.Summary.Total.Confirmed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  created() {},
  props: {
    data: Object,
    loadingState: Object,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
