<template>
  <div>
    <span>CComponent: </span>
    <button @click="this.changeStoreState">Click Me!</button>
  </div>
</template>

<script>

import store from "@/store";

export default {
  name: 'CComponent',
  data() {
    return {
    }
  },
  computed: {
    storeCountState() {
      return store.state.count;
    }
  },
  methods: {
    changeStoreState() {
      store.commit("decrement", 'CComponent')
      console.log(this.storeCountState)
    }
  }
}
</script>

<style scoped>
</style>