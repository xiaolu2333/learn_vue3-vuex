<template>
  <div>
    <div>
      <p>{{ localDataComputed }}</p>
      <p>{{ stateOne }}</p>
      <p>{{ stateTwo }}</p>
      <p>{{ stateThree }}</p>
    </div>
    <span>AComponent: {{ count }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AComponent',
  data() {
    return {
      localData: 'localData'
    }
  },
  computed: {
    localDataComputed() {
      return this.localData + 'localComputed'
    },
    // 使用对象展开运算符将此组件的计算属性“混入”到外部计算属性中
    ...mapState({
      count: state => state.count,
      stateOne: state => state.stateOne,
      stateTwo: state => state.stateTwo,
      stateThree: state => state.stateThree
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>