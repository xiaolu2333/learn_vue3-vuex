<template>
  <div>
    <div>
      <p>{{ storeStateOne }}</p>
      <p>{{ storeStateTwo }}</p>
      <p>{{ storeStateThree }}</p>
    </div>
    <span>AComponent: {{ storeCountState }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AComponent',
  data() {
    return {
      localCount: 1,
    }
  },
  // computed: {
  //   // 如果有多个状态，则需要在 computed 中添加多个 getter
  //   storeCountState() {
  //     return this.$store.state.count;
  //   },
  //   storeStateOne() {
  //     return this.$store.state.stateOne;
  //   },
  //   storeStateTwo() {
  //     return this.$store.state.stateTwo;
  //   },
  //   storeStateThree() {
  //     return this.$store.state.stateThree;
  //   },
  // },

  // 使用 mapState 辅助函数一次性计算多个状态，
  // // 方式一：使用箭头函数
  // computed: mapState({
  //   storeCountState: state => state.count,
  //   storeStateOne: state => state.stateOne,
  //   storeStateTwo: state => state.stateTwo,
  //   storeStateThree: state => state.stateThree,
  // })
  // // 方式二：传字符串参数，简化箭头函数
  // computed: mapState({
  //   storeCountState: 'count', // 等同于 storeCountState: state => state.count
  //   storeStateOne: 'stateOne',
  //   storeStateTwo: 'stateTwo',
  //   storeStateThree: 'stateThree',
  // })
  // 方式三：为了能够使用 `this` 获取组件局部的状态，必须使用常规函数。然后在 template 中使用 this.storeCountState() 调用
  computed: mapState({
    storeCountState(state) {
      return state.count + this.localCount
    },
    storeStateOne(state) {
      return state.stateOne
    },
    storeStateTwo(state) {
      return state.stateTwo
    },
    storeStateThree(state) {
      return state.stateThree
    },
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>