<template>
  <div>
    <span>AComponent: {{ storeCountState }}</span>
  </div>
</template>

<script>
// 不再需要导入 store，因为我们可以在 this.$store 中访问它

export default {
  name: 'AComponent',
  data() {
    return {
    }
  },
  computed: {
    storeCountState() {
      return this.$store.state.count;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>