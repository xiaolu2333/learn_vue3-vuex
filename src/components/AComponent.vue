<template>
  <div>
    <!-- 2，获取 state 中的状态 count 的数据 -->
    <span>AComponent: {{ this.store.state.count }}</span>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  name: 'AComponent',
  data() {
    return {
      store // 1，通过 $store 访问 store 对象
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>