<template>
  <div>
    <p>AComponent: {{ stateCount }}</p>
    <button @click="increaseStateCount">Increase</button>
    <button @click="decreaseStateCount">Decrease</button>
  </div>
</template>

<script>

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
      // 提交一个有载荷的名为 increment 的 mutation 来修改状态
      this.$store.commit(
          "increment",
          {
            amount: this.changeRange.increment,
          }
      )
      console.log(this.stateCount)
    },
    decreaseStateCount() {
      this.$store.commit(
          "decrement",
          {
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