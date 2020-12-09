<template>
  <h2>List</h2>
   <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="data" class="content">
      <p>total: {{ data.Global.TotalConfirmed }}</p>
    </div>
</template>

<script>
export default {
  name: 'List',
  created() {
    this.logData();
  },
  props: {
    data: Object,
    error: String,
    loading: Boolean,
  },
  methods: {
    logData() {
      console.log(this.data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
