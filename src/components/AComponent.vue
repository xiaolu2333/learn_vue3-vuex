<template>
  <div>
    <span>AComponent: {{ storeCountState }}</span>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: 'AComponent',
  data() {
    return {
    }
  },
  computed: {
    storeCountState() {
      return store.state.count;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>