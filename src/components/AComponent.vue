<template>
  <div>
    <p>AComponent: {{ stateCount }}</p>
    <button @click="increaseStateCount">Increase</button>
    <button @click="decreaseStateCount">Decrease</button>
  </div>
</template>

<script>
import { COUNT_INCREMENT_MUTATION, COUNT_DECREMENT_MUTATION } from "@/store/mutation-types";

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
    increaseStateCount() {
      // 对象风格的提交方式
      this.$store.commit(
          {
            // 使用常量替代 Mutation 事件类型在各种 Flux 实现中是很常见的模式
            type: COUNT_INCREMENT_MUTATION,
            amount: this.changeRange.increment,
          }
      )
      console.log(this.stateCount)
    },
    decreaseStateCount() {
      this.$store.commit(
          {
            type: COUNT_DECREMENT_MUTATION,
            amount: this.changeRange.decrement,
          }
      )
      console.log(this.stateCount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>