<template>
  <div>
    <p>AComponent: {{ stateCount }}</p>
    <button @click="increment({ amount: this.changeRange.increment })">IncreaseByMutation</button>
    <button @click="decrementCount">DecreaseByAction</button>
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
    ...mapMutations([
        COUNT_INCREMENT_MUTATION, // COUNT_INCREMENT_MUTATION 将被映射为 `this.$store.commit('increment')`
        COUNT_DECREMENT_MUTATION,
    ]),

    decrementCount() {
      // 添加了载荷与 `this.$store.commit('decrement', { amount: this.changeRange.decrement })` 等效
      this.$store.dispatch("decrement", { amount: this.changeRange.decrement });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>