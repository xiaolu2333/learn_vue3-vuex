<template>
  <div>
    <p>AComponent: {{ stateCount }}</p>
    <button @click="increment({ amount: this.changeRange.increment })">Increase</button>
    <button @click="decrement({ amount: this.changeRange.decrement})">Decrease</button>
  </div>
</template>

<script>
import { COUNT_INCREMENT_MUTATION, COUNT_DECREMENT_MUTATION } from "@/store/mutation-types";
import {mapMutations} from "vuex";

export default {
  name: 'AComponent',
  data() {
    return {
      changeRange: {
        increment: 1,
        decrement: 1,
      },
    }
  },
  computed: {
    stateCount() {
      return this.$store.state.count;
    },
  },
  methods: {
    // 将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
    // 方式一：使用数组
    ...mapMutations([
        COUNT_INCREMENT_MUTATION, // COUNT_INCREMENT_MUTATION 将被映射为 `this.$store.commit('increment')`
        COUNT_DECREMENT_MUTATION,
    ]),
    // // 方式二：
    // ...mapMutations({
    //   increment: COUNT_INCREMENT_MUTATION,  // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    //   decrement: COUNT_DECREMENT_MUTATION,
    // }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>