<template>
  <div>
    <div>
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
    }
  },
  computed: mapState(
      // 如果计算属性的名称与 state 的子节点名称相同时，则可以给 mapState 传一个字符串数组。
      [
        'count',  // map this.count to store.state.count
        'stateOne',
        'stateTwo',
        'stateThree'
      ]
  )

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>