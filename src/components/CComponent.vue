<template>
  <div>
    <span>CComponent: </span>
    <button @click="this.changeStoreState">Click Me!</button>
  </div>
</template>

<script>
// 不再需要导入 store，因为我们可以在 this.$store 中访问它

export default {
  name: 'CComponent',
  data() {
    return {
    }
  },
  computed: {
    storeCountState() {
      return this.$store.state.count;
    }
  },
  methods: {
    changeStoreState() {
      this.$store.commit("decrement", 'CComponent')
      console.log(this.storeCountState)
    }
  }
}
</script>

<style scoped>
</style>