<template>
  <div>
    <div>
      <p>{{ stateMonetaryUnitCNY }}</p>
      <p>=</p>
      <p>{{ transCNY2USD }}</p>
    </div>
    <span>AComponent: {{ stateCount }}</span>
  </div>
</template>

<script>
export default {
  name: 'AComponent',
  data() {
    return {
    }
  },
  computed: {
    stateCount() {
      return this.$store.getters.getStateCount;
    },
    stateMonetaryUnitCNY() {
      return this.$store.getters.getStateMonetaryUnitCNY;
    },
    transCNY2USD() {
      return this.$store.getters.getStateMonetaryUnitCNY2USD;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>