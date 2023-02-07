<template>
  <div>
    <span>CComponent: </span>
    <button @click="this.changeStoreState">Click Me!</button>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  name: 'CComponent',
  data() {
    return {
      store
    }
  },
  methods: {
    changeStoreState() {
      // 通过 $store 访问 store 对象
      this.$store.commit("decrement", 'CComponent')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style scoped>
</style>