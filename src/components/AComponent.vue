<template>
  <div>
    <div>
      <p>{{ getStateMonetaryUnitCNY }}</p>
      <p>=</p>
      <p>{{ getStateMonetaryUnitCNY2USDv2(this.exchangeRate) }}</p>
    </div>
    <span>AComponent: {{ getStateCount }}</span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'AComponent',
  data() {
    return {
      exchangeRate: 7.0
    }
  },

  // 方式一，使用数组原样导入 getter
  computed: mapGetters([
    'getStateCount',
    'getStateMonetaryUnitCNY',
    'getStateMonetaryUnitCNY2USDv2'
  ]),
  // 方式二，使用对象展开运算符将 getter 混入 computed 对象中
  // computed: {
  //   ...mapGetters([
  //     'getStateCount',
  //     'getStateMonetaryUnitCNY',
  //     'getStateMonetaryUnitCNY2USDv2'
  //   ])
  // },
  // 方式三：使用别名
  // computed: {
  //   ...mapGetters({
  //     count: 'getStateCount',  // 把 `this.count` 映射为 `this.$store.getters.getStateMonetaryUnitCNY`
  //     monetaryUnitCNY: 'getStateMonetaryUnitCNY',
  //     monetaryUnitCNY2USDv2: 'getStateMonetaryUnitCNY2USDv2'
  //   })
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>