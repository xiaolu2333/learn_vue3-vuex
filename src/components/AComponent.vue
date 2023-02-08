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
      exchangeRate: 7.0
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
      // 在调用 getter 时，传入额外的参数
      return this.$store.getters.getStateMonetaryUnitCNY2USDv2(this.exchangeRate);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>