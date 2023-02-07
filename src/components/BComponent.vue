<template>
  <div>
    <span>BComponent: </span>
    <button @click="this.changeStoreState">Click Me!</button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: 'BComponent',
  data() {
    return {
    }
  },
  // 由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在 computed 计算属性中返回某个状态
  computed: {
    storeCountState() {
      return store.state.count;
    }
  },
  methods: {
    changeStoreState() {
      store.commit("increment", 'BComponent')
      console.log(this.storeCountState)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>