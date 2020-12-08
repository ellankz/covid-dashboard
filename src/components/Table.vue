<template>
  <h2>Table</h2>
  <p>total: {{ data.Global.TotalConfirmed }}</p>
</template>

<script>
export default {
  name: 'Table',
  created() {
    this.logData();
  },
  props: {
    data: Object,
  },
  methods: {
    logData() {
      console.log(this.data.Global.NewConfirmed);
      console.log(this.data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
