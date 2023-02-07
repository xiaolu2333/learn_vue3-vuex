<template>
  <div>
    <span>BComponent: </span>
    <button @click="this.changeStoreState">Click Me!</button>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  name: 'BComponent',
  data() {
    return {
      store
    }
  },
  methods: {
    changeStoreState() {
      // 通过 $store 访问 store 对象
      this.$store.commit("increment", 'BComponent') // 3，通过 commit 方法调用 mutation 中的 action，修改 state 中的状态
      console.log(this.$store.state.count)  // 通过 state 属性访问 state 中的数据
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>