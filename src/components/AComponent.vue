<template>
  <div>
    <p>AComponent: {{ stateCount }}</p>
    <button @click="increment({ amount: this.changeRange.increment })">IncreaseByMutation</button>
    <button @click="decrement({ amount: this.changeRange.increment })">DecreaseByAction</button>
  </div>
</template>

<script>
import { COUNT_INCREMENT_MUTATION } from "@/store/mutation-types";
import { mapActions, mapMutations } from "vuex";

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
    ]),

    ...mapActions([
      'decrement', // 将 `this.decrement(amount)` 映射为 `this.$store.dispatch('decrement', amount)`
    ]),
    ...mapActions({
      subs: 'decrement' // 将 `this.subs()` 映射为 `this.$store.dispatch('decrement')`
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>